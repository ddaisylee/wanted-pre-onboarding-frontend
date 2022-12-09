import { useEffect, useState } from 'react'
import * as S from './styles'
import { TodoItem } from '../../components'
import { getTodos } from '../../apis/todos'
import { ITodo } from '../../types/todo'

const Todo = () => {
  const [todos, setTodos] = useState<ITodo[] | undefined>([])

  useEffect(() => {
    getTodos().then(data => setTodos(data))
  }, [])

  return (
    <S.TodoContainer>
      <S.TodoTitle>ToDo List</S.TodoTitle>
      <S.TodoInputContainer>
        <S.TodoInput placeholder="할 일을 입력하세요." />
        <S.TodoButton>Add</S.TodoButton>
      </S.TodoInputContainer>
      <S.TodoList>
        {todos?.map(todo => (
          <TodoItem
            id={todo.id}
            key={todo.id}
            todo={todo.todo}
            isCompleted={todo.isCompleted}
            setTodos={setTodos}
          />
        ))}
      </S.TodoList>
    </S.TodoContainer>
  )
}

export default Todo
