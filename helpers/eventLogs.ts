import { providers } from 'ethers';
import { ChainId } from '@aave/contract-helpers';

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export type GetLogsType = {
  provider: providers.Provider;
  address: string;
  fromBlock: number;
  logs: any[];
  limit?: number;
  timeout?: number;
  maxBlock?: number;
  retries?: number;
  topic0?: string;
  topic1?: string;
  topic2?: string;
  topic3?: string;
  tenderly?: boolean;
  chainId?: ChainId | string;
};

const MAX_RETRIES = 5;
export const getLogs = async ({
  provider,
  address,
  fromBlock,
  logs,
  limit,
  timeout,
  maxBlock,
  retries,
  topic0,
  topic1,
  topic2,
  topic3,
  tenderly,
  chainId,
}: GetLogsType): Promise<{
  eventLogs: providers.Log[];
  finalBlock: number;
}> => {
  const currentBlock = await provider.getBlockNumber();

  // TODO: for now i have put a margin, but should maybe be comparision between from and current
  if (!tenderly && fromBlock + 10 >= (maxBlock ?? currentBlock)) {
    return { eventLogs: logs, finalBlock: fromBlock };
  } else if (tenderly && fromBlock >= (maxBlock ?? currentBlock)) {
    return { eventLogs: logs, finalBlock: fromBlock };
  }

  let toBlock: number = 0;
  if (limit) {
    if (maxBlock) {
      toBlock = fromBlock + limit > maxBlock ? maxBlock : fromBlock + limit;
    } else {
      toBlock =
        fromBlock + limit > currentBlock ? currentBlock : fromBlock + limit;
    }
  } else {
    if (maxBlock) {
      toBlock = currentBlock > maxBlock ? maxBlock : currentBlock;
    } else {
      toBlock = currentBlock;
    }
  }

  // get All logs of stream creation

  // Quick patch, to not add nulls into the query, as not clear how support for this is working on tenderly.
  // For now we use only Topic 0 or no topics so should be fine
  const topics = [];
  if (topic0) {
    topics.push(topic0);
  }
  if (topic1) {
    topics.push(topic1);
  }
  if (topic2) {
    topics.push(topic2);
  }
  if (topic3) {
    topics.push(topic3);
  }
  const logEventFilter = {
    address,
    topics, //: [topic0 ?? null, topic1 ?? null, topic2 ?? null, topic3 ?? null],
    fromBlock,
    toBlock,
  };

  try {
    const logEvents = await provider.getLogs(logEventFilter);
    logs.push(...logEvents);

    console.log(
      `${chainId ? chainId : ''} | ${
        tenderly ? 'tenderly' : ''
      } | from: ${fromBlock} to: ${toBlock} logs: ${logEvents.length}`,
    );

    return await getLogs({
      provider,
      address,
      fromBlock: toBlock,
      logs,
      limit,
      timeout,
      maxBlock,
      retries: 0, // if last call was successful, reset retries
      topic0,
      topic1,
      topic2,
      topic3,
      chainId,
    });
  } catch (error) {
    if (!retries || retries < MAX_RETRIES) {
      console.error(`${chainId ? chainId : ''} | Error => retry: ${retries}`);
      // @ts-ignore
      if (error.code === 'TIMEOUT') {
        if (timeout) {
          console.log(
            `${chainId ? chainId : ''} | awaiting tiemout ${timeout}`,
          );
          await delay(timeout);
        }

        return await getLogs({
          provider,
          address,
          fromBlock: toBlock,
          logs,
          limit,
          timeout,
          maxBlock,
          retries: (retries ?? 0) + 1,
          topic0,
          topic1,
          topic2,
          topic3,
          chainId,
        });
      } else {
        console.log(`${chainId ? chainId : ''} | To many blocks ${error}`);
        // solution that will work with generic rpcs or
        // if alchemy fails with different error
        const midBlock = (fromBlock + toBlock) >> 1;
        const arr1 = await getLogs({
          provider,
          address,
          fromBlock,
          logs: [],
          limit,
          timeout,
          maxBlock: midBlock,
          retries: (retries ?? 0) + 1,
          topic0,
          topic1,
          topic2,
          topic3,
          chainId,
        });
        const arr2 = await getLogs({
          provider,
          address,
          fromBlock: midBlock + 1,
          logs: [],
          limit,
          timeout,
          maxBlock: toBlock,
          retries: (retries ?? 0) + 1,
          topic0,
          topic1,
          topic2,
          topic3,
          chainId,
        });
        const allLogs = [...logs, ...arr1.eventLogs, ...arr2.eventLogs];
        return { eventLogs: allLogs, finalBlock: toBlock };
      }
    } else {
      // @ts-ignore
      console.log(`${chainId ? chainId : ''} | ${error.code}`);
      return { eventLogs: logs, finalBlock: fromBlock };
    }
  }
};
