import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
  display: flex;
  list-style: none;
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
