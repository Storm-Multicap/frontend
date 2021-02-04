import {useWallet} from "use-wallet";
import useSushi from "./useSushi";
import {getNftEarned, getMethStakingContract, harvestNft, stakeNft, unstakeNft} from "../sushi/utils";
import {useCallback, useEffect, useState} from "react";
import useBlock from "./useBlock";

const useNftStake = () => {
  const {account} = useWallet();
  const sushi = useSushi();
  const methStakingContract = getMethStakingContract(sushi);
  const [balance, setBalance] = useState<number>(0);
  const block = useBlock()

  const handleStake = useCallback(async (nftIdList: number[], nftAmountList: number[]) => {
    try {
      return await stakeNft(methStakingContract, account, nftIdList, nftAmountList);
    } catch (e) {
      console.error(e);
    }
  }, [account, methStakingContract])

  const handleUnstake = useCallback(async (nftIdList: number[], nftAmountList: number[]) => {
    try {
      return await unstakeNft(methStakingContract, account, nftIdList, nftAmountList);
    } catch (e) {
      console.error(e);
    }
  }, [account, methStakingContract])

  const handleHarvest = useCallback(async () => {
    try {
      return await harvestNft(methStakingContract, account);
    } catch (e) {
      console.error(e);
    }
  }, [account, methStakingContract]);

  const fetchPending = useCallback(async () => {
    const earned = await getNftEarned(methStakingContract, account);
    setBalance(earned.toNumber());
  }, [methStakingContract, account]);

  useEffect(() => {
    if (account && methStakingContract && sushi) {
      fetchPending();
    }
  }, [account, block, methStakingContract, setBalance, sushi])

  return {onStake: handleStake, onUnstake: handleUnstake, onHarvest: handleHarvest, balance}
}

export default useNftStake;