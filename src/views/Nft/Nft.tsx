import React from 'react'
import Page from '../../components/Page'
import Background from '../../assets/images/rvlab/rvlabbg.jpg'
import ComingSoon from '../../assets/images/rvlab/Coming Soon.png'
import styled from 'styled-components'
const Nft: React.FC = () => {
  return (
    <Page background={Background}>
      <ComingWrapper>
        <ComingImage src={ComingSoon} />
      </ComingWrapper>
    </Page>
  )
}

const ComingWrapper = styled.div`
  text-align: center;
  margin-top: 280px;
  padding: 30px;
`
const ComingImage = styled.img`
  max-width: 100%;
`
export default Nft
