import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.65;
`
export const Header = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightgray;
`
export const Info = styled.div`
  flex: 1;
  padding-left: 20px;
`
export const RoomName = styled.h3`
  font-size: 1.2rem;
`
export const Status = styled.p`
  font-size: 1rem;
`
export const Body = styled.div`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 30px;
  overflow-y: auto;
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
  border-radius: 30px;
  padding: 12px;
  border: none;
`
export const SendMessageButton = styled.button`
  display: none;
`
