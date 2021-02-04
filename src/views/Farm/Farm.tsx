import React, { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useWallet } from 'use-wallet'
import { provider } from 'web3-core'
import PageHeader from '../../components/PageHeader'
import useFarm from '../../hooks/useFarm'
import useRedeem from '../../hooks/useRedeem'
import useSushi from '../../hooks/useSushi'
import { getMasterChefContract } from '../../sushi/utils'
import { getContract } from '../../utils/erc20'
import Harvest from './components/Harvest'
import Stake from './components/Stake'
import Container from '../../components/Container'
import './components/main.css'

const Farm: React.FC = () => {
  const { farmId } = useParams()
  const {
    pid,
    lpToken,
    lpTokenAddress,
    tokenAddress,
    earnToken,
    name,
    icon,
  } = useFarm(farmId) || {
    pid: 0,
    lpToken: '',
    lpTokenAddress: '',
    tokenAddress: '',
    earnToken: '',
    name: '',
    icon: '',
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const sushi = useSushi()
  const { ethereum } = useWallet()

  const lpContract = useMemo(() => {
    return getContract(ethereum as provider, lpTokenAddress)
  }, [ethereum, lpTokenAddress])

  const { onRedeem } = useRedeem(getMasterChefContract(sushi))

  const lpTokenName = useMemo(() => {
    return lpToken.toUpperCase()
  }, [lpToken])

  const earnTokenName = useMemo(() => {
    return earnToken.toUpperCase()
  }, [earnToken])

  return (
    <Container>
      <StyleFarmSelect>
        <PageHeader
          icon={icon}
          subtitle={`Deposit ${lpTokenName}  Tokens and earn ${earnTokenName}`}
          title={name}
        />

        <StyledCardsWrapper>
          <StyledCarLeft>
            <Harvest pid={pid} />
          </StyledCarLeft>

          <StyledCarRight>
            <Stake
              lpContract={lpContract}
              pid={pid}
              tokenName={lpToken.toUpperCase()}
            />
          </StyledCarRight>
        </StyledCardsWrapper>

        <StyledContent>
          EVERY TIME YOU STAKE AND UNSTAKE LP TOKENS,
          <br /> THE CONTRACT WILL AUTOMAGICALLY HARVEST METH REWARDS
        </StyledContent>
      </StyleFarmSelect>
    </Container>
  )
}
const StyleFarmSelect = styled.div`
  box-shadow: 6px 9px 10px ${(props) => props.theme.blacktransparent};
  border: 3px solid ${(props) => props.theme.color.white};
  background-image: ${(props) => props.theme.color.lightgreen[300]};
  min-height: 550px;
  width: 570px;
  position: relative;
  margin: 50px auto;
  max-width: 90%;
  padding: 20px;
  text-align: center;
`

const StyledCardsWrapper = styled.div`
  display: flex;
  display: -ms-flexbox;
  justify-content: center;
  flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  margin-bottom: 15px;
`

const StyledCarLeft = styled.div`
  margin: 10px;
  @media (max-width: 600px) {
    min-width: 100%;
  }
`
const StyledCarRight = styled.div`
  flex: 2 0 100px;
  -ms-flex: 2 0 100px;
  margin: 10px 0px 10px 30px;
  text-align: right;
  @media (max-width: 600px) {
    min-width: 100%;
    margin: 10px;
  }
`

const StyledContent = styled.p`
  color: ${(props) => props.theme.color.white};
  font-weight: normal;
  line-height: 27px;
`
export default Farm
