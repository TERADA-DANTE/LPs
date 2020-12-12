import React from 'react'
import styled from 'styled-components'
import Navigation from 'components/molcules/Navigation/index'

const Wrapper = styled.div`
  @media screen and (max-width: 960px) {
    width: 100vw;
  }
  @media screen and (min-width: 960px) {
    width: 960px;
  }
`

// const InnerWrapper = styled.div`
//   display: flex;
//   align-items: center;
// `

const Header = () => {
  return (
    <Wrapper>
      <Navigation />
    </Wrapper>
  )
}

export default Header
