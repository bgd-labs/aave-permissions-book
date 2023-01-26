import { providers } from 'ethers';

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
};

const MAX_RETRIES = 3;
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
}: GetLogsType): Promise<{
  eventLogs: providers.Log[];
  finalBlock: number;
}> => {
  const currentBlock = await provider.getBlockNumber();

  // TODO: for now i have put a margin, but should maybe be comparision between from and current
  if (fromBlock + 10 >= (maxBlock ?? currentBlock)) {
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
  const logEventFilter = {
    address,
    topics: [topic0 ?? null, topic1 ?? null, topic2 ?? null, topic3 ?? null],
    fromBlock,
    toBlock,
  };
  try {
    const logEvents = await provider.getLogs(logEventFilter);
    logs.push(...logEvents);

    console.log(`from: ${fromBlock} to: ${toBlock} logs: ${logEvents.length}`);

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
    });
  } catch (error) {
    // @ts-ignore
    console.log('error=> ', error.code);
    // @ts-ignore
    if (error.code === 'TIMEOUT') {
      if (timeout) {
        await delay(timeout);
      }

      if (!retries || retries < MAX_RETRIES) {
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
        });
      } else {
        return { eventLogs: logs, finalBlock: fromBlock };
      }
    } else {
      // throw error;
      return { eventLogs: logs, finalBlock: fromBlock };
    }
  }
};
