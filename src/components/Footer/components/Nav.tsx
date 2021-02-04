import React from 'react'
import styled from 'styled-components'
import Contract from '../../../assets/images/footer/Contract.png'
import Discord from '../../../assets/images/footer/Discord.png'
import Telegram from '../../../assets/images/footer/Telegram.png'
import Medium from '../../../assets/images/footer/Medium.png'
import Twitter from '../../../assets/images/footer/Twitter.png'
import UniSwap from '../../../assets/images/footer/UniSwap.png'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <FlexDiv>
        <StyledLink target="_blank" href="https://etherscan.io/address/">
	  <img src={Contract} />
        </StyledLink>
      </FlexDiv>
      <FlexDiv>
        <StyledLink target="_blank" href="https://discord.gg/KvDDnVN2FP">
          <img src={Discord} />
        </StyledLink>
      </FlexDiv>
      <FlexDiv>
        <StyledLink target="_blank" href="https://t.me/FarmingBad">
          <img src={Telegram} />
        </StyledLink>
      </FlexDiv>
      <FlexDiv>
        <StyledLink target="_blank" href="https://medium.com/@FarmingBad">
          <img src={Medium} />
        </StyledLink>
      </FlexDiv>
      <FlexDiv>
        <StyledLink target="_blank" href="https://twitter.com/FarmingBad">
          <img src={Twitter} />
        </StyledLink>
      </FlexDiv>
      <FlexDiv>
        <StyledLink target="_blank" href="https://app.uniswap.org/#/swap?outputCurrency=">
          <img src={UniSwap} />
        </StyledLink>
      </FlexDiv>
    </StyledNav>
  )
}

const StyledNav = styled.ul`
  display: flex;
  display: -ms-flexbox;
  justify-content: center;
  flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  justify-content: space-between;
`
const FlexDiv = styled.li`
  flex: 1 0 100px;
  -ms-flex: 1 0 100px;
  text-align: center;
  padding: 20px;
`

const StyledLink = styled.a`
  color: ${(props) => props.theme.color.grey[1001]};
  padding-left: ${(props) => props.theme.spacing[4]}px;
  padding-right: ${(props) => props.theme.spacing[4]}px;
  text-decoration: none;
  max-width: 115px;
  &:hover {
    color: ${(props) => props.theme.color.grey[1000]};
  }
`
const StyledLinkIcon = styled.a`
  color: ${(props) => props.theme.color.grey[1001]};
  padding-left: ${(props) => props.theme.spacing[2]}px;
  padding-right: ${(props) => props.theme.spacing[2]}px;
  text-decoration: none;
  max-width: 115px;
  &:hover {
    color: ${(props) => props.theme.color.grey[1000]};
  }
  @media (max-width: 1000px) {
    margin: 5px 0;
  }
`

export default Nav
