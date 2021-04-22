import React from 'react'
import styled from 'styled-components'

const Page = styled.div `
  margin: 60px auto 0;
  text-align: center;
`

export default ({ children }) => (
  <Page>{children}</Page>
)
