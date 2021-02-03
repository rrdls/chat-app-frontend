import React from 'react'
import { useDispatch } from 'react-redux'
import Chat from '../components/Chat'
import SideBar from '../components/SideBar'

import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: #a0a0a0;
`

export const Body = styled.div`
  display: flex;
  background-color: #ededed;
  margin-top: --50px;
  height: 90vh;
  width: 90vw;
  box-shadow: -1px 4px 20px -6px rgba(0, 0, 0, 0.75);
  font-family: ${(props) => props.theme.font.fontFamily};
`

const IndexPage: React.FC = () => {
  return (
    <Container>
      <Body>
        <SideBar />
        <Chat />
      </Body>
    </Container>
  )
}

export default IndexPage
