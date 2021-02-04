import {useCallback, useEffect, useState} from "react";
import {provider} from "web3-core";
import {useWallet} from "use-wallet";
import {getNftApproval, getMethMakerContract, getMethStakingAddress} from "../sushi/utils";
import useSushi from "./useSushi";

const useNftApproval = () => {
  const [approved, setApproved] = useState(false);
  const { account }: { account: string; ethereum: provider } = useWallet()
  const sushi = useSushi();
  const methMakerContract = getMethMakerContract(sushi);
  const methStakingAddress = getMethStakingAddress(sushi);

  const fetchNftApproval = useCallback(async () => {
    const approval = await getNftApproval(methMakerContract, account, methStakingAddress);
    setApproved(approval);
  }, [account, setApproved, methMakerContract, methStakingAddress]);

  useEffect(() => {
    if (account && sushi) {
      fetchNftApproval()
    }
  }, [account, sushi, fetchNftApproval])

  return approved;
}

export default useNftApproval;