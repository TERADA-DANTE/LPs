import React from 'react'
import styled from 'styled-components'
import Navigation from 'components/molcules/Navigation/index'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0rem;
  @media screen and (max-width: 640px) {
    padding: 0.5rem 0rem;
  }
`

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

const Header = () => {
  return (
    <Wrapper opaque reverse>
      <InnerWrapper>
        <h1>Atomic</h1>
        <Navigation items={['Home', 'About', 'Docs']} />
      </InnerWrapper>
    </Wrapper>
  )
}

export default Header
