import BigNumber from 'bignumber.js/bignumber'
import React from 'react'
import Walter from '../../assets/images/rvlab/Walter.png'
import Jessie from '../../assets/images/rvlab/Jessie.png'
import Gus from '../../assets/images/rvlab/Gus.png'
import Sky from '../../assets/images/rvlab/Sky.png'
import Hank from '../../assets/images/rvlab/Hank.png'
import MrWhite from '../../assets/images/rvlab/MrWhite.png'
import Marie from '../../assets/images/rvlab/Marie.png'
import Pinkman from '../../assets/images/rvlab/Pinkman.png'
import Mike from '../../assets/images/rvlab/Mike.png'
import Saul from '../../assets/images/rvlab/Saul.png'
import Badger from '../../assets/images/rvlab/Badger.png'
import Skinny from '../../assets/images/rvlab/Skinny.png'
import Flyn from '../../assets/images/rvlab/Flyn.png'
import Hector from '../../assets/images/rvlab/Hector.png'
import Tuco from '../../assets/images/rvlab/Tuco.png'
import TODD from '../../assets/images/rvlab/todd.png'
import Marco from '../../assets/images/rvlab/Marco.png'
import Leonel from '../../assets/images/rvlab/Leonel.png'
import Heisenberg from '../../assets/images/rvlab/Heisenberg.png'

export const SUBTRACT_GAS_LIMIT = 100000

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}

export const addressMap = {
  uniswapFactory: '0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95',
  uniswapFactoryV2: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  YFI: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
  YCRV: '0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8',
  UNIAmpl: '0xc5be99a02c6857f9eac67bbce58df5572498f40c',
  WETH: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  UNIRouter: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
  LINK: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
  MKR: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
  SNX: '0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F',
  COMP: '0xc00e94Cb662C3520282E6f5717214004A7f26888',
  LEND: '0x80fB784B7eD66730e8b1DBd9820aFD29931aab03',
  SUSHIYCRV: '0x2C7a51A357d5739C5C74Bf3C96816849d2c9F726',
  Uniswap: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
}	

// SETTINGS

export const CHAIN_ID = 1

export const contractAddresses = {
  sushi: {
    1: '0x11003E410ca3FcD220765B3d2f343433A0b2bffd', //METH Token Contract
  },
  masterChef: {
    1: '0x12659D7eCFdDe69F19Cea138799Eb7C6e0212A2c', //Farming Bad
  },
  weth: {
    1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', //WETH
  },
  xSushi: {
    1: '0x8798249c2e607446efb7ad49ec89dd1865ff4272' // NOTE: Not in use
  }
}

export const supportedPools = [
  {
    pid: 0,
    lpAddresses: {
      1: '0x429d2daabf4d281e8d768f6c08a316e90957ddec',
    },
    tokenAddresses: {
      1: '0x11003E410ca3FcD220765B3d2f343433A0b2bffd',
    },
    name: 'Heisenberg',
    symbol: 'METH-ETH UNI-V2 LP',
    tokenSymbol: 'METH',
    icon: <img alt="Heisenberg" src={Heisenberg} />,
    pool: 'uniswap',
    uniswapLPUrl:
      'https://app.uniswap.org/#/add/ETH/0x11003E410ca3FcD220765B3d2f343433A0b2bffd',
  },
{
    pid: 1,
    lpAddresses: {
      1: '0x0d4a11d5EEaaC28EC3F61d100daF4d40471f1852',
    },
    tokenAddresses: {
      1: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    },
    name: 'Jesse Tether',
    symbol: 'USDT-ETH UNI-V2 LP',
    tokenSymbol: 'USDT',
    icon: <img alt="Jesse" src={Jessie} />,
    pool: 'uniswap',
    uniswapLPUrl:
      'https://app.uniswap.org/#/add/ETH/0xdac17f958d2ee523a2206206994597c13d831ec7',
  },
  {
    pid: 2,
    lpAddresses: {
      1: '0xBb2b8038a1640196FbE3e38816F3e67Cba72D940',
    },
    tokenAddresses: {
      1: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
    },
    name: 'Gus Bitcoin',
    symbol: 'WBTC-ETH UNI-V2 LP',
    tokenSymbol: 'WBTC',
    icon: <img alt="Gus" src={Gus} />,
    pool: 'uniswap',
    uniswapLPUrl:
      'https://app.uniswap.org/#/add/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599/ETH',
  },
  {
    pid: 3,
    lpAddresses: {
      1: '0xA478c2975Ab1Ea89e8196811F51A7B7Ade33eB11',
    },
    tokenAddresses: {
      1: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
    },
    name: 'Sky DAI',
    symbol: 'DAI-ETH UNI-V2 LP',
    tokenSymbol: 'DAI',
    icon: <img alt="Sky" src={Sky} />,
    pool: 'uniswap',
    uniswapLPUrl:
      'https://app.uniswap.org/#/add/0x6b175474e89094c44da98b954eedeac495271d0f/ETH',
  },
  {
    pid: 4,
    lpAddresses: {
      1: '0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc',
    },
    tokenAddresses: {
      1: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    },
    name: 'Hank USDC',
    symbol: 'USDC-ETH UNI-V2 LP',
    tokenSymbol: 'USDC',
    icon: <img alt="Hank" src={Hank} />,
    pool: 'uniswap',
    uniswapLPUrl:
      'https://app.uniswap.org/#/add/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48/ETH',
  },
  {
    pid: 5,
    lpAddresses: {
      1: '0xd3d2E2692501A5c9Ca623199D38826e513033a17',
    },
    tokenAddresses: {
      1: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
    },
    name: 'Flyn UNI',
    symbol: 'UNI-ETH UNI-V2 LP',
    tokenSymbol: 'UNI',
    icon: <img alt="Flyn" src={Flyn} />,
    pool: 'uniswap',
    uniswapLPUrl:
      'https://app.uniswap.org/#/add/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984/ETH',
  },
  {
    pid: 6,
    lpAddresses: {
      1: '0x2fDbAdf3C4D5A8666Bc06645B8358ab803996E28',
    },
    tokenAddresses: {
      1: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
    },
    name: 'Mike YFI',
    symbol: 'YFI-ETH UNI-V2 LP',
    tokenSymbol: 'YFI',
    icon: <img alt="Mike" src={Mike} />,
    pool: 'uniswap',
    uniswapLPUrl:
      'https://app.uniswap.org/#/add/0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e/ETH',
  },
  {
    pid: 7,
    lpAddresses: {
      1: '0xa2107FA5B38d9bbd2C461D6EDf11B11A50F6b974',
    },
    tokenAddresses: {
      1: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
    },
    name: 'Hector LINK',
    symbol: 'LINK-ETH UNI-V2 LP',
    tokenSymbol: 'LINK',
    icon: <img alt="Hector" src={Hector} />,
    pool: 'uniswap',
    uniswapLPUrl:
      'https://app.uniswap.org/#/add/0x514910771af9ca656af840dff83e8264ecf986ca/ETH',
  },
]
