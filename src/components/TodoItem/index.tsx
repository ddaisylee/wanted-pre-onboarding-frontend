import { FaRegCircle, FaRegCheckCircle, FaPen, FaTrash } from 'react-icons/fa'
import * as S from './styles'
import { ITodo } from '../../types/todo'

const TodoItem = ({ todo, isCompleted }: ITodo) => (
  <S.TodoItemContainer>
    <S.IconContainer>
      {isCompleted ? <FaRegCheckCircle /> : <FaRegCircle />}
    </S.IconContainer>
    <S.Content>{todo}</S.Content>
    <S.IconContainer>
      <FaPen />
    </S.IconContainer>
    <S.IconContainer>
      <FaTrash />
    </S.IconContainer>
  </S.TodoItemContainer>
)

export default TodoItem
