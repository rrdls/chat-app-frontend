import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding: 20px;
  cursor: pointer;
  border-bottom: 1px solid #f6f6f6;
  &:hover {
    background-color: #f6f6f6;
  }
`

export const Info = styled.div`
  margin-left: 15px;
`

export const Name = styled.h2`
  font-size: 1.6rem;
  margin-bottom: 8px;
`

export const LastMessage = styled.p`
  font-size: 1.2rem;
`
