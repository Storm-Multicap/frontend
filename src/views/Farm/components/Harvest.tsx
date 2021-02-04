import React, { useState } from 'react'
import styled from 'styled-components'
import useEarnings from '../../../hooks/useEarnings'
import useReward from '../../../hooks/useReward'
import { getBalanceNumber } from '../../../utils/formatBalance'
import Value from '../../../components/Value'
import harvest from '../../../assets/images/farming/Harvest.png'

interface HarvestProps {
  pid: number
}

const Harvest: React.FC<HarvestProps> = ({ pid }) => {
  const earnings = useEarnings(pid)
  const [pendingTx, setPendingTx] = useState(false)
  const { onReward } = useReward(pid)

  return (
    <>
      <StyleTitle>
        METH earned
        <Value value={getBalanceNumber(earnings)} />
      </StyleTitle>
      <ButtonHarvest
        disabled={!earnings.toNumber() || pendingTx}
        onClick={async () => {
          setPendingTx(true)
          await onReward()
          setPendingTx(false)
        }}
      >
        <ButtonImage src={harvest} />
      </ButtonHarvest>
    </>
  )
}

const StyleTitle = styled.h3`
  color: ${(props) => props.theme.color.white};
  font-weight: normal;
  font-size: 1.3rem;
  padding: 0 5px;
`
const ButtonHarvest = styled.button`
  width: 100%;
  border: 2px solid ${(props) => props.theme.color.white};
  color: ${(props) => props.theme.color.white};
  background: none;
  padding-top: 3px;
  font-size: 1.3rem;
  margin: 15px 4px;
  height: 45px;
`

const ButtonImage = styled.img`
  margin: auto;
`
export default Harvest
