import React from 'react'
import Image from 'next/image'

import * as S from './styles'

type Props = {
  name: string
  lastMessage: string
}

const SideBarChat: React.FC<Props> = (props) => {
  const { name, lastMessage } = props
  return (
    <S.Container>
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
        <S.Name>{name}</S.Name>
        <S.LastMessage>{lastMessage}</S.LastMessage>
      </S.Info>
    </S.Container>
  )
}

export default SideBarChat
