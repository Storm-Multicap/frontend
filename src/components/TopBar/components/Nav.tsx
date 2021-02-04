import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Home from '../../../assets/images/header/homemenu.png'
import RVLab from '../../../assets/images/header/rvlabmenu.png'
import SuperLab from '../../../assets/images/header/superlabmenu.png'
import Nft from '../../../assets/images/header/nftmenu.png'

const Nav: React.FC = () => {
  const [mobilemenu, setmobilemenu] = useState(false)
  const handlesetmobilemenu = () => {
    setmobilemenu(!mobilemenu)
  }
  return (
    <StyledNav>
      <StyledMobileNav onClick={handlesetmobilemenu}>
        <StyledMobileNavItem></StyledMobileNavItem>
        <StyledMobileNavItem></StyledMobileNavItem>
        <StyledMobileNavItem></StyledMobileNavItem>
      </StyledMobileNav>
      <StyledMenu className={mobilemenu ? 'active_mobilemenu' : null}>
        <StyledMenuItem>
          <StyledLink exact activeClassName="active" to="/">
            <MenuImage src={Home}></MenuImage>
          </StyledLink>
        </StyledMenuItem>
        <StyledMenuItem>
          <StyledLink exact to="/rvlab">
            <MenuImage src={RVLab}></MenuImage>
          </StyledLink>
        </StyledMenuItem>
        <StyledMenuItem>
          <StyledLink exact to="/superlab">
            <MenuImage src={SuperLab}></MenuImage>
          </StyledLink>
        </StyledMenuItem>
        <StyledMenuItem>
          <StyledLink exact to="/nft">
            <MenuImage src={Nft}></MenuImage>
          </StyledLink>
        </StyledMenuItem>
      </StyledMenu>
    </StyledNav>
  )
}

const StyledMobileNav = styled.nav`
  position: absolute;
  right: 15px;
  width: 25px;
  cursor: pointer;
  left: 112px;
  top: 15px;
  display: none;
  padding: 0;
  @media (max-width: 992px) {
    display: block;
  }
`
const StyledMobileNavItem = styled.div`
  background: ${(props) => props.theme.color.white};
  opacity: 0.8;
  height: 3px;
  width: 25px;
  margin: 5px auto;
  transition: all 300ms;
`
const StyledNav = styled.nav`
  flex: 1 0 100px;
  -ms-flex: 1 0 100px;
  max-width: 70%;
`
const StyledMenu = styled.ul`
  float: right;
  margin-right: 15px;
  @media (max-width: 992px) {
    display: none;
  }
`
const StyledMenuItem = styled.li`
  float: left;
  margin: 13px 15px 0 15px;
  color: $ColorOne;
  @media (max-width: 992px) {
    float: none;
    padding: 5px;
  }
`
const MenuImage = styled.img``

const StyledLink = styled(NavLink)``

export default Nav
