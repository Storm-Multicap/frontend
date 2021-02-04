import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'
import { Contract } from 'web3-eth-contract'

import {
  getMasterChefContract,
  getWethContract,
  getFarms,
  getTotalLPWethValue,
  getMethPerBlock,
  getTotalLPMethValue,
} from '../sushi/utils'
import useSushi from './useSushi'
import useBlock from './useBlock'

export interface StakedValue {
  tokenAmount: BigNumber
  wethAmount: BigNumber
  totalWethValue: BigNumber
  tokenPriceInWeth: BigNumber
  tokenPriceInMeth: BigNumber
  poolWeight: BigNumber
  ethPrice: number,
  methPerBlock: number
}

const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();

const useAllStakedValue = () => {
  const [balances, setBalance] = useState([] as Array<StakedValue>)
  const { account }: { account: string; ethereum: provider } = useWallet()
  const sushi = useSushi()
  const farms = getFarms(sushi)
  const masterChefContract = getMasterChefContract(sushi)
  const wethContact = getWethContract(sushi)
  const block = useBlock()

  const fetchAllStakedValue = useCallback(async () => {
    let data = await CoinGeckoClient.simple.price({
      ids: ['ethereum'],
      vs_currencies: ['usd'],
    });
    const methPerBlock = await getMethPerBlock(masterChefContract)
    const balances: Array<StakedValue> = await Promise.all(
      farms.map(
        ({
          pid,
          lpContract,
          tokenContract,
        }: {
          pid: number
          lpContract: Contract
          tokenContract: Contract
        }) =>
          getTotalLPWethValue(
            masterChefContract,
            wethContact,
            lpContract,
            tokenContract,
            pid,
            data.data.ethereum.usd,
            methPerBlock.div(new BigNumber(10).pow(18)).toNumber()
          ),
      ),
    )

    setBalance(balances)
  }, [account, masterChefContract, sushi])

  useEffect(() => {
    if (account && masterChefContract && sushi) {
      fetchAllStakedValue()
    }
  }, [account, block, masterChefContract, setBalance, sushi])

  return balances
}

export default useAllStakedValue
