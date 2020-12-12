import React from 'react'
import styled from 'styled-components'

import Description from 'components/molcules/Description'
import Guide from 'components/molcules/Guide'
import Example from 'components/molcules/Example'

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
  const title = 'Atomic Design'
  const paragraph =
    'Atomic Design はデザイン分野で有名な頑固な、不変の、再使用可能なデザインシステムのことを言います。'
  return (
    <Wrapper>
      <Description title={title} paragraph={paragraph} />
      <Guide />
      <Example />
    </Wrapper>
  )
}

export default Hero
