import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`
export const Header = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightgray;
  padding: 10px 10px 10px 40px;
`
export const Info = styled.div`
  flex: 1;
  padding-left: 20px;
`
export const RoomName = styled.h3`
  font-size: 1rem;
`
export const Status = styled.p`
  font-size: 0.8rem;
`
export const Body = styled.div`
  flex: 1;
  background-color: ${(props) => props.theme.colors.color3};
  padding: 30px;
  height: 100px;
  overflow-y: scroll;
  font-size: 1.1rem;
`
export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 62px;
  border-top: 1px solid lightgray;
`
export const Form = styled.form`
  flex: 1;
  display: flex;
  padding: 5px 15px;
`
export const Input = styled.input`
  flex: 1;
  border-radius: 12px;
  padding: 12px;
  border: none;
`
export const SendMessageButton = styled.button`
  display: none;
`
export const ProfileImage = styled.div`
  .profile {
    border-radius: 50%;
  }
`
