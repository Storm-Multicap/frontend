import React from 'react'
import styled from 'styled-components'

interface ModalTitleProps {
  text?: string
}

const ModalTitle: React.FC<ModalTitleProps> = ({ text }) => (
  <StyledModalTitle>{text}</StyledModalTitle>
)

const StyledModalTitle = styled.h2`
  font-size: 1.9rem;
  font-weight: normal;
  color: #ffffff;
  text-align: center;
`

export default ModalTitle
