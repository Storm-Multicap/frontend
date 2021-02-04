import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import styled from 'styled-components'
import { useWallet } from 'use-wallet'
import Page from '../../components/Page'
import WalletProviderModal from '../../components/WalletProviderModal'
import Background from '../../assets/images/rvlab/rvlabbg.jpg'
import useModal from '../../hooks/useModal'
import UnlockWallet from '../../assets/images/header/walletmenu.png'

import Farm from '../Farm'

import FarmCards from './components/FarmCards'

const Farms: React.FC = () => {
  const { path } = useRouteMatch()
  const { account } = useWallet()
  const [onPresentWalletProviderModal] = useModal(<WalletProviderModal />)
  return (
    <Switch>
      <Page background={Background}>
        {!!account ? (
          <>
            {window.location.pathname === '/rvlab' ? (
              <Route exact path={path}>
                <FarmCards />
              </Route>
            ) : null}

            <Route path={`${path}/:farmId`}>
              <Farm />
            </Route>
          </>
        ) : (
          <div
            style={{
              alignItems: 'center',
              display: 'flex',
              flex: 1,
              justifyContent: 'center',
            }}
          >
            <WalletButton onClick={onPresentWalletProviderModal}>
              <WalletButtonImage src={UnlockWallet} />
            </WalletButton>
          </div>
        )}
      </Page>
    </Switch>
  )
}

const WalletButton = styled.button`
  background: url('../images/header/walletmenu.png') no-repeat center center,
    linear-gradient(140deg, #06443c, #0a4f3d, #0d6e31 80%);
  border: 3px solid #ffffff;
  width: 240px;
  text-align: center;
  padding: 3px 8px 0 8px;
  height: 55px;
  margin-top: 280px;
`

const WalletButtonImage = styled.img``
export default Farms
