import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  border-right: 1px solid lightgray;
  background-color: ${(props) => props.theme.colors.color2};
`

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.color2};
  padding: 15px 20px;
  border-right: 1px solid lightgray;
  /* border-bottom: 1px solid lightgray; */
`

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.color2};
  width: 100%;
  height: 35px;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid lightgray;
`

export const Input = styled.input`
  border: none;
  width: 100%;
`

export const Chats = styled.div`
  flex: 1;
  background-color: ${(props) => props.theme.colors.color2};
  border-right: 1px solid lightgray;
  overflow-y: scroll;
`
