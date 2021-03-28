import React from 'react'
import SideBarChat from '../SideBarChat'

import * as S from './styles'

type Props = {}
const SideBar: React.FC<Props> = (props) => {
  return (
    <S.Container>
      <S.Header>
        <h1>Message</h1>
      </S.Header>
      <S.SearchBar>
        <S.SearchInputContainer>
          <S.Input placeholder="Search for messages" />
        </S.SearchInputContainer>
      </S.SearchBar>
      <S.Chats>
        <SideBarChat
          name="Renato Ramoss"
          lastMessage="This is the last message"
        />
        <SideBarChat
          name="Renato Ramos"
          lastMessage="This is the last message"
        />
        <SideBarChat
          name="Renato Ramos"
          lastMessage="This is the last message"
        />
        <SideBarChat
          name="Renato Ramos"
          lastMessage="This is the last message"
        />
        <SideBarChat
          name="Renato Ramos"
          lastMessage="This is the last message"
        />
        <SideBarChat
          name="Renato Ramos"
          lastMessage="This is the last message"
        />
        <SideBarChat
          name="Renato Ramos"
          lastMessage="This is the last message"
        />
        <SideBarChat
          name="Renato Ramos"
          lastMessage="This is the last message"
        />
        <SideBarChat
          name="Renato Ramos"
          lastMessage="This is the last message"
        />
      </S.Chats>
    </S.Container>
  )
}

export default SideBar
