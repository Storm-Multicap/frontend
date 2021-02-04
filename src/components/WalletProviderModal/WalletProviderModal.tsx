import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useWallet } from 'use-wallet'

import metamaskLogo from '../../assets/images/wallet/metamask.png'
import walletConnectLogo from '../../assets/images/wallet/Connect.png'
import CaptureLogo from '../../assets/images/wallet/walletconnect.png'
import Cancel from '../../assets/images/myaccount/Cancel.png'
import Modal, { ModalProps } from '../Modal'
import ModalActions from '../ModalActions'
import ModalTitle from '../ModalTitle'

import WalletCard from './components/WalletCard'

const WalletProviderModal: React.FC<ModalProps> = ({ onDismiss }) => {
  const { account, connect } = useWallet()

  useEffect(() => {
    if (account) {
      onDismiss()
    }
  }, [account, onDismiss])

  return (
    <Modal>
      <ModalTitle text="Select a wallet provider" />
      <ModalContent>
        <StyledWalletCard>
          <WalletCard
            icon={
              <img alt="wallet" src={metamaskLogo} style={{ height: 130 }} />
            }
            onConnect={() => connect('injected')}
            title="Metamask"
            logo={<img alt="wallet" src={walletConnectLogo} />}
          />
        </StyledWalletCard>

        <StyledWalletCard>
          <WalletCard
            icon={
              <img alt="wallet" src={CaptureLogo} style={{ paddingTop: 27 }} />
            }
            onConnect={() => connect('walletconnect')}
            title="WalletConnect"
            logo={<img alt="wallet" src={walletConnectLogo} />}
          />
        </StyledWalletCard>
      </ModalContent>

      <CloseButtonWrapper>
        <CloseButton onClick={onDismiss}>
          <ConnectImg src={Cancel}></ConnectImg>
        </CloseButton>
      </CloseButtonWrapper>
    </Modal>
  )
}

const ModalContent = styled.div`
  display: flex;
  display: -ms-flexbox;
  justify-content: center;
  flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  margin-top: 60px;
`

const StyledWalletCard = styled.div`
  flex: 1 0 100px;
  -ms-flex: 1 0 100px;
  margin: 10px;
  text-align: center;
`
const ConnectImg = styled.img`
  max-height: 25px;
`
const CloseButtonWrapper = styled.div`
  padding: 0 20px;
`
const CloseButton = styled.button`
  border: 2px solid ${(props) => props.theme.color.white};
  padding: 14px 3px 9px 3px;
  color: ${(props) => props.theme.color.white};
  background: none;
  font-size: 1.3rem;
  margin: 10px auto;
  width: 100%;
  border-radius: 7px;
`
export default WalletProviderModal
