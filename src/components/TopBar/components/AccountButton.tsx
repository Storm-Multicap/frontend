import React, { useCallback } from 'react'
import styled from 'styled-components'
import { useWallet } from 'use-wallet'
import useModal from '../../../hooks/useModal'
import WalletProviderModal from '../../WalletProviderModal'
import AccountModal from './AccountModal'
import UnlockWallet from '../../../assets/images/header/walletmenu.png'
import MyWallet from '../../../assets/images/header/MyWallet.png'

interface AccountButtonProps {}

const AccountButton: React.FC<AccountButtonProps> = (props) => {
  const [onPresentAccountModal] = useModal(<AccountModal />)
  const [onPresentWalletProviderModal] = useModal(
    <WalletProviderModal />,
    'provider',
  )

  const { account } = useWallet()

  const handleUnlockClick = useCallback(() => {
    onPresentWalletProviderModal()
  }, [onPresentWalletProviderModal])

  return (
    <StyledAccountButton>
      {!account ? (
        <WalletButton onClick={handleUnlockClick}>
          <WalletButtonImage src={UnlockWallet} />
        </WalletButton>
      ) : (
        <WalletButton onClick={onPresentAccountModal}>
          <WalletButtonImage src={MyWallet} />
        </WalletButton>
      )}
    </StyledAccountButton>
  )
}

const StyledAccountButton = styled.div`
  flex: 1 0 100px;
  -ms-flex: 1 0 100px;
  max-width: 175px;
  text-align: center;
`
const WalletButton = styled.button`
  background: url('../images/header/walletmenu.png') no-repeat center center,
    linear-gradient(140deg, #06443c, #0a4f3d, #0d6e31 80%);
  border: 3px solid #ffffff;
  padding: 4px 8px 0 8px;
  height: 40px;
  margin-top: 5px;
  width: 100%;
`

const WalletButtonImage = styled.img``

export default AccountButton
