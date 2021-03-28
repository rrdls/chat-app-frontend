import React, { useRef, useState } from 'react'
import Message from '../Message'
import Image from 'next/image'

import * as S from './styles'

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

type Props = {
  chatBodyRef: React.MutableRefObject<HTMLDivElement>
}

const Chat: React.FC<Props> = (props) => {
  const { chatBodyRef } = props
  const messages = useSelector((state) => state.messages.messages)
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const sendMessage = async (e) => {
    e.preventDefault()
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const newMessage = {
      name: 'Renato',
      message: input,
      timestamp: hours + ':' + minutes,
      received: false,
      user_id: '134'
    }
    try {
      await dispatch(addMessages(newMessage))
      scrollChatBodyDown({ chatBodyRef })
      dispatch(postMessage(newMessage))
      setInput('')
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <S.Container>
      <S.Header>
        <S.ProfileImage>
          <Image
            src="/img/grogu.jpg"
            alt="Picture of the author"
            width={50}
            height={50}
            className="profile"
          />
        </S.ProfileImage>
        <S.Info>
          <S.RoomName>Room Name</S.RoomName>
          <S.Status>Last seen at...</S.Status>
        </S.Info>
      </S.Header>
      <S.Body ref={chatBodyRef} id="bodyChat">
        {messages?.map(({ message, received, timestamp }, index) => (
          <Message receiver={received} timestamp={timestamp} key={index}>
            {message}
          </Message>
        ))}
      </S.Body>
      <S.Footer>
        <S.Form>
          <S.Input
            value={input}
            placeholder="Type a message"
            type="text"
            onChange={(e) => setInput(e.target.value)}
          />
          <S.SendMessageButton type="submit" onClick={sendMessage}>
            Send
          </S.SendMessageButton>
        </S.Form>
      </S.Footer>
    </S.Container>
  )
}

export default Chat
