import { getLimit } from './limits.js';
import { Client, Log } from 'viem';
import { getEvents, getRpcClientFromUrl } from './rpc.js';
import { Pools } from './configs.js';
import { networkConfigs } from './configs.js';


export const getSenders = ({
  oldSenders,
  eventLogs,
}: {
  oldSenders: string[],
  eventLogs: Log[],
}) => {

  const senders = new Set<string>(oldSenders);

  eventLogs.forEach((eventLog) => {
    // @ts-ignore
    const sender = eventLog.args.sender;
    // @ts-ignore
    const isApproved = eventLog.args.isApproved;

    // @ts-ignore
    if (eventLog.eventName === 'SenderUpdated') {
      // console.log(`sender
      //   sender : ${sender}
      //   isApproved: ${isApproved}
      // `);

      if (isApproved) {
        senders.add(sender);
      } else {
        senders.delete(sender);
      }

    }
  })

  return Array.from(senders);
};

export const getCCCSendersAndAdapters = async (
  client: Client,
  oldSenders: string[],
  fromBlock: number,
  addressBook: any,
  chainId: string,
  pool: Pools,
) => {
  let limit = getLimit(chainId) ?? 0;

  let events: Log[] = [];
  let latestBlockNumber = 0;

  if (
    pool === Pools.TENDERLY
  ) {
    const { logs: preTenderlyForkEvents, currentBlock: preTenderlyForkCurrentBlock } = await getEvents({
      client,
      fromBlock,
      contract: addressBook.CROSS_CHAIN_CONTROLLER,
      eventTypes: ['SenderUpdated'],
      maxBlock: networkConfigs[Number(chainId)].pools[pool].tenderlyBlock!,
      limit
    });

    const tenderlyProvider = getRpcClientFromUrl(
      networkConfigs[Number(chainId)].pools[pool].tenderlyRpcUrl!,
    );


    const { logs: tenderlyForkEvents } = await getEvents({
      client: tenderlyProvider,
      fromBlock: networkConfigs[Number(chainId)].pools[pool].tenderlyBlock!,
      contract: addressBook.CROSS_CHAIN_CONTROLLER,
      eventTypes: ['SenderUpdated'],
      limit: 999
    });
    events = [...preTenderlyForkEvents, ...tenderlyForkEvents];

    latestBlockNumber = preTenderlyForkCurrentBlock;
  } else {
    const { logs: networkEvents, currentBlock: eventsCurrentBlock } = await getEvents({
      client,
      fromBlock,
      contract: addressBook.CROSS_CHAIN_CONTROLLER,
      eventTypes: ['SenderUpdated'],
      limit
    });
    events = networkEvents;
    latestBlockNumber = eventsCurrentBlock;
  }


  const senders = getSenders({
    oldSenders,
    eventLogs: events,
  });

  console.log(`chainId: ${client.chain?.id}, latestCCCBlockNumber: ${latestBlockNumber}`);

  return {
    senders,
    latestCCCBlockNumber: latestBlockNumber,
  };
};
