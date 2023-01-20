import { providers } from 'ethers';

export const getLogs = async (
  provider: providers.Provider,
  address: string,
  fromBlock: number = 0,
  logs: any[] = [],
  limit: number | undefined = undefined,
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
  const streamCreatedFilter = {
    address,
    topics: [topic0, topic1, topic2, topic3],
    fromBlock,
    toBlock,
  };
  const streamsCreated = await provider.getLogs(streamCreatedFilter);
  logs.push(...streamsCreated);

  return await getLogs(
    provider,
    address,
    toBlock,
    logs,
    limit,
    topic0,
    topic1,
    topic2,
    topic3,
  );
};
