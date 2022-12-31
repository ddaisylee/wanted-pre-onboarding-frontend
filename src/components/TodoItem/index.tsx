import {
  FaRegCircle,
  FaRegCheckCircle,
  FaPen,
  FaTrash,
  FaCheck,
  FaTimes,
} from 'react-icons/fa'
import React, { useState } from 'react'
import * as S from './styles'
import { ITodo } from '../../types/todo'
import {
  getTodos,
  removeTodo,
  updateTodo,
  completeTodo,
} from '../../apis/todos'
import Input from '../Input'
import { useValidationCheck } from '../../hooks/useValidationCheck'
import { todoInputVlaueValidationCheck } from '../../utils'

interface Props extends ITodo {
  setTodos: React.Dispatch<React.SetStateAction<ITodo[] | undefined>>
}

const TodoItem = ({ id, todo, isCompleted, setTodos }: Props) => {
  const [value, isValueValid, handleValueChange, setValue] = useValidationCheck(
    todoInputVlaueValidationCheck,
  )
  const [isEdit, setIsEdit] = useState(false)

  const handleEdit = () => {
    setIsEdit(true)
    setValue(todo)
  }

  const handleUpdate = async () => {
    await updateTodo({ id, value, isCompleted })
    const getResponse = await getTodos()
    setTodos(() => getResponse)
    setIsEdit(() => false)
  }

  const handleDelete = async () => {
    await removeTodo(id)
    const getResponse = await getTodos()
    setTodos(() => getResponse)
  }

  const handleComplete = async () => {
    await completeTodo({ id, todo, isCompleted })
    const getResponse = await getTodos()
    setTodos(() => getResponse)
  }

  return (
    <S.TodoItemContainer>
      <S.IconContainer>
        {isCompleted ? (
          <FaRegCheckCircle onClick={handleComplete} />
        ) : (
          <FaRegCircle onClick={handleComplete} />
        )}
      </S.IconContainer>
      {isEdit ? (
        <Input onChange={handleValueChange} value={value} />
      ) : (
        <S.Content>{todo}</S.Content>
      )}
      <S.IconContainer>
        {isEdit ? (
          <FaCheck onClick={handleUpdate} />
        ) : (
          <FaPen onClick={handleEdit} />
        )}
      </S.IconContainer>
      <S.IconContainer>
        {isEdit ? (
          <FaTimes onClick={() => setIsEdit(false)} />
        ) : (
          <FaTrash onClick={handleDelete} />
        )}
      </S.IconContainer>
    </S.TodoItemContainer>
  )
}

export default TodoItem
