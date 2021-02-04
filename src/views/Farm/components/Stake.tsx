import BigNumber from 'bignumber.js'
import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { Contract } from 'web3-eth-contract'

import Label from '../../../components/Label'
import Value from '../../../components/Value'
import useAllowance from '../../../hooks/useAllowance'
import useApprove from '../../../hooks/useApprove'
import useModal from '../../../hooks/useModal'
import useStake from '../../../hooks/useStake'
import useStakedBalance from '../../../hooks/useStakedBalance'
import useTokenBalance from '../../../hooks/useTokenBalance'
import useUnstake from '../../../hooks/useUnstake'
import { getBalanceNumber } from '../../../utils/formatBalance'
import DepositModal from './DepositModal'
import WithdrawModal from './WithdrawModal'
import approve from '../../../assets/images/farming/aPprove.png'
import Unstake from '../../../assets/images/farming/Unstake.png'
interface StakeProps {
  lpContract: Contract
  pid: number
  tokenName: string
}

const Stake: React.FC<StakeProps> = ({ lpContract, pid, tokenName }) => {
  const [requestedApproval, setRequestedApproval] = useState(false)

  const allowance = useAllowance(lpContract)
  const { onApprove } = useApprove(lpContract)

  const tokenBalance = useTokenBalance(lpContract.options.address)
  const stakedBalance = useStakedBalance(pid)

  const { onStake } = useStake(pid)
  const { onUnstake } = useUnstake(pid)

  const [onPresentDeposit] = useModal(
    <DepositModal
      max={tokenBalance}
      onConfirm={onStake}
      tokenName={tokenName}
    />,
  )

  const [onPresentWithdraw] = useModal(
    <WithdrawModal
      max={stakedBalance}
      onConfirm={onUnstake}
      tokenName={tokenName}
    />,
  )

  const handleApprove = useCallback(async () => {
    try {
      setRequestedApproval(true)
      const txHash = await onApprove()
      // user rejected tx or didn't go thru
      if (!txHash) {
        setRequestedApproval(false)
      }
    } catch (e) {
      console.log(e)
    }
  }, [onApprove, setRequestedApproval])

  return (
    <>
      <StyleTitle>
        <Label text={`${tokenName}`} />
        <Value value={getBalanceNumber(stakedBalance)} />
      </StyleTitle>

      <StyledCardActions>
        {!allowance.toNumber() ? (
          <>
            <ButtonRight disabled={requestedApproval} onClick={handleApprove}>
              <ButtonImage src={approve} />
            </ButtonRight>
            <ButtonRight
              disabled={stakedBalance.eq(new BigNumber(0))}
              onClick={onPresentWithdraw}
            >
              <ButtonImage src={Unstake} />
            </ButtonRight>
            <ButtonPlus>+</ButtonPlus>
          </>
        ) : (
          <>
            <ButtonRight disabled={stakedBalance.eq(new BigNumber(0))}
              onClick={onPresentWithdraw}
            >
              <ButtonImage src={Unstake} />
            </ButtonRight>
            <ButtonPlus onClick={onPresentDeposit}>+</ButtonPlus>
          </>
        )}
      </StyledCardActions>
    </>
  )
}
const StyleTitle = styled.h3`
  color: ${(props) => props.theme.color.white};
  font-weight: normal;
  font-size: 1.3rem;
  padding: 0 5px;
  text-align: left;
  @media (max-width: 600px) {
    text-align: center;
  }
`
const StyledCardActions = styled.div`
  @media (max-width: 600px) {
    min-width: 100%;
  }
`

const ButtonImage = styled.img`
  margin: auto;
`
const ButtonPlus = styled.button`
  width: 100%;
  border: 2px solid ${(props) => props.theme.color.white};
  color: ${(props) => props.theme.color.white};
  background: none;
  padding: 3px;
  font-size: 1.3rem;
  margin: 0 4px;
  height: 45px;
  width: 30px;
  padding-top: 8px;
  position: relative;
  top: -1px;
  @media (max-width: 600px) {
    min-width: 100%;
    font-size: 2rem;
    padding-top: 0;
    margin-top: 15px;
  }
`

const ButtonRight = styled.button`
  border: 2px solid ${(props) => props.theme.color.white};
  color: ${(props) => props.theme.color.white};
  background: none;
  padding-top: 3px;
  font-size: 1.3rem;
  margin: 15px 4px;
  height: 45px;
  width: 40%;
  @media (max-width: 600px) {
    min-width: 100%;
  }
`

export default Stake
