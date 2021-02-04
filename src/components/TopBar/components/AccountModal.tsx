import React, { useCallback } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { useWallet } from 'use-wallet'
import useTokenBalance from '../../../hooks/useTokenBalance'
import useSushi from '../../../hooks/useSushi'
import { getSushiAddress } from '../../../sushi/utils'
import { getBalanceNumber } from '../../../utils/formatBalance'
import Modal, { ModalProps } from '../../Modal'
import EtherScreen from '../../../assets/images/myaccount/View.png'
import Signout from '../../../assets/images/myaccount/SignOut.png'
import Cancel from '../../../assets/images/myaccount/Cancel.png'
import farming from '../../../assets/images/farming/farming.png'
import Button from '../../../components/Button/Button'
const AccountModal: React.FC<ModalProps> = ({ onDismiss }) => {
  const { account, reset } = useWallet()

  const handleSignOutClick = useCallback(() => {
    onDismiss!()
    reset()
  }, [onDismiss, reset])

  const sushi = useSushi()
  const sushiBalance = useTokenBalance(getSushiAddress(sushi))

  return (
    <Modal>
      <Title>My Account</Title>
      <ImageContainer>
        <LogoImage alt="logo" src={farming} />
      </ImageContainer>
      <Balance>
        {getBalanceNumber(sushiBalance)}
        <br /> METH Balance
      </Balance>
      <ConnectButton>
        <ButtonLink href={`https://etherscan.io/address/${account}`}>
          <EtherScreenImg src={EtherScreen} />
        </ButtonLink>
      </ConnectButton>

      <ConnectButton onClick={handleSignOutClick}>
        <ConnectImg src={Signout} />
      </ConnectButton>

      <CloseButton onClick={onDismiss}>
        <ConnectImg src={Cancel}></ConnectImg>
      </CloseButton>
    </Modal>
  )
}
const Title = styled.h2`
  font-size: 1.9rem;
  font-weight: normal;
  color: ${(props) => props.theme.color.white};
  text-align: center;
`
const ImageContainer = styled.div`
  min-height: 215px;
`
const LogoImage = styled.img`
  margin: 0 auto;
`
const ButtonLink = styled.a``

const Balance = styled.h1`
  font-size: 2.2rem;
  color: ${(props) => props.theme.color.white};
  font-weight: normal;
  margin-bottom: 20px;
`
const ConnectButton = styled.button`
  border: 2px solid ${(props) => props.theme.color.white};
  padding: 6px;
  color: ${(props) => props.theme.color.white};
  background: none;
  font-size: 1.3rem;
  margin: 10px 4px;
  width: 100%;
  border-radius: 7px;
`

const CloseButton = styled.button`
  border: 2px solid ${(props) => props.theme.color.white};
  padding: 6px;
  color: ${(props) => props.theme.color.white};
  background: none;
  font-size: 1.3rem;
  margin: 10px 4px;
  width: 100%;
  border-radius: 7px;
  margin-top: 50px;
`

const ConnectImg = styled.img`
  max-height: 25px;
`
const EtherScreenImg = styled.img`
  max-height: 25px;
`
const StyledLink = styled(NavLink)``
export default AccountModal
