/* eslint-disable consistent-return */
import { axiosInstance, getAccessToken } from '../utils'
import { ITodo } from '../types/todo'

export const getTodos = async (): Promise<ITodo[] | undefined> => {
  try {
    const { data } = await axiosInstance.get('/todos', {
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
      },
    })
    return data
  } catch (error) {
    alert('할 일을 불러오지 못했습니다.')
  }
}

export const removeTodo = async (id: number | undefined): Promise<void> => {
  try {
    await axiosInstance.delete(`todos/${id}`, {
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
      },
    })
  } catch (error) {
    alert('할 일을 삭제하지 못했습니다.')
  }
}

export const addTodo = async (newTodo: string): Promise<void> => {
  const body = { todo: newTodo }
  try {
    await axiosInstance.post('/todos', body, {
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
      },
    })
  } catch (error) {
    alert('할 일을 추가하지 못했습니다.')
  }
}

export const updateTodo = async ({
  id,
  value,
  isCompleted,
}: {
  id: number
  value: string
  isCompleted: boolean
}): Promise<void> => {
  const body = { todo: value, isCompleted }
  try {
    await axiosInstance.put(`/todos/${id}`, body, {
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    alert('할 일을 수정하지 못했습니다.')
  }
}

export const completeTodo = async ({
  id,
  todo,
  isCompleted,
}: {
  id: number
  todo: string
  isCompleted: boolean
}): Promise<void> => {
  const body = { todo, isCompleted: !isCompleted }
  try {
    await axiosInstance.put(`/todos/${id}`, body, {
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    alert('할 일을 완료하지 못했습니다.')
  }
}
