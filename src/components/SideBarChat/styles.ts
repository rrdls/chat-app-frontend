import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  cursor: pointer;
  border-bottom: 1px solid ${(props) => props.theme.colors.color3};
  &:hover {
    background-color: #f6f6f6;
  }
`

export const Info = styled.div`
  margin-left: 15px;
`

export const Name = styled.h2`
  font-size: 0.9rem;
  margin-bottom: 8px;
`

export const LastMessage = styled.p`
  font-size: 0.8rem;
`

export const ProfileImage = styled.div`
  .profile {
    border-radius: 50%;
  }
`
