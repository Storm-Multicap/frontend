import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'

interface ContainerProps {
  children?: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
}

const Container: React.FC<ContainerProps> = ({ children, size = 'md' }) => {
  const { siteWidth } = useContext<{ siteWidth: number }>(ThemeContext)
  let width: number
  switch (size) {
    case 'sm':
      width = siteWidth / 6
      break
    case 'md':
      width = (siteWidth * 2) / 3
      break
    case 'lg':
    default:
      width = siteWidth
  }
  return <StyledContainer width={width}>{children}</StyledContainer>
}

interface StyledContainerProps {
  width: number
}

const StyledContainer = styled.div<StyledContainerProps>`
  max-width: 1300px;
  margin: 0 auto;
  @media (max-width: 1048px) {
    padding: 0 15px;
  }
`

export default Container
