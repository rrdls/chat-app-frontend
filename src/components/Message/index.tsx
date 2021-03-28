import React from 'react'

import * as S from './styles'

type Props = {
  receiver?: boolean
  timestamp: string
}

const Message: React.FC<Props> = ({ children, receiver, timestamp }) => {
  return (
    <S.Container>
      <S.Text receiver={receiver}>
        {children}
        <S.DateTime>{timestamp}</S.DateTime>
      </S.Text>
    </S.Container>
  )
}

export default Message
