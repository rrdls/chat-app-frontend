import React from 'react'
import SideBarChat from '../SideBarChat'
import {
  Container,
  Header,
  SearchBar,
  SearchInputContainer,
  Input,
  Chats
} from './styles'

interface ISideBarProps {}

const SideBar: React.FC<ISideBarProps> = (props) => {
  return (
    <Container>
      <Header></Header>
      <SearchBar>
        <SearchInputContainer>
          <Input />
        </SearchInputContainer>
      </SearchBar>
      <Chats>
        <SideBarChat
          name="Renato Ramos"
          lastMessage="This is the last message"
        />
      </Chats>
    </Container>
  )
}

export default SideBar
