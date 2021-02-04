import React from 'react'
import styled from 'styled-components'

const Card: React.FC = ({ children }) => <StyledCard>{children}</StyledCard>

const StyledCard = styled.div`
  flex: 1 0 100px;
  -ms-flex: 1 0 100px;
  box-shadow: 6px 9px 10px ${(props) => props.theme.color.blacktransparent};
  background: ${(props) => props.theme.color.lightgreen[300]};
  border: 3px solid ${(props) => props.theme.color.white};
  margin: 15px;
  min-width: 31%;
  max-width: 31%;
  min-height: 250px;
  padding: 20px 25px;
  text-align: center;
  position: relative;
  color: ${(props) => props.theme.color.white};
  @media (max-width: 1048px) {
    min-width: 40%;
    max-width: 40%;
  }
  @media (max-width: 680px) {
    min-width: 70%;
    max-width: 70%;
  }
  @media (max-width: 420px) {
    min-width: 100%;
    max-width: 100%;
  }
`

export default Card
