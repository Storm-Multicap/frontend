import React from 'react'
import styled from 'styled-components'

export interface ModalProps {
  onDismiss?: () => void
}

const Modal: React.FC = ({ children }) => {
  return (
    <StyledResponsiveWrapper>
      <StyledModal>{children}</StyledModal>
    </StyledResponsiveWrapper>
  )
}

const StyledResponsiveWrapper = styled.section`
  position: absolute;
  width: 570px;
  max-width: 90%;
`

const StyledModal = styled.div`
  box-shadow: 6px 9px 10px ${(props) => props.theme.blacktransparent};
  border: 3px solid ${(props) => props.theme.color.white};
  background-image: ${(props) => props.theme.color.lightgreen[300]};
  width: 570px;
  position: relative;
  top: 0;
  margin: 0 auto;
  max-width: 100%;
  padding: 20px;
  text-align: center;
`

export default Modal
