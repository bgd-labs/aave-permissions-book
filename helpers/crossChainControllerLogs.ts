import { ChainId } from '@bgd-labs/toolbox';
import { networkConfigs, Pools } from './configs.js';
import { getLogs } from './eventLogs.js';
import { getLimit } from './limits.js';
import { Client, Log, parseAbi } from 'viem';


export const senderUpdatedABI = [
  'event SenderUpdated(address indexed sender, bool indexed isApproved)',
  // 'event ReceiverBridgeAdaptersUpdated(address indexed bridgeAdapter, bool indexed allowed, uint256 indexed chainId)',
];

export const parseLog = (
  abi: string[],
  eventLog: Log,
): ethers.utils.Result => {
  const iface = parseAbi(abi);
  const parsedEvent = iface.parseLog(eventLog);
  return parsedEvent.args;
};

export const getCCCSendersAndAdapters = async (
  provider: Client,
  oldSenders: string[],
  // oldBridgeAdapters: string[],
  fromBlock: number,
  addressBook: any,
  chainId: typeof ChainId | string,
  pool: Pools,
) => {
  let timeout = undefined;
  let limit = getLimit(chainId);

  let eventLogs: Log[] = [];
  let finalBlock: number = 0;

  // get sender updated event
  const senderUpdatedTopic0 = utils.id('SenderUpdated(address,bool)');

  if (
    pool === Pools.TENDERLY ||
    pool === Pools.GHO_TENDERLY ||
    pool == Pools.ETHERFI_TENDERLY ||
    pool == Pools.LIDO_TENDERLY
  ) {
    const networkLogs = await getLogs({
      provider,
      address: addressBook.CROSS_CHAIN_CONTROLLER,
      fromBlock,
      logs: [],
      limit,
      timeout,
      maxBlock: networkConfigs[Number(chainId)].pools[pool].tenderlyBlock,
      topic0: senderUpdatedTopic0,
      chainId,
    });
    const tenderlyProvider = new providers.StaticJsonRpcProvider(
      networkConfigs[Number(chainId)].pools[pool].tenderlyRpcUrl,
    );

    limit = 999;
    timeout = 10000;

    const tenderlyBlock =
      networkConfigs[Number(chainId)].pools[pool].tenderlyBlock ||
      networkLogs.finalBlock;

    const tenderlyLogs = await getLogs({
      provider: tenderlyProvider,
      address: addressBook.CROSS_CHAIN_CONTROLLER,
      fromBlock: tenderlyBlock,
      logs: [],
      limit,
      timeout,
      tenderly: true,
      topic0: senderUpdatedTopic0,
      chainId,
    });

    const logs = [...networkLogs.eventLogs, ...tenderlyLogs.eventLogs];

    eventLogs = logs;
    finalBlock = networkLogs.finalBlock;
  } else {
    const logs = await getLogs({
      provider,
      address: addressBook.CROSS_CHAIN_CONTROLLER,
      fromBlock,
      logs: [],
      limit,
      timeout,
      topic0: senderUpdatedTopic0,
      chainId,
    });
    eventLogs = logs.eventLogs;
    finalBlock = logs.finalBlock;
  }

  const senders = new Set<string>(oldSenders);
  // const bridgeAdapters = new Set<string>(oldBridgeAdapters);

  // save or remove senders
  for (let eventLog of eventLogs) {
    if (eventLog.topics[0] === senderUpdatedTopic0) {
      const { sender, isApproved } = parseLog(senderUpdatedABI, eventLog);
      // console.log(`sender
      //   topic0: ${eventLog.topics[0]}
      //   sender : ${sender}
      //   isApproved: ${isApproved}
      // `);

      if (isApproved) {
        senders.add(sender);
      } else {
        senders.delete(sender);
      }
    } else {
      console.error(new Error('some error parsing logs'));
      return {
        senders: Array.from(senders),
        // bridgeAdapters: Array.from(bridgeAdapters),
        latestCCCBlockNumber: finalBlock,
      };
    }
  }

  return {
    senders: Array.from(senders),
    // bridgeAdapters: Array.from(bridgeAdapters),
    latestCCCBlockNumber: finalBlock,
  };
};
