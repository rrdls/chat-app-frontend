import React from 'react'

import { Container, Info, Name, LastMessage } from './styles'

interface ISideBarChatProps {
  name: string
  lastMessage: string
}

const SideBarChat: React.FC<ISideBarChatProps> = (props) => {
  const { name, lastMessage } = props
  return (
    <Container>
      <Info>
        <Name>{name}</Name>
        <LastMessage>{lastMessage}</LastMessage>
      </Info>
    </Container>
  )
}

export default SideBarChat
