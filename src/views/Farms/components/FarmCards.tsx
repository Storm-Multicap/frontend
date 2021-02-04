import BigNumber from 'bignumber.js'
import React, { useEffect, useState } from 'react'
import Countdown, { CountdownRenderProps } from 'react-countdown'
import styled, { keyframes } from 'styled-components'
import { useWallet } from 'use-wallet'
import Button from '../../../components/Button'
import Card from '../../../components/Card'
import CardContent from '../../../components/CardContent'
import CardIcon from '../../../components/CardIcon'
import Loader from '../../../components/Loader'
import Spacer from '../../../components/Spacer'
import { Farm } from '../../../contexts/Farms'
import useEarnings from '../../../hooks/useEarnings'
import useAllStakedValue, {
  StakedValue,
} from '../../../hooks/useAllStakedValue'
import useFarms from '../../../hooks/useFarms'
import useSushi from '../../../hooks/useSushi'
import {  getEarned,  getEthToBtcValue,  getMasterChefContract,} from '../../../sushi/utils'
import { bnToDec } from '../../../utils'
import LogoImage from '../../../assets/images/rvlab/uniswaplogo.png'
import Container from '../../../components/Container'


interface FarmWithStakedValue extends Farm, StakedValue {
  apy: BigNumber
}

const FarmCards: React.FC = () => {
  const [farms] = useFarms()
  const { account } = useWallet()
  const stakedValue = useAllStakedValue()
  const sushiIndex = farms.findIndex(
    ({ tokenSymbol }) => tokenSymbol === 'METH',
  )
   const sushiPrice =
    sushiIndex >= 0 && stakedValue[sushiIndex]
      ? stakedValue[sushiIndex].tokenPriceInWeth
      : new BigNumber(0)

  const BLOCKS_PER_YEAR = new BigNumber(2372500)
  const SUSHI_PER_BLOCK = new BigNumber(30)

  if (stakedValue[0] != undefined) {
    console.log(stakedValue[0].poolWeight.toString())
    console.log(stakedValue[0].totalWethValue.toString())
  }

  const rows = farms.reduce<FarmWithStakedValue[][]>(
    (farmRows, farm, i) => {
      const farmWithStakedValue = {
        ...farm,
        ...stakedValue[i],
        apy: stakedValue[i]
          ? sushiPrice
              .times(stakedValue[i].methPerBlock)
              .times(BLOCKS_PER_YEAR)
              .times(stakedValue[i].poolWeight)
              .times(3)
              .div(stakedValue[i].totalWethValue)
          : null,
      }
      const newFarmRows = [...farmRows]
      if (newFarmRows[newFarmRows.length - 1].length === 3) {
        newFarmRows.push([farmWithStakedValue])
      } else {
        newFarmRows[newFarmRows.length - 1].push(farmWithStakedValue)
      }
      return newFarmRows
    },
    [[]],
  )

  return (
    <>
      <StyledFarmHeader>
        <Styledimagewarapper>
          <StyledFarmlogo src={LogoImage}></StyledFarmlogo>
        </Styledimagewarapper>
        <StyledFarmtitle>Los Farminos Hermanos</StyledFarmtitle>
        <StyledFarmtitle>Earn METH tokens by staking Uniswap V2 LP Tokens</StyledFarmtitle>
        <StyledFarmtitle></StyledFarmtitle>
      </StyledFarmHeader>

      <Container>
        <FarmCardsWrapper>
          {!!rows[0].length ? (
            rows.map((farmRow, i) => (
              <React.Fragment key={i}>
                {farmRow.map((farm, j) => (
                  <React.Fragment key={j}>
                    <FarmCard farm={farm} />
                  </React.Fragment>
                ))}
              </React.Fragment>
            ))
          ) : (
              <StyledLoadingWrapper>
                <Loader text="Cooking the meth ..." />
              </StyledLoadingWrapper>
            )}
        </FarmCardsWrapper>
      </Container>
    </>
  )
}

interface FarmCardProps {
  farm: FarmWithStakedValue
}

const FarmCard: React.FC<FarmCardProps> = ({ farm }) => {
  const [startTime, setStartTime] = useState(0)
  const [harvestable, setHarvestable] = useState(0)

  const { account } = useWallet()
  const { lpTokenAddress } = farm
  const sushi = useSushi()

  const renderer = (countdownProps: CountdownRenderProps) => {
    const { hours, minutes, seconds } = countdownProps
    const paddedSeconds = seconds < 10 ? `0${seconds}` : seconds
    const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes
    const paddedHours = hours < 10 ? `0${hours}` : hours
    return (
      <span style={{ width: '100%' }}>
        {paddedHours}:{paddedMinutes}:{paddedSeconds}
      </span>
    )
  }

  useEffect(() => {
    async function fetchEarned() {
      if (sushi) return
      const earned = await getEarned(
        getMasterChefContract(sushi),
        lpTokenAddress,
        account,
      )
      setHarvestable(bnToDec(earned))
    }
    if (sushi && account) {
      fetchEarned()
    }
  }, [sushi, lpTokenAddress, account, setHarvestable])

  const poolActive = true // startTime * 1000 - Date.now() <= 0

  return (
    <>
      <Card>
        <StyledInsight>
          <StyledDetail>{farm.lpToken.toUpperCase()}</StyledDetail>
          <VAL>
            {farm.apy
              ? `${farm.apy
                .times(new BigNumber(100))
                .toNumber()
                .toLocaleString('en-US')
                .slice(0, -1)}%`
              : 'Loading ...'}
          </VAL>
          <APY>APY</APY>
        </StyledInsight>
        <StyledTitle>{farm.name}</StyledTitle>
        <StyledIcon>{farm.icon}</StyledIcon>
        <ValueWrapper>
          <ValueTitle>TVL ($)</ValueTitle>
          <ValueAmount>{farm.totalWethValue ? farm.totalWethValue.toNumber() * farm.ethPrice : 'Loading ...'}</ValueAmount>
        </ValueWrapper>
        <ValueWrapper>
          <ValueTitle>Harvest (METH)</ValueTitle>
	  <ValueAmount>{harvestable ? setHarvestable : '-'}</ValueAmount>
        </ValueWrapper>
        <ButtonContainer>
          <Button
            disabled={!poolActive}
            text={poolActive ? 'Select' : undefined}
            to={`/rvlab/${farm.id}`}
          >
            {!poolActive && (
              <Countdown
                date={new Date(startTime * 1000)}
                renderer={renderer}
              />
            )}
          </Button>
          <Button text="GET LP" href={farm.uniswapLPUrl}></Button>
        </ButtonContainer>
      </Card>
    </>
  )
}
const StyledFarmHeader = styled.section`
  text-align: center;
  margin: 20px auto;
  min-height: 200px;
`
const Styledimagewarapper = styled.div`
  min-height: 140px;
`
const StyledFarmlogo = styled.img``
const StyledFarmtitle = styled.h1`
  font-size: 2.5rem;
  color: ${(props) => props.theme.color.white};
  font-weight: normal;
  letter-spacing: 5px;
  margin: 20px auto;
`
const FarmCardsWrapper = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 20px auto 70px;
`
const RainbowLight = keyframes`
  
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`

const ButtonContainer = styled.div`
  display: flex;
  display: -ms-flexbox;
  flex-wrap: wrap;
  -ms-flexwrap: wrap;
  justify-content: space-between;
`

export const StyledCardAccent = styled.div`
  background: linear-gradient(
    45deg,
    rgba(255, 0, 0, 1) 0%,
    rgba(255, 154, 0, 1) 10%,
    rgba(208, 222, 33, 1) 20%,
    rgba(79, 220, 74, 1) 30%,
    rgba(63, 218, 216, 1) 40%,
    rgba(47, 201, 226, 1) 50%,
    rgba(28, 127, 238, 1) 60%,
    rgba(95, 21, 242, 1) 70%,
    rgba(186, 12, 248, 1) 80%,
    rgba(251, 7, 217, 1) 90%,
    rgba(255, 0, 0, 1) 100%
  );
  background-size: 300% 300%;
  animation: ${RainbowLight} 2s linear infinite;
  border-radius: 12px;
  filter: blur(6px);
  position: absolute;
  top: -2px;
  right: -2px;
  bottom: -2px;
  left: -2px;
  z-index: -1;
`

const StyledLoadingWrapper = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
`

const StyledTitle = styled.h2`
  margin-top: 30px;
  color: ${(props) => props.theme.color.white};
  font-weight: normal;
  font-size: 2rem;
`

const StyledDetail = styled.span`
  float: left;
`

const StyledInsight = styled.div`
  color: ${(props) => props.theme.color.white};
  text-align: left;
  font-size: 1.3rem;
  display: inline-block;
  width: 100%;
`
const APY = styled.span`
  float: right;
  margin: 0 10px;
`
const VAL = styled.span`
  float: right;
`
const StyledIcon = styled.div`
  min-height: 160px;
  padding-top: 20px;
`
const ValueWrapper = styled.div`
  background: ${(props) => props.theme.color.lightgreen[200]};
  box-shadow: 0px 3px 3px 0px #06443c inset;
  text-align: left;
  margin-bottom: 15px;
  padding: 7px 10px 5px 10px;
  color: ${(props) => props.theme.color.white};
  font-size: 1.2rem;
  display: inline-block;
  width: 100%;
`
const ValueTitle = styled.span`
  float: left;
`
const ValueAmount = styled.span`
  float: right;
`

export default FarmCards
