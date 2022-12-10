import styled from 'styled-components'

export const TodoItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  margin-bottom: 10px;
`

export const Content = styled.li`
  flex-grow: 1;
  font-size: ${props => props.theme.fontSize.small};
  color: ${props => props.theme.color.text};
`

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 100%;
  > *:hover {
    opacity: 0.5;
  }
`
