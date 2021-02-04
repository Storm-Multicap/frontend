import React from 'react'
import styled from 'styled-components'

interface PageHeaderProps {
  icon: React.ReactNode
  subtitle?: string
  title?: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ icon, subtitle, title }) => {
  return (
    <StyledPageHeader>
      <StyledTitle>{title}</StyledTitle>
      <StyledSubtitle>{subtitle}</StyledSubtitle>
      <StyledIcon>{icon}</StyledIcon>
    </StyledPageHeader>
  )
}

const StyledPageHeader = styled.div``

const StyledIcon = styled.div`
  min-height: 150px;
  padding: 20px 0;
`

const StyledTitle = styled.h2`
  margin-top: 30px;
  color: ${(props) => props.theme.color.white};
  font-weight: normal;
  font-size: 2.2rem;
`

const StyledSubtitle = styled.h4`
  margin-top: 20px;
  font-weight: normal;
  color: ${(props) => props.theme.color.white};
  font-size: 1.3rem;
`

export default PageHeader
