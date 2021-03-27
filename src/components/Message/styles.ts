import styled, { css } from 'styled-components'

interface ITextProps {
  receiver: boolean
}

export const Container = styled.div``

const TextReceiver = css`
  background-color: #dcf8c6;
  margin-left: auto;
`

const MyText = css`
  background-color: #ffffff;
`

export const Text = styled.div<ITextProps>`
  position: relative;
  padding: 10px;
  width: fit-content;
  border-radius: 10px;
  margin-bottom: 30px;
  font-size: 0.9rem;
  ${(props) => (props.receiver ? TextReceiver : MyText)};
`
export const DateTime = styled.span`
  font-size: 0.7rem;
`

export const UserName = styled.span`
  font-size: 0.7rem;
`
