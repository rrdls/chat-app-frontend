import React from 'react'

import { Container, Text, DateTime, UserName } from './styles'

interface IMessageProps {
  userName: string
  receiver?: boolean
  timestamp: string
}

const Message: React.FC<IMessageProps> = (props) => {
  const { userName, children, receiver, timestamp } = props
  return (
    <Container>
      <Text receiver={receiver}>
        <UserName>{userName}</UserName>
        {children}
        <DateTime>{timestamp}</DateTime>
      </Text>
    </Container>
  )
}

export default Message
