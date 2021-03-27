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
import { useSelector, useDispatch } from 'react-redux'
import {
  addMessages,
  postMessage
} from '../../global-states/slices/messagesSlice'
import { scrollChatBodyDown } from '../../utils/messages'

type Message = {
  message: string
  name: string
  timestamp: string
  received: boolean
}

type ChatProps = {
  chatBodyRef: React.MutableRefObject<HTMLDivElement>
}

const Chat: React.FC<ChatProps> = (props) => {
  const { chatBodyRef } = props
  const messages = useSelector((state) => state.messages.messages)
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const sendMessage = async (e) => {
    e.preventDefault()
    const newMessage = {
      name: 'Renato',
      message: input,
      timestamp: new Date().toUTCString(),
      received: false,
      user_id: '134'
    }
    try {
      await dispatch(addMessages(newMessage))
      scrollChatBodyDown({ chatBodyRef })
      dispatch(postMessage(newMessage))
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
      <Body ref={chatBodyRef} id="bodyChat">
        {messages?.map(({ name, message, received, timestamp }, index) => (
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
