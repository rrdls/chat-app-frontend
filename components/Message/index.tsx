import React from 'react'

import { Container, Text, DateTime, UserName } from './styles'

interface IMessageProps {
  userName: string
  receiver?: boolean
}

const Message: React.FC<IMessageProps> = (props) => {
  const { userName, children, receiver } = props
  return (
    <Container>
      <Text receiver={receiver}>
        <UserName>{userName}</UserName>
        {children}
        <DateTime>{new Date().toUTCString()}</DateTime>
      </Text>
    </Container>
  )
}

export default Message
