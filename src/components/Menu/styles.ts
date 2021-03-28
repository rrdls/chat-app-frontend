import { theme } from './../../styles/theme'
import styled, { css } from 'styled-components'

import { AddCircle, PersonAdd, GroupAdd, Inbox } from '@material-ui/icons'

export const Container = styled.main`
  background-color: ${(props) => props.theme.colors.color1};
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Top = styled.div`
  flex: 0.1;
`
export const Middle = styled.div`
  flex: 0.8;
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding-top: 20px;
  width: 100%;
  align-items: center;
`
export const Bottom = styled.div`
  flex: 0.1;
  color: ${(props) => props.theme.colors.color4};
`

export const CustomAddCircle = styled(AddCircle)`
  cursor: pointer;
  path {
    fill: ${(props) => props.theme.colors.color4};
  }
`

export const CustomPersonAdd = styled(PersonAdd)`
  cursor: pointer;
  path {
    fill: ${(props) => props.theme.colors.color6};
  }
`

export const CustomGroupAdd = styled(GroupAdd)`
  cursor: pointer;
  path {
    fill: ${(props) => props.theme.colors.color6};
  }
`

export const CustomInbox = styled(Inbox)`
  cursor: pointer;
  path {
    fill: ${(props) => props.theme.colors.color6};
  }
`
