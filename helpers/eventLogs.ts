import { providers } from 'ethers';

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

const MAX_RETRIES = 3;
export const getLogs = async (
  provider: providers.Provider,
  address: string,
  fromBlock: number = 0,
  logs: any[] = [],
  limit: number | undefined = undefined,
  timeout: number | undefined = undefined,
  retries: number | undefined = 0,
  topic0: string | null = null,
  topic1: string | null = null,
  topic2: string | null = null,
  topic3: string | null = null,
): Promise<{ eventLogs: providers.Log[]; finalBlock: number }> => {
  const currentBlock = await provider.getBlockNumber();

  // TODO: for now i have put a margin, but should maybe be comparision between from and current
  if (fromBlock + 10 >= currentBlock) {
    return { eventLogs: logs, finalBlock: fromBlock };
  }

  let toBlock: number = 0;
  if (limit) {
    toBlock =
      fromBlock + limit > currentBlock ? currentBlock : fromBlock + limit;
  } else {
    toBlock = currentBlock;
  }

  // get All logs of stream creation
  const logEventFilter = {
    address,
    topics: [topic0, topic1, topic2, topic3],
    fromBlock,
    toBlock,
  };
  try {
    const logEvents = await provider.getLogs(logEventFilter);
    logs.push(...logEvents);

    console.log(`from: ${fromBlock} to: ${toBlock} logs: ${logEvents.length}`);

    return await getLogs(
      provider,
      address,
      toBlock,
      logs,
      limit,
      timeout,
      0, // if last call was successful, reset retries
      topic0,
      topic1,
      topic2,
      topic3,
    );
  } catch (error) {
    // @ts-ignore
    console.log('error=> ', error.code);
    // @ts-ignore
    if (error.code === 'TIMEOUT') {
      if (timeout) {
        await delay(timeout);
      }

      if (retries < MAX_RETRIES) {
        return await getLogs(
          provider,
          address,
          toBlock,
          logs,
          limit,
          timeout,
          retries + 1,
          topic0,
          topic1,
          topic2,
          topic3,
        );
      } else {
        return { eventLogs: logs, finalBlock: fromBlock };
      }
    } else {
      // throw error;
      return { eventLogs: logs, finalBlock: fromBlock };
    }
  }
};
