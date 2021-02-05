import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import Chat from '../components/Chat'
import SideBar from '../components/SideBar'
import styled from 'styled-components'
import Pusher, { Channel } from 'pusher-js'
import axios from 'axios'

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
  const [messages, setMessages] = useState([])
  const bodyChatRef = useRef<HTMLDivElement>()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:3333/api/v1/messages/sync'
        )
        setMessages(response.data)
        bodyChatRef.current.scrollTop = bodyChatRef.current.scrollHeight
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    const pusher = new Pusher('3fd0bf5e51fea33ce05a', {
      cluster: 'eu'
    })
    const channel = pusher.subscribe('message')
    channel.bind('inserted', (newMessage) => {
      setMessages([...messages, newMessage])
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
        <Chat messages={messages} bodyChatRef={bodyChatRef} />
      </Body>
    </Container>
  )
}

export default IndexPage
