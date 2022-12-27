import React, { useEffect, useState } from 'react'
import * as S from './styles'
import { TodoItem } from '../../components'
import { addTodo, getTodos } from '../../apis/todos'
import { ITodo } from '../../types/todo'

const Todo = () => {
  const [todos, setTodos] = useState<ITodo[] | undefined>([])
  const [newTodo, setNewTodo] = useState<string>('')

  useEffect(() => {
    const renderTodos = async () => {
      const getResponse = await getTodos()
      setTodos(() => getResponse)
    }
    renderTodos()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value)
  }

  const handleClick = async () => {
    if (!newTodo.length) {
      window.alert('할 일을 입력해주세요.')
    }

    if (newTodo.length) {
      await addTodo(newTodo)
      const getResponse = await getTodos()
      setTodos(() => getResponse)
    }
  }

  return (
    <S.TodoContainer>
      <S.TodoTitle>ToDo List</S.TodoTitle>
      <S.TodoInputContainer>
        <S.TodoInput
          placeholder="할 일을 입력하세요."
          value={newTodo}
          onChange={handleChange}
        />
        <S.TodoButton onClick={handleClick}>Add</S.TodoButton>
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
