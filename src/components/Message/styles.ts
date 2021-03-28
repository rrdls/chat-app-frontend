import styled, { css } from 'styled-components'

interface ITextProps {
  receiver: boolean
}

export const Container = styled.div``

const TextReceiver = css`
  background-color: #ffffff;
  border: 1px solid lightgray;
  border-radius: 15px 15px 15px 0px;
`

const MyText = css`
  background-color: ${(props) => props.theme.colors.color4};
  color: ${(props) => props.theme.colors.color2};
  margin-left: auto;
  border-radius: 15px 15px 0px 15px;
`

export const Text = styled.div<ITextProps>`
  position: relative;
  padding: 10px 15px;
  width: fit-content;
  margin-bottom: 30px;
  font-size: 0.9rem;
  display: flex;
  gap: 10px;
  align-items: center;
  ${(props) => (props.receiver ? TextReceiver : MyText)};
`
export const DateTime = styled.span`
  font-size: 0.7rem;
`

export const UserName = styled.span`
  font-size: 0.7rem;
`
