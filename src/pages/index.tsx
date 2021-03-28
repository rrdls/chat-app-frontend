import React, { ReactNode, useEffect, useRef, useState } from 'react'
import Chat from '../components/Chat'
import SideBar from '../components/SideBar'
import styled, { css } from 'styled-components'
import Pusher, { Channel } from 'pusher-js'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import {
  loadMessages,
  addMessages
} from '../global-states/slices/messagesSlice'
import { scrollChatBodyDown } from '../utils/messages'
import Menu from '../components/Menu'

export const Container = styled.div`
  height: 100vh;
`

export const Body = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 14fr;
  grid-template-rows: 100%;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.color2};
  font-family: ${(props) => props.theme.font.fontFamily};
`

const IndexPage = () => {
  const messages = useSelector((state) => state.messages.messages)
  const dispatch = useDispatch()
  const chatBodyRef = useRef<HTMLDivElement>()

  useEffect(() => {
    ;(async () => {
      await dispatch(loadMessages())
      scrollChatBodyDown({ chatBodyRef })
    })()
  }, [])

  useEffect(() => {
    const pusher = new Pusher('3fd0bf5e51fea33ce05a', {
      cluster: 'eu'
    })
    const channel = pusher.subscribe('message')
    channel.bind('inserted', async (newMessage) => {
      await dispatch(addMessages(newMessage))
      scrollChatBodyDown({ chatBodyRef })
    })
    return () => {
      channel.unbind_all()
      channel.unsubscribe()
    }
  }, [messages])

  return (
    <Container>
      <Body>
        <Menu />
        <SideBar />
        <Chat chatBodyRef={chatBodyRef} />
      </Body>
    </Container>
  )
}

export default IndexPage
