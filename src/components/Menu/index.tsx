import * as S from './styles'

const Menu = () => (
  <S.Container>
    <S.Top></S.Top>
    <S.Middle>
      <div>
        <S.CustomInbox fontSize="large" />
      </div>
      <S.CustomPersonAdd fontSize="large" />
      <S.CustomGroupAdd fontSize="large" />
    </S.Middle>
    <S.Bottom>
      <S.CustomAddCircle fontSize="large" />
    </S.Bottom>
  </S.Container>
)

export default Menu
