import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Plant = styled.div `
  font-size: 20px;
  margin-bottom: 10px;
`
const Link = styled(NavLink) `
  text-decoration: none;
  color:black;
  font-family: Arial, Helvetica, sans-serif;
`

export default ({ id, name }) => (
  <Plant key={id}>
    <Link to={`/plants/${name}`}>
      {`${name}`}
    </Link>
  </Plant>
)
