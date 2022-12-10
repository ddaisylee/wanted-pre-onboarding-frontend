/* eslint-disable consistent-return */
import { axiosInstance, getAccessToken } from '../utils'
import { ITodo } from '../types/todo'

const accessToken = getAccessToken()

export const getTodos = async (): Promise<ITodo[] | undefined> => {
  try {
    const { data } = await axiosInstance.get('/todos', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
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
        Authorization: `Bearer ${accessToken}`,
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
        Authorization: `Bearer ${accessToken}`,
      },
    })
  } catch (error) {
    alert('할 일을 추가하지 못했습니다.')
  }
}
