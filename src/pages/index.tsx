import React, { ReactNode, useEffect, useRef, useState } from 'react'
import Chat from '../components/Chat'
import SideBar from '../components/SideBar'
import styled from 'styled-components'
import Pusher, { Channel } from 'pusher-js'
import axios from 'axios'
import Button from '../components/Button'
import { useSelector, useDispatch } from 'react-redux'
import {
  loadMessages,
  addMessages
} from '../global-states/slices/messagesSlice'
import { scrollChatBodyDown } from '../utils/messages'

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
        <SideBar />
        <Chat chatBodyRef={chatBodyRef} />
      </Body>
    </Container>
  )
}

export default IndexPage
