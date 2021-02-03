import React from 'react'
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

const Chat: React.FC = () => {
  return (
    <Container>
      <Header>
        <Info>
          <RoomName>Room Name</RoomName>
          <Status>Last seen at...</Status>
        </Info>
      </Header>
      <Body>
        <Message userName="Renato">This is a message !!</Message>
        <Message userName="Renato" receiver>
          This is a message !!
        </Message>
        <Message userName="Renato">This is a message !!</Message>
        <Message userName="Renato">This is a message !!</Message>
      </Body>
      <Footer>
        <Form>
          <Input placeholder="Type a message" type="text" />
          <SendMessageButton type="submit" onClick={() => alert('hello')}>
            Send
          </SendMessageButton>
        </Form>
      </Footer>
    </Container>
  )
}

export default Chat
