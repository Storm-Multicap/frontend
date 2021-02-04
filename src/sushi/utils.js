import BigNumber from 'bignumber.js'
import { ethers } from 'ethers'

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const GAS_LIMIT = {
  STAKING: {
    DEFAULT: 200000,
    SNX: 850000,
  },
}

export const getMasterChefAddress = (sushi) => {
  return sushi && sushi.masterChefAddress
}
export const getSushiAddress = (sushi) => {
  return sushi && sushi.sushiAddress
}

export const getMethMakerAddress = (sushi) => {
  return sushi && sushi.methMakerAddress
}

export const getMethStakingAddress = (sushi) => {
  return sushi && sushi.methStakingAddress
}

export const getWethContract = (sushi) => {
  return sushi && sushi.contracts && sushi.contracts.weth
}

export const getMasterChefContract = (sushi) => {
  return sushi && sushi.contracts && sushi.contracts.masterChef
}
export const getSushiContract = (sushi) => {
  return sushi && sushi.contracts && sushi.contracts.sushi
}

export const getMethMakerContract = (sushi) => {
  return sushi && sushi.contracts && sushi.contracts.methMaker
}

export const getMethStakingContract = (sushi) => {
  return sushi && sushi.contracts && sushi.contracts.methStaking
}

export const getFarms = (sushi) => {
  return sushi
    ? sushi.contracts.pools.map(
        ({
          pid,
          name,
          symbol,
          icon,
          tokenAddress,
          tokenSymbol,
          tokenContract,
          lpAddress,
          lpContract,
          pool,
          uniswapLPUrl,
        }) => ({
          pid,
          id: symbol,
          name,
          lpToken: symbol,
          lpTokenAddress: lpAddress,
          lpContract,
          tokenAddress,
          tokenSymbol,
          tokenContract,
          earnToken: 'METH',
          earnTokenAddress: sushi.contracts.sushi.options.address,
          icon,
          pool,
          uniswapLPUrl,
        }),
      )
    : []
}

export const getPoolWeight = async (masterChefContract, pid) => {
  const { allocPoint } = await masterChefContract.methods.poolInfo(pid).call()
  const totalAllocPoint = await masterChefContract.methods
    .totalAllocPoint()
    .call()
  return new BigNumber(allocPoint).div(new BigNumber(totalAllocPoint))
}

export const getEarned = async (masterChefContract, pid, account) => {
  return masterChefContract.methods.pendingMETH(pid, account).call()
}

export const getNftEarned = async (methStakingContract, account) => {
  return new BigNumber(
    await methStakingContract.methods.pendingMETH(account).call(),
  ).div(new BigNumber(10).pow(18))
}

export const getEthToBtcValue = async () =>
  await fetch(
    'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd',
  )
    .then((res) => res.json())
    .then((json) => json.ethereum.usd)

export const getTotalLPWethValue = async (
  masterChefContract,
  wethContract,
  lpContract,
  tokenContract,
  pid,
  ethPrice,
  methPerBlock
) => {
  // Get balance of the token address
  const tokenAmountWholeLP = await tokenContract.methods
    .balanceOf(lpContract.options.address)
    .call()
  const tokenDecimals = await tokenContract.methods.decimals().call()
  // Get the share of lpContract that masterChefContract owns
  const balance = await lpContract.methods
    .balanceOf(masterChefContract.options.address)
    .call()
  // Convert that into the portion of total lpContract = p1
  const totalSupply = await lpContract.methods.totalSupply().call()
  // Get total weth value for the lpContract = w1
  const lpContractWeth = await wethContract.methods
    .balanceOf(lpContract.options.address)
    .call()
  // Return p1 * w1 * 2
  const portionLp = new BigNumber(balance).div(new BigNumber(totalSupply))
  const lpWethWorth = new BigNumber(lpContractWeth)
  const totalLpWethValue = portionLp.times(lpWethWorth).times(new BigNumber(2))
  // Calculate
  const tokenAmount = new BigNumber(tokenAmountWholeLP)
    .times(portionLp)
    .div(new BigNumber(10).pow(tokenDecimals))

  const wethAmount = new BigNumber(lpContractWeth)
    .times(portionLp)
    .div(new BigNumber(10).pow(18))
  return {
    tokenAmount,
    wethAmount,
    totalWethValue: totalLpWethValue.div(new BigNumber(10).pow(18)),
    tokenPriceInWeth: wethAmount.div(tokenAmount),
    poolWeight: await getPoolWeight(masterChefContract, pid),
    ethPrice,
    methPerBlock
  }
}

export const getTotalLPMethValue = async (
  masterChefContract,
  methContract,
  lpContract,
  tokenContract,
  pid,
) => {
  // Get balance of the token address
  const tokenAmountWholeLP = await tokenContract.methods
    .balanceOf(lpContract.options.address)
    .call()
  const tokenDecimals = await tokenContract.methods.decimals().call()
  // Get the share of lpContract that masterChefContract owns
  const balance = await lpContract.methods
    .balanceOf(masterChefContract.options.address)
    .call()
  // Convert that into the portion of total lpContract = p1
  const totalSupply = await lpContract.methods.totalSupply().call()
  // Get total meth value for the lpContract = w1
  const lpContractMeth = await methContract.methods
    .balanceOf(lpContract.options.address)
    .call()
  // Return p1 * w1 * 2
  const portionLp = new BigNumber(balance).div(new BigNumber(totalSupply))
  const lpMethWorth = new BigNumber(lpContractMeth)
  const totalLpMethValue = portionLp.times(lpMethWorth).times(new BigNumber(2))
  // Calculate
  const tokenAmount = new BigNumber(tokenAmountWholeLP)
    .times(portionLp)
    .div(new BigNumber(10).pow(tokenDecimals))

  const methAmount = new BigNumber(lpContractMeth)
    .times(portionLp)
    .div(new BigNumber(10).pow(18))
  return {
    tokenAmount,
    methAmount,
    totalMethValue: totalLpMethValue.div(new BigNumber(10).pow(18)),
    tokenPriceInMeth: methAmount.div(tokenAmount),
    poolWeight: await getPoolWeight(masterChefContract, pid),
  }
}

export const approve = async (lpContract, masterChefContract, account) => {
  return lpContract.methods
    .approve(masterChefContract.options.address, ethers.constants.MaxUint256)
    .send({ from: account })
}

export const getSushiSupply = async (sushi) => {
  return new BigNumber(await sushi.contracts.sushi.methods.totalSupply().call())
}

export const stake = async (masterChefContract, pid, amount, account) => {
  return masterChefContract.methods
    .deposit(
      pid,
      new BigNumber(amount).times(new BigNumber(10).pow(18)).toString(),
    )
    .send({ from: account })
    .on('transactionHash', (tx) => {
      console.log(tx)
      return tx.transactionHash
    })
}

export const unstake = async (masterChefContract, pid, amount, account) => {
  return masterChefContract.methods
    .withdraw(
      pid,
      new BigNumber(amount).times(new BigNumber(10).pow(18)).toString(),
    )
    .send({ from: account })
    .on('transactionHash', (tx) => {
      console.log(tx)
      return tx.transactionHash
    })
}

export const stakeNft = async (
  methStakingContract,
  account,
  nftIdList,
  nftAmountList,
) => {
  return methStakingContract.methods
    .deposit(nftIdList, nftAmountList)
    .send({ from: account })
}

export const unstakeNft = async (
  methStakingContract,
  account,
  nftIdList,
  nftAmountList,
) => {
  return methStakingContract.methods
    .withdraw(nftIdList, nftAmountList)
    .send({ from: account })
}

export const harvestNft = async (methStakingContract, account) => {
  return methStakingContract.methods.harvest().send({ from: account })
}

export const harvest = async (masterChefContract, pid, account) => {
  return masterChefContract.methods
    .deposit(pid, '0')
    .send({ from: account })
    .on('transactionHash', (tx) => {
      console.log(tx)
      return tx.transactionHash
    })
}

export const getStaked = async (masterChefContract, pid, account) => {
  try {
    const { amount } = await masterChefContract.methods
      .userInfo(pid, account)
      .call()
    return new BigNumber(amount)
  } catch {
    return new BigNumber(0)
  }
}

export const getMethPerBlock = async (masterChefContract) => {
  try {
    const amount = await masterChefContract.methods
      .methPerBlock()
      .call()    
    return new BigNumber(amount)
  } catch (ex) {
    console.log(ex);
    return new BigNumber(0)
  }
}

export const getNftBalance = async (methMakerContract, account, nftIdList) => {
  try {
    return methMakerContract.methods
      .balanceOfBatch(
        nftIdList.map(() => account),
        nftIdList,
      )
      .call()
  } catch {
    return nftIdList.map(() => 0)
  }
}

export const getNftStakedBalance = async (
  getMethStakingContract,
  account,
  nftIdList,
) => {
  try {
    return getMethStakingContract.methods.getBalances(account, nftIdList).call()
  } catch {
    return nftIdList.map(() => 0)
  }
}

export const getNftApproval = async (methMakerContract, owner, operator) => {
  try {
    return methMakerContract.methods.isApprovedForAll(owner, operator).call()
  } catch {
    return false
  }
}

export const approveNft = async (
  methMakerContract,
  methStakingAddress,
  account,
) => {
  return methMakerContract.methods
    .setApprovalForAll(methStakingAddress, true)
    .send({ from: account })
}

export const redeem = async (masterChefContract, account) => {
  let now = new Date().getTime() / 1000
  if (now >= 1597172400) {
    return masterChefContract.methods
      .exit()
      .send({ from: account })
      .on('transactionHash', (tx) => {
        console.log(tx)
        return tx.transactionHash
      })
  } else {
    alert('pool not active')
  }
}
