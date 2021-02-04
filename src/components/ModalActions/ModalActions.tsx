import React from 'react'
import styled from 'styled-components'

import Spacer from '../Spacer'

const ModalActions: React.FC = ({ children }) => {
  const l = React.Children.toArray(children).length
  return (
    <StyledModalActions>
      {React.Children.map(children, (child, i) => (
        <>
          <StyledModalAction>{child}</StyledModalAction>
          {i < l - 1 && <Spacer />}
        </>
      ))}
    </StyledModalActions>
  )
}

const StyledModalActions = styled.div`
  align-items: center;
  display: flex;
  display: -ms-flex;
  flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  margin: 0;
  padding: 10px;
  justify-content: center;
`

const StyledModalAction = styled.div``

export default ModalActions
