import { FaRegCircle, FaRegCheckCircle, FaPen, FaTrash } from 'react-icons/fa'
import * as S from './styles'
import { ITodo } from '../../types/todo'
import { getTodos, removeTodo } from '../../apis/todos'

// types에 정의되어 있는 인터페이스와 구분하기 위해 Props라는 별칭 사용
interface Props extends ITodo {
  setTodos: React.Dispatch<React.SetStateAction<ITodo[] | undefined>>
}

const TodoItem = ({ id, todo, isCompleted, setTodos }: Props) => {
  const handleDelete = () => {
    if (window.confirm('할일을 삭제하시겠습니까?')) {
      removeTodo(id)
        .then(() => getTodos())
        .then(data => {
          if (data) setTodos(data)
        })
    }
  }
  return (
    <S.TodoItemContainer>
      <S.IconContainer>
        {isCompleted ? <FaRegCheckCircle /> : <FaRegCircle />}
      </S.IconContainer>
      <S.Content>{todo}</S.Content>
      <S.IconContainer>
        <FaPen />
      </S.IconContainer>
      <S.IconContainer>
        <FaTrash onClick={() => handleDelete()} />
      </S.IconContainer>
    </S.TodoItemContainer>
  )
}

export default TodoItem
