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

export const contractAddresses = {
  sushi: {
    1: '0xb78B3320493a4EFaa1028130C5Ba26f0B6085Ef8',
    4: '0x5bc1883f28a672f5f39954a7f0f82e1c7ec2b7ac',
  },
  masterChef: {
    1: '0xD12d68Fd52b54908547ebC2Cd77Ec6EbbEfd3099',
    4: '0x2CA41E72e178CAfa6F2ca3135fCf10f9568C674D',
  },
  weth: {
    1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    4: '0x2fcc4dba284dcf665091718e4d0dab53a416dfe7',
  },
  meth: {
    1: '0xd0c59798f986d333554688cd667033d469c2398e',
    4: '0xC09d3Bfa09058a330612b1f2577fa94b29811B4f',
  },
  methMaker: {
    1: '0xa9f4bfe3fc4376478ed3cc7380c08d1646b1f0b8',
    4: '0x5EeFFcF48bE61cD880332B4d79e255AAe79d1f0f',
  },
  methStaking: {
    1: '0x5D4c8Cd88717Da2A9B950bF21CcAD313E9a1D082',
    4: '0xD6aC83e3D0CC809290301b8377D1B8d8435e464b',
  },
}

export const supportedPools = [
  {
    pid: 0,
    lpAddresses: {
      1: '0x276e62c70e0b540262491199bc1206087f523af6',
      4: '0xC09d3Bfa09058a330612b1f2577fa94b29811B4f',
    },
    tokenAddresses: {
      1: '0xb78B3320493a4EFaa1028130C5Ba26f0B6085Ef8',
      4: '0xC09d3Bfa09058a330612b1f2577fa94b29811B4f',
    },
    name: 'Heisenberg',
    symbol: 'METH-ETH UNI-V2 LP',
    tokenSymbol: 'METH',
    icon: <img alt="Heisenberg" src={Heisenberg} />,
    pool: 'uniswap',
    uniswapLPUrl:
      'https://uniswap.info/pair/0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852',
  },
  {
    pid: 1,
    lpAddresses: {
      1: '0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852',
      4: '0xC09d3Bfa09058a330612b1f2577fa94b29811B4f',
    },
    tokenAddresses: {
      1: '0xdac17f958d2ee523a2206206994597c13d831ec7',
      4: '0xC09d3Bfa09058a330612b1f2577fa94b29811B4f',
    },
    name: 'Jessie Tether',
    symbol: 'USDT-ETH UNI-V2 LP',
    tokenSymbol: 'USDT',
    icon: <img alt="Jessie" src={Jessie} />,
    pool: 'uniswap',
    uniswapLPUrl:
      'https://uniswap.info/pair/0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852',
  },
  {
    pid: 2,
    lpAddresses: {
      1: '0xbb2b8038a1640196fbe3e38816f3e67cba72d940',
      4: '0xC09d3Bfa09058a330612b1f2577fa94b29811B4f',
    },
    tokenAddresses: {
      1: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
      4: '0xC09d3Bfa09058a330612b1f2577fa94b29811B4f',
    },
    name: 'Gus Bitcoin',
    symbol: 'WBTC-ETH UNI-V2 LP',
    tokenSymbol: 'WBTC',
    icon: <img alt="Gus" src={Gus} />,
    pool: 'uniswap',
    uniswapLPUrl:
      'https://info.uniswap.org/pair/0xbb2b8038a1640196fbe3e38816f3e67cba72d940',
  },
  {
    pid: 3,
    lpAddresses: {
      1: '0xA478c2975Ab1Ea89e8196811F51A7B7Ade33eB11',
      4: '0xC09d3Bfa09058a330612b1f2577fa94b29811B4f',
    },
    tokenAddresses: {
      1: '0x6b175474e89094c44da98b954eedeac495271d0f',
      4: '0xC09d3Bfa09058a330612b1f2577fa94b29811B4f',
    },
    name: 'Sky DAI',
    symbol: 'DAI-ETH UNI-V2 LP',
    tokenSymbol: 'DAI',
    icon: <img alt="Sky" src={Sky} />,
    pool: 'uniswap',
    uniswapLPUrl:
      'https://info.uniswap.org/pair/0xA478c2975Ab1Ea89e8196811F51A7B7Ade33eB11',
  },
  {
    pid: 4,
    lpAddresses: {
      1: '0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc',
      4: '0xC09d3Bfa09058a330612b1f2577fa94b29811B4f',
    },
    tokenAddresses: {
      1: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
      4: '0xC09d3Bfa09058a330612b1f2577fa94b29811B4f',
    },
    name: 'Hank USDC',
    symbol: 'USDC-ETH UNI-V2 LP',
    tokenSymbol: 'USDC',
    icon: <img alt="Hank" src={Hank} />,
    pool: 'uniswap',
    uniswapLPUrl:
      'https://uniswap.info/pair/0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc',
  },

  {
    pid: 5,
    lpAddresses: {
      1: '0xceff51756c56ceffca006cd410b03ffc46dd3a58',
      4: '0xC09d3Bfa09058a330612b1f2577fa94b29811B4f',
    },
    tokenAddresses: {
      1: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
      4: '0xC09d3Bfa09058a330612b1f2577fa94b29811B4f',
    },
    name: 'Walter BTC',
    symbol: 'WBTC-ETH SLP',
    tokenSymbol: 'WBTC',
    icon: <img alt="Walter" src={Walter} />,
    pool: 'sushiswap',
    uniswapLPUrl:
      'https://sushiswap.vision/pair/0xceff51756c56ceffca006cd410b03ffc46dd3a58',
  },
  {
    pid: 6,
    lpAddresses: {
      1: '0x088ee5007C98a9677165D78dD2109AE4a3D04d0C',
      4: '0xC09d3Bfa09058a330612b1f2577fa94b29811B4f',
    },
    tokenAddresses: {
      1: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
      4: '0xC09d3Bfa09058a330612b1f2577fa94b29811B4f',
    },
    name: 'Mr.White YFI',
    symbol: 'YFI-ETH SLP',
    tokenSymbol: 'YFI',
    icon: <img alt="MrWhite" src={MrWhite} />,
    pool: 'sushiswap',
    uniswapLPUrl:
      'https://sushiswap.vision/pair/0x088ee5007C98a9677165D78dD2109AE4a3D04d0C',
  },
  {
    pid: 7,
    lpAddresses: {
      1: '0xC3D03e4F041Fd4cD388c549Ee2A29a9E5075882f',
      4: '0xC09d3Bfa09058a330612b1f2577fa94b29811B4f',
    },
    tokenAddresses: {
      1: '0x6b175474e89094c44da98b954eedeac495271d0f',
      4: '0xC09d3Bfa09058a330612b1f2577fa94b29811B4f',
    },
    name: 'Marie DAI',
    symbol: 'DAI-ETH SLP',
    tokenSymbol: 'DAI',
    icon: <img alt="Marie" src={Marie} />,
    pool: 'sushiswap',
    uniswapLPUrl:
      'https://sushiswap.vision/pair/0xC3D03e4F041Fd4cD388c549Ee2A29a9E5075882f',
  },
  {
    pid: 8,
    lpAddresses: {
      1: '0x06da0fd433C1A5d7a4faa01111c044910A184553',
      4: '0xC09d3Bfa09058a330612b1f2577fa94b29811B4f',
    },
    tokenAddresses: {
      1: '0xdac17f958d2ee523a2206206994597c13d831ec7',
      4: '0xC09d3Bfa09058a330612b1f2577fa94b29811B4f',
    },
    name: 'Pinkman Tether',
    symbol: 'USDT-ETH SLP',
    tokenSymbol: 'USDT',
    icon: <img alt="Pinkman" src={Pinkman} />,
    pool: 'sushiswap',
    uniswapLPUrl:
      'https://sushiswap.vision/pair/0x06da0fd433C1A5d7a4faa01111c044910A184553',
  },
  {
    pid: 9,
    lpAddresses: {
      1: '0x397FF1542f962076d0BFE58eA045FfA2d347ACa0',
      4: '0xC09d3Bfa09058a330612b1f2577fa94b29811B4f',
    },
    tokenAddresses: {
      1: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
      4: '0xC09d3Bfa09058a330612b1f2577fa94b29811B4f',
    },
    name: 'Mike USDC',
    symbol: 'USDC-ETH SLP',
    tokenSymbol: 'USDC',
    icon: <img alt="Mike" src={Mike} />,
    pool: 'sushiswap',
    uniswapLPUrl:
      'https://sushiswap.vision/pair/0x397FF1542f962076d0BFE58eA045FfA2d347ACa0',
  },
  {
    pid: 10,
    lpAddresses: {
      1: '0x795065dCc9f64b5614C407a6EFDC400DA6221FB0',
      4: '0xC09d3Bfa09058a330612b1f2577fa94b29811B4f',
    },
    tokenAddresses: {
      1: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
      4: '0xC09d3Bfa09058a330612b1f2577fa94b29811B4f',
    },
    name: 'Saul SUSHI',
    symbol: 'SUSHI-ETH SLP',
    tokenSymbol: 'SUSHI',
    icon: <img alt="Saul" src={Saul} />,
    pool: 'sushiswap',
    uniswapLPUrl:
      'https://sushiswap.vision/pair/0x795065dCc9f64b5614C407a6EFDC400DA6221FB0',
  },
  {
    pid: 11,
    lpAddresses: {
      1: '0xC40D16476380e4037e6b1A2594cAF6a6cc8Da967',
      4: '0xC09d3Bfa09058a330612b1f2577fa94b29811B4f',
    },
    tokenAddresses: {
      1: '0x514910771af9ca656af840dff83e8264ecf986ca',
      4: '0xC09d3Bfa09058a330612b1f2577fa94b29811B4f',
    },
    name: 'Badger LINK',
    symbol: 'LINK-ETH SLP',
    tokenSymbol: 'LINK',
    icon: <img alt="Badger" src={Badger} />,
    pool: 'sushiswap',
    uniswapLPUrl:
      'https://sushiswap.vision/pair/0xC40D16476380e4037e6b1A2594cAF6a6cc8Da967',
  },
  {
    pid: 12,
    lpAddresses: {
      1: '0xD75EA151a61d06868E31F8988D28DFE5E9df57B4',
      4: '0xC09d3Bfa09058a330612b1f2577fa94b29811B4f',
    },
    tokenAddresses: {
      1: '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9',
      4: '0xC09d3Bfa09058a330612b1f2577fa94b29811B4f',
    },
    name: 'Skinny AAVE',
    symbol: 'AAVE-ETH SLP',
    tokenSymbol: 'AAVE',
    icon: <img alt="Skinny" src={Skinny} />,
    pool: 'sushiswap',
    uniswapLPUrl:
      'https://sushiswap.vision/pair/0xD75EA151a61d06868E31F8988D28DFE5E9df57B4',
  },
  {
    pid: 13,
    lpAddresses: {
      1: '0xdafd66636e2561b0284edde37e42d192f2844d40',
      4: '0xC09d3Bfa09058a330612b1f2577fa94b29811B4f',
    },
    tokenAddresses: {
      1: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
      4: '0xC09d3Bfa09058a330612b1f2577fa94b29811B4f',
    },
    name: 'Flyn UNI',
    symbol: 'UNI-ETH SLP',
    tokenSymbol: 'UNI',
    icon: <img alt="Flyn" src={Flyn} />,
    pool: 'sushiswap',
    uniswapLPUrl:
      'https://sushiswap.vision/pair/0xdafd66636e2561b0284edde37e42d192f2844d40',
  },
  {
    pid: 14,
    lpAddresses: {
      1: '0x31503dcb60119a812fee820bb7042752019f2355',
      4: '0xC09d3Bfa09058a330612b1f2577fa94b29811B4f',
    },
    tokenAddresses: {
      1: '0xc00e94cb662c3520282e6f5717214004a7f26888',
      4: '0xC09d3Bfa09058a330612b1f2577fa94b29811B4f',
    },
    name: 'Hector COMP',
    symbol: 'COMP-ETH SLP',
    tokenSymbol: 'COMP',
    icon: <img alt="Hector" src={Hector} />,
    pool: 'sushiswap',
    uniswapLPUrl:
      'https://sushiswap.vision/pair/0x31503dcb60119a812fee820bb7042752019f2355',
  },

  {
    pid: 15,
    lpAddresses: {
      1: '0x7885e359a085372EbCF1ed6829402f149D02c600',
      4: '0xC09d3Bfa09058a330612b1f2577fa94b29811B4f',
    },
    tokenAddresses: {
      1: '0x05D3606d5c81EB9b7B18530995eC9B29da05FaBa',
      4: '0xC09d3Bfa09058a330612b1f2577fa94b29811B4f',
    },
    name: 'Tuco TOMOE',
    symbol: 'TOMOE-ETH LUA-V1 LP',
    tokenSymbol: 'TOMOE',
    icon: <img alt="Tuco" src={Tuco} />,
    pool: 'luaswap',
    uniswapLPUrl:
      'https://info.luaswap.org/pair/0x7885e359a085372EbCF1ed6829402f149D02c600',
  },
  {
    pid: 16,
    lpAddresses: {
      1: '0x96258BB42779Bf300cf69c9B5bD2Ba5245CB4bc4',
      4: '0xC09d3Bfa09058a330612b1f2577fa94b29811B4f',
    },
    tokenAddresses: {
      1: '0xb1f66997a5760428d3a87d68b90bfe0ae64121cc',
      4: '0xC09d3Bfa09058a330612b1f2577fa94b29811B4f',
    },
    name: 'TODD USDC',
    symbol: 'LUA-USDC LUA-V1 LP',
    tokenSymbol: 'LUA',
    icon: <img alt="TODD" src={TODD} />,
    pool: 'luaswap',
    uniswapLPUrl:
      'https://info.luaswap.org/pair/0x96258BB42779Bf300cf69c9B5bD2Ba5245CB4bc4',
  },
  {
    pid: 17,
    lpAddresses: {
      1: '0xB10C1840f562f0ac914DA2bad3290833C75fdddF',
      4: '0xC09d3Bfa09058a330612b1f2577fa94b29811B4f',
    },
    tokenAddresses: {
      1: '0x05D3606d5c81EB9b7B18530995eC9B29da05FaBa',
      4: '0xC09d3Bfa09058a330612b1f2577fa94b29811B4f',
    },
    name: 'Marco TOMOE',
    symbol: 'TOMOE-USDC LUA-V1 LP',
    tokenSymbol: 'TOMOE',
    icon: <img alt="Marco" src={Marco} />,
    pool: 'luaswap',
    uniswapLPUrl:
      'https://info.luaswap.org/pair/0xB10C1840f562f0ac914DA2bad3290833C75fdddF',
  },

  {
    pid: 18,
    lpAddresses: {
      1: '0xbd63d492bbb13d081D680CE1f2957a287FD8c57c',
      4: '0xC09d3Bfa09058a330612b1f2577fa94b29811B4f',
    },
    tokenAddresses: {
      1: '0x49e833337ece7afe375e44f4e3e8481029218e5c',
      4: '0xC09d3Bfa09058a330612b1f2577fa94b29811B4f',
    },
    name: 'Leonel Value',
    symbol: 'VALUE-WETH 50 50 VLP',
    tokenSymbol: 'Value',
    icon: <img alt="Leonel" src={Leonel} />,
    pool: 'valueliquid',
    uniswapLPUrl:
      'https://valueliquid.io/#/add/0xbd63d492bbb13d081d680ce1f2957a287fd8c57c',
  },
]
