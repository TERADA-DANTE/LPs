import React from 'react'
import styled from 'styled-components'
import Navigation from 'components/molcules/Navigation/index'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0rem;
  @media screen and (max-width: 960px) {
    width: 100vw;
  }
  @media screen and (min-width: 960px) {
    width: 960px;
  }
  > h1 {
    margin-right: auto;
  }
`

// const InnerWrapper = styled.div`
//   display: flex;
//   align-items: center;
// `

const Header = () => {
  return (
    <Wrapper opaque reverse>
      <h1>Atomic</h1>
      <Navigation items={['Home', 'About', 'Docs']} />
    </Wrapper>
  )
}

export default Header
