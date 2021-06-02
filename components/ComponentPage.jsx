import React from 'react'
import styled from 'styled-components'

const Page = styled.div `
  margin: 60px auto 0;
  text-align: center;
  height: 100%;
  background-color:white;
  background-size: cover; 
  margin:0;
`

export default ({ children }) => (
  <Page>
    {children}
  </Page>
)
