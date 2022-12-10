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
import { getTodos, removeTodo, updateTodo } from '../../apis/todos'
import Input from '../Input'

// types에 정의되어 있는 인터페이스와 구분하기 위해 Props라는 별칭 사용
interface Props extends ITodo {
  setTodos: React.Dispatch<React.SetStateAction<ITodo[] | undefined>>
}

const TodoItem = ({ id, todo, isCompleted, setTodos }: Props) => {
  const [isEdit, setIsEdit] = useState(false)
  const [updatedTodo, setUpdateTodo] = useState('')

  const handleEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdateTodo(e.target.value)
  }

  const handleUpdate = () => {
    if (window.confirm('할 일을 수정하시겠습니까?')) {
      updateTodo({ id, updatedTodo, isCompleted })
        .then(() => getTodos())
        .then(data => {
          if (data) setTodos(data)
          setIsEdit(false)
        })
    }
  }

  const handleDelete = () => {
    if (window.confirm('할 일을 삭제하시겠습니까?')) {
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
      {isEdit ? (
        <Input onChange={e => handleEdit(e)} />
      ) : (
        <S.Content>{todo}</S.Content>
      )}
      <S.IconContainer>
        {isEdit ? (
          <FaCheck onClick={() => handleUpdate()} />
        ) : (
          <FaPen onClick={() => setIsEdit(true)} />
        )}
      </S.IconContainer>
      <S.IconContainer>
        {isEdit ? (
          <FaTimes onClick={() => setIsEdit(false)} />
        ) : (
          <FaTrash onClick={() => handleDelete()} />
        )}
      </S.IconContainer>
    </S.TodoItemContainer>
  )
}

export default TodoItem
