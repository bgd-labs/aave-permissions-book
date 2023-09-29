import { ethers, providers, utils } from 'ethers';
import { ChainId } from '@aave/contract-helpers';
import { Pools } from './configs.js';
import { getLogs } from './eventLogs.js';
import { getLimit } from './limits.js';

export const senderUpdatedABI = [
  'event SenderUpdated(address indexed sender, bool indexed isApproved)',
  // 'event ReceiverBridgeAdaptersUpdated(address indexed bridgeAdapter, bool indexed allowed, uint256 indexed chainId)',
];

export const parseLog = (
  abi: string[],
  eventLog: ethers.providers.Log,
): ethers.utils.Result => {
  const iface = new ethers.utils.Interface(abi);
  const parsedEvent = iface.parseLog(eventLog);
  return parsedEvent.args;
};

export const getCCCSendersAndAdapters = async (
  provider: providers.Provider,
  oldSenders: string[],
  // oldBridgeAdapters: string[],
  fromBlock: number,
  addressBook: any,
  chainId: ChainId | string,
) => {
  let timeout = undefined;
  const limit = getLimit(chainId);

  let eventLogs: providers.Log[] = [];
  let finalBlock: number = 0;

  // get sender updated event
  const senderUpdatedTopic0 = utils.id('SenderUpdated(address,bool)');

  const logs = await getLogs({
    provider,
    address: addressBook.CROSS_CHAIN_CONTROLLER,
    fromBlock,
    logs: [],
    limit,
    timeout,
    topic0: senderUpdatedTopic0,
  });
  eventLogs = logs.eventLogs;
  finalBlock = logs.finalBlock;

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
