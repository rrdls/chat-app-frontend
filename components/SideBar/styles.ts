import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.35;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-right: 1px solid lightgray;
`

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #f6f6f6;
  height: 39px;
  padding: 10px;
`

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  width: 100%;
  height: 35px;
  border-radius: 20px;
  padding: 10px;
`

export const Input = styled.input`
  border: none;
  width: 100%;
`

export const Chats = styled.div`
  flex: 1;
  background-color: white;
  overflow-y: scroll;
`
