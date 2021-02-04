import React from 'react'
import styled from 'styled-components'
import LogoImage from '../../assets/images/home/logo.png'
import Page from '../../components/Page'
import Balances from './components/Balances'
import Background from '../../assets/images/home/homebg.jpg'
const Home: React.FC = () => {
  return (
    <Page background={Background}>
      <StyledLogo>
        <StyledLogoImage src={LogoImage} />
      </StyledLogo>
      <Balances />
    </Page>
  )
}

const StyledLogo = styled.section`
  text-align: center;
  margin: 50px auto 30px auto;
  padding: 10px;
  min-height: 270px;
  @media (max-width: 420px) {
    min-height: unset;
  }
`
const StyledLogoImage = styled.img`
  width: 400px;
  max-width: 100%;
`

export default Home
