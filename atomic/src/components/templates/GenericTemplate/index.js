import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// import { size } from 'styled-theme'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  box-sizing: border-box;
`

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  width: 100%;
  z-index: 999;
`
const Main = styled.main``
const Hero = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Content = styled.section`
  width: 100%;
  box-sizing: border-box;
  margin: 2rem auto;
`

const Footer = styled.footer`
  margin-top: auto;
`

const GenericTemplate = ({
  header,
  main,
  hero,
  children,
  footer,
  ...props
}) => {
  return (
    <Wrapper {...props}>
      <Header>{header}</Header>
      <Main>{main}</Main>
      <Hero>{hero}</Hero>
      <Content>{children}</Content>
      <Footer>{footer}</Footer>
    </Wrapper>
  )
}

GenericTemplate.propTypes = {
  header: PropTypes.node.isRequired,
  hero: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
  children: PropTypes.any.isRequired
}

export default GenericTemplate
