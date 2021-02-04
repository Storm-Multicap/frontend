import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import Footer from '../Footer'
import MobileMenu from '../MobileMenu'
import TopBar from '../TopBar'
const Page = ({ children, background }: any) => {
  const [mobileMenu, setMobileMenu] = useState(false)
  const handleDismissMobileMenu = useCallback(() => {
    setMobileMenu(false)
  }, [setMobileMenu])

  const handlePresentMobileMenu = useCallback(() => {
    setMobileMenu(true)
  }, [setMobileMenu])
  return (
    <StyledPage background={background}>
      <TopBar onPresentMobileMenu={handlePresentMobileMenu} />
      <MobileMenu onDismiss={handleDismissMobileMenu} visible={mobileMenu} />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </StyledPage>
  )
}
const StyledMain = styled.main`
  min-height: 600px;
`
const StyledPage: any = styled.div`
  background-image: url(${(props: any) => {
    return props.background
  }});
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  width: 100%;
  min-height: 100vh;
`
export default Page
