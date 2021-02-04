import React, { useContext, useMemo } from 'react'
import styled, { ThemeContext } from 'styled-components'

import { Link } from 'react-router-dom'
import { NONAME } from 'dns'

interface ButtonProps {
  children?: React.ReactNode
  disabled?: boolean
  href?: string
  onClick?: () => void
  size?: 'sm' | 'md' | 'lg'
  text?: string
  to?: string
  variant?: 'default' | 'secondary' | 'tertiary' | 'primary'
  style?: React.CSSProperties
}

const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  href,
  onClick,
  size,
  text,
  to,
  variant,
  style,
}) => {
  const { color, spacing } = useContext(ThemeContext)

  let buttonColor: string
  switch (variant) {
    case 'secondary':
      buttonColor = color.grey[200]
      break
    case 'primary':
      buttonColor = color.grey[900]
      break
    case 'default':
    default:
      buttonColor = color.primary.main
  }
  let backgroundColor: string
  let boxShadow: string
  switch (variant) {
    case 'primary':
      boxShadow = `0px 20px 30px 0px #34fcf521;`
      backgroundColor = color.blue[200]
      break
    case 'default':
    default:
      boxShadow = ` 1px 14px 20px 5px #f61e574d;`
      backgroundColor = color.grey[1100]
  }

  let buttonSize: number
  let buttonPadding: number
  let fontSize: number
  switch (size) {
    case 'sm':
      // boxShadow = `1px 1px 2px ${color.grey[1100]},
      //   -2px -2px 4px ${color.grey[1110]}FF;`
      buttonPadding = spacing[3]
      buttonSize = 36
      fontSize = 14
      break
    case 'lg':
      // boxShadow = `1px 1px 2px ${color.grey[1100]},
      // -2px -2px 4px ${color.grey[1110]}ff;`
      buttonPadding = spacing[4]
      buttonSize = 72
      fontSize = 16
      break
    case 'md':
    default:
      // boxShadow = `1px 1px 2px ${color.grey[1100]},
      //   -2px -2px 12px -1px ${color.grey[1110]}ff;`
      buttonPadding = spacing[4]
      buttonSize = 56
      fontSize = 16
  }

  const ButtonChild = useMemo(() => {
    if (to) {
      return <StyledLink to={to}>{text}</StyledLink>
    } else if (href) {
      return (
        <StyledExternalLink href={href} target="__blank">
          {text}
        </StyledExternalLink>
      )
    } else {
      return text
    }
  }, [href, text, to])

  return (
    <StyledButton
      boxShadow={boxShadow}
      backgroundColor={backgroundColor}
      color={buttonColor}
      disabled={disabled}
      fontSize={fontSize}
      onClick={onClick}
      padding={buttonPadding}
      size={buttonSize}
      style={style}
    >
      {children}
      {ButtonChild}
    </StyledButton>
  )
}

interface StyledButtonProps {
  boxShadow: string
  backgroundColor: string
  color: string
  disabled?: boolean
  fontSize: number
  padding: number
  size: number
}

const StyledButton = styled.button<StyledButtonProps>`
  border: 2px solid #ffffff;
  background: none;
  padding: 0px 55px;
  color: #ffffff;
  font-size: 1.3rem;
  margin: 3px 0px;
  height: 42px;
  position: relative;
`

const StyledLink = styled(Link)`
  font-size: inherit;
  color: #ffffff;
  position: absolute;
  width: 100%;
  height: 100%;
  right: 0;
  top: 0;
  padding: 7px 3px;
`

const StyledExternalLink = styled.a`
  font-size: inherit;
  color: #ffffff;
  position: absolute;
  width: 100%;
  height: 100%;
  right: 0;
  top: 0;
  padding: 7px 3px;
`

export default Button
