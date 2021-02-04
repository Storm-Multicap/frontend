import BigNumber from 'bignumber.js'
import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup'
import styled from 'styled-components'
import { useWallet } from 'use-wallet'
import Value2 from '../../../components/Value2'
import useAllEarnings from '../../../hooks/useAllEarnings'
import useAllStakedValue from '../../../hooks/useAllStakedValue'
import useFarms from '../../../hooks/useFarms'
import useTokenBalance from '../../../hooks/useTokenBalance'
import useSushi from '../../../hooks/useSushi'
import { getSushiAddress, getEthToBtcValue, getSushiSupply } from '../../../sushi/utils'
import { getBalanceNumber } from '../../../utils/formatBalance'
import YourBalance from '../../../assets/images/home/YourBalance.png'
import TVL from '../../../assets/images/home/TVL.png'
import Price from '../../../assets/images/home/Price.png'
import Container from '../../../components/Container'
import CirculatingSupply from '../../../assets/images/home/CirculatingSupply.png'

import { addressMap } from '../../../sushi/lib/constants'
 // Initiate the CoinGecko API Client

const lookUpTokenPrices = async function(id_array: any) {
  let ids = id_array.join('%2C')
  return $.ajax({
    url: 'https://api.coingecko.com/api/v3/simple/token_price/ethereum?contract_addresses=' + ids + '&vs_currencies=usd',
    type: 'GET',
  })
}

const PendingRewards: React.FC = () => {
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(0)
  const [scale, setScale] = useState(1)

  const allEarnings = useAllEarnings()
  let sumEarning = 0
  for (let earning of allEarnings) {
    sumEarning += new BigNumber(earning)
      .div(new BigNumber(10).pow(18))
      .toNumber()
  }

  useEffect(() => {
    setStart(end)
    setEnd(sumEarning)
  }, [sumEarning])

  return (
    <span
      style={{
        transform: `scale(${scale})`,
        transformOrigin: 'right bottom',
        transition: 'transform 0.5s',
        display: 'inline-block',
      }}
    >
      <CountUp
        start={start}
        end={end}
        decimals={end < 0 ? 4 : end > 1e5 ? 0 : 3}
        duration={1}
        onStart={() => {
          setScale(1.25)
          setTimeout(() => setScale(1), 600)
        }}
        separator=","
      />
    </span>
  )
}

const Balances: React.FC = () => {
  const [totalSupply, setTotalSupply] = useState<BigNumber>()
  const sushi = useSushi()
  const sushiBalance = useTokenBalance(getSushiAddress(sushi))
  const { account, ethereum }: { account: any; ethereum: any } = useWallet()

  const [farms] = useFarms()
  const allStakedValue = useAllStakedValue()

  let sumWeth = 0, methPerBlock = 0, methPrice = 0;
  if (allStakedValue && allStakedValue.length) {
    methPerBlock = allStakedValue[0].methPerBlock
    sumWeth = farms.reduce(
      (c, { id }, i) => c + (allStakedValue[i].totalWethValue.toNumber() * allStakedValue[i].ethPrice || 0),
      0,
    )
  }

  useEffect(() => {
    async function fetchTotalSupply() {
      const supply = await getSushiSupply(sushi)
      setTotalSupply(supply)
    }
    if (sushi) {
      fetchTotalSupply()
    }
  }, [sushi, setTotalSupply])

  return (
    <StyledWrapper>
      <Container>
        <Cardswrapper>
          <CardItem>
            <StyleCardImage
              src={YourBalance}
              alt="YourBalance"
            ></StyleCardImage>
            <Value2
              value={!!account ? getBalanceNumber(sushiBalance).toFixed(2) + ' METH': 'LOCKED'}
            ></Value2>
            <StyleCardContent>
              Pending harvest : <PendingRewards /> METH
            </StyleCardContent>
          </CardItem>

          <CardItem>
            <StyleCardImage src={TVL} alt=" TVL"></StyleCardImage>
            <Value2 value={sumWeth.toFixed(2) + " $"}></Value2>
            <StyleCardContent>Total Value Locked</StyleCardContent>
          </CardItem>
          <CardItem>
            <StyleCardImage src={Price} alt="Price"></StyleCardImage>
             <Value2 value={methPrice != 0 ? methPrice.toFixed(2) + " $" : "Soon available"}></Value2>
            <StyleCardContent>Get token price in real time</StyleCardContent>
          </CardItem>

          <CardItem>
            <StyleCardImage
              src={CirculatingSupply}
              alt="CirculatingSupply"
            ></StyleCardImage>
            <Value2
              value={totalSupply ? getBalanceNumber(totalSupply).toFixed(2) + ' METH' : 'LOCKED'}
            />
            <StyleCardContent>Reward per block : {methPerBlock} METH</StyleCardContent>
          </CardItem>
        </Cardswrapper>
      </Container>
    </StyledWrapper>
  )
}

const CardItem = styled.div`
  flex: 1 0 100px;
  -ms-flex: 1 0 100px;
  box-shadow: 6px 9px 10px ${(props) => props.theme.color.blacktransparent};
  background: ${(props) => props.theme.color.lightgreen[300]};
  border: 3px solid ${(props) => props.theme.color.white};
  margin: 20px 50px;
  min-width: 31%;
  max-width: 31%;
  min-height: 250px;
  padding: 20px 25px;
  text-align: center;
  position: relative;
  color: ${(props) => props.theme.color.white};
  @media (max-width: 1048px) {
    min-width: 40%;
    max-width: 40%;
  }
  @media (max-width: 680px) {
    min-width: 70%;
    max-width: 70%;
  }
  @media (max-width: 420px) {
    min-width: 100%;
    max-width: 100%;
  }
`
const Cardswrapper = styled.div`
  display: flex;
  -moz-box-pack: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 70px;
`

const StyledWrapper = styled.section``
const StyleCardImage = styled.img`
  max-width: 100%;
`

const StyleCardContent = styled.h5`
  position: absolute;
  bottom: 20px;
  font-size: 1.4rem;
  width: 100%;
  left: 0;
  font-weight: normal;
  padding: 0 25px;
`

export default Balances
