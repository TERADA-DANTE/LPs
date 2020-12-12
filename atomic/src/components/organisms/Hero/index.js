import React from 'react'
import styled from 'styled-components'
import Step from 'components/molcules/Step/index'

const Wrapper = styled.div`
  @media screen and (max-width: 960px) {
    width: 100vw;
  }
  @media screen and (min-width: 960px) {
    width: 960px;
  }
  padding: 16px 24px;
`

const Hero = () => {
  return (
    <Wrapper>
      <Step />
    </Wrapper>
  )
}

export default Hero
