import React, { useEffect, useState } from 'react'
import * as S from './styles'
import { TodoItem } from '../../components'
import { addTodo, getTodos } from '../../apis/todos'
import { ITodo } from '../../types/todo'

const Todo = () => {
  const [todos, setTodos] = useState<ITodo[] | undefined>([])
  const [newTodo, setNewTodo] = useState<string>('')

  useEffect(() => {
    getTodos().then(data => setTodos(data))
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value)
    console.log(newTodo)
  }

  const handleClick = () => {
    if (!newTodo.length) {
      alert('할 일을 추가해주세요.')
    } else if (window.confirm('할 일을 추가하시겠습니까?')) {
      addTodo(newTodo)
        .then(() => getTodos())
        .then(data => setTodos(data))
    }
    setNewTodo('')
  }

  return (
    <S.TodoContainer>
      <S.TodoTitle>ToDo List</S.TodoTitle>
      <S.TodoInputContainer>
        <S.TodoInput
          placeholder="할 일을 입력하세요."
          value={newTodo}
          onChange={e => handleChange(e)}
        />
        <S.TodoButton onClick={() => handleClick()}>Add</S.TodoButton>
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
