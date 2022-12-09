import styled from 'styled-components'
import { Button } from '../../components/Button/styles'
import { Input } from '../../components/Input/styles'

export const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 600px;
  padding: 0 40px;
  gap: 20px;
  overflow: hidden;
  border-radius: 24px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: rgba(${props => props.theme.color.secondary}, 0.7);
`

export const TodoTitle = styled.h1`
  margin-top: 30px;
  text-align: center;
  color: ${props => props.theme.color.primary};
  font-size: ${props => props.theme.fontSize.xlarge};
  font-weight: ${props => props.theme.fontWeight.bold};
`

export const TodoInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`

export const TodoInput = styled(Input)``

export const TodoButton = styled(Button)`
  padding: 0 20px;
  text-align: center;
`

export const TodoList = styled.ul`
  width: 100%;
  height: 100%;
`
