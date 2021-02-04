import React from 'react'
import styled from 'styled-components'
import Nav from './components/Nav'
import Container from '../Container'

const Footer: React.FC = () => (
  <StyledFooter>
    <Container>
      <Nav />
    </Container>
  </StyledFooter>
)

const StyledFooter = styled.footer``

export default Footer
