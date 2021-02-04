import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logopic from '../../assets/images/header/logo.png'

const Logo: React.FC = () => {
  return (
    <StyledLogo to="/">
      <StyledImage src={Logopic} alt="" />
    </StyledLogo>
  )
}

const StyledImage = styled.img``

const StyledLogo = styled(Link)``

export default Logo
