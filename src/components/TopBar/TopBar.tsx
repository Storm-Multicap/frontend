import React from 'react'
import styled from 'styled-components'
import Container from '../Container'
import Logo from '../Logo'
import AccountButton from './components/AccountButton'
import Nav from './components/Nav'
interface TopBarProps {
  onPresentMobileMenu: () => void
}

const TopBar: React.FC<TopBarProps> = ({ onPresentMobileMenu }) => {
  return (
    <StyledTopBar>
      <Container>
        <StyledTopBarInner>
          <StyledLogoWrapper>
            <Logo />
          </StyledLogoWrapper>
          <Nav />
          <AccountButton />
        </StyledTopBarInner>
      </Container>
    </StyledTopBar>
  )
}
const StyledTopBar = styled.header`
  padding: 5px 0px;
  background: ${(props) => props.theme.color.lightgreen[100]};
  width: 100%;
`

const StyledLogoWrapper = styled.div`
  flex: 1 0 100px;
  max-width: 15%;
  position: relative;
  top: 2px;
`

const StyledTopBarInner = styled.div`
  display: flex;
  justify-content: space-between;
`

export default TopBar
