import React from 'react'
import styled from 'styled-components'

interface WalletCardProps {
  icon: React.ReactNode
  onConnect: () => void
  title: string
  logo: React.ReactNode
}

const WalletCard: React.FC<WalletCardProps> = ({
  icon,
  onConnect,
  title,
  logo,
}) => (
  <ColumnPopup>
    <ColumnaImage>{icon}</ColumnaImage>
    <ColumnTitle>{title}</ColumnTitle>
    <ConnectButton onClick={onConnect}>{logo}</ConnectButton>
  </ColumnPopup>
)

const ColumnPopup = styled.div`
  flex: 1 0 100px;
  -ms-flex: 1 0 100px;
  margin: 10px;
  text-align: center;
`
const ColumnaImage = styled.div`
  height: 130px;
`

const ColumnTitle = styled.h4`
  font-size: 1.5rem;
  color: ${(props) => props.theme.color.white};
  font-weight: normal;
  margin: 15px auto;
`
const ConnectButton = styled.button`
  border: 2px solid ${(props) => props.theme.color.white};
  padding: 6px;
  color: ${(props) => props.theme.color.white};
  background: none;
  font-size: 1.3rem;
  margin: 10px auto;
  width: 100%;
  border-radius: 7px;
`

export default WalletCard
