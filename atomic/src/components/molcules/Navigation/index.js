import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
  display: flex;
  margin-left: auto;
  list-style: none;
  > :not(:first-child) {
    margin-left: 1rem;
  }
  a {
    font-weight: 300;
    font-size: 1.25rem;
  }
`
const A = styled.a`
  margin-left: 25px;
`
const Navigation = (props) => {
  return (
    <Nav>
      {props.items.map((item, index) => (
        <A key={index}>{item}</A>
      ))}
    </Nav>
  )
}

export default Navigation
