import axios from 'axios'
import React, { useRef, useState } from 'react'
import Message from '../Message'
import {
  Container,
  Header,
  Form,
  Footer,
  Input,
  Body,
  RoomName,
  Info,
  Status,
  SendMessageButton
} from './styles'

type Message = {
  message: string
  name: string
  timestamp: string
  received: boolean
}

type ChatProps = {
  messages: Message[]
  bodyChatRef: React.MutableRefObject<HTMLDivElement>
}

const Chat: React.FC<ChatProps> = (props) => {
  const { messages, bodyChatRef } = props

  const [input, setInput] = useState('')

  const sendMessage = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:3333/api/v1/messages/new', {
        name: 'Renato',
        message: input,
        timestamp: new Date().toUTCString(),
        received: false
      })
      setInput('')
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <Container>
      <Header>
        <Info>
          <RoomName>Room Name</RoomName>
          <Status>Last seen at...</Status>
        </Info>
      </Header>
      <Body ref={bodyChatRef} id="bodyChat">
        {messages.map(({ name, message, received, timestamp }, index) => (
          <Message
            userName={name}
            receiver={!received}
            timestamp={timestamp}
            key={index}
          >
            {message}
          </Message>
        ))}
      </Body>
      <Footer>
        <Form>
          <Input
            value={input}
            placeholder="Type a message"
            type="text"
            onChange={(e) => setInput(e.target.value)}
          />
          <SendMessageButton type="submit" onClick={sendMessage}>
            Send
          </SendMessageButton>
        </Form>
      </Footer>
    </Container>
  )
}

export default Chat
