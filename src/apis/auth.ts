import { SIGNUP_URL, SIGNIN_URL } from '../assets/constants'
import { axiosInstance, setAccessToken } from '../utils'

interface IAuth {
  email: string
  password: string
  isSignInPage: boolean
  onSuccess?: () => void
}

export const auth = async ({
  email,
  password,
  isSignInPage,
  onSuccess,
}: IAuth) => {
  const body = { email, password }
  const url = isSignInPage ? SIGNIN_URL : SIGNUP_URL
  try {
    const {
      data: { access_token: accessToken },
    } = await axiosInstance.post(url, body)
    if (accessToken) setAccessToken(accessToken)
    if (onSuccess) onSuccess()
  } catch (error) {
    alert('로그인에 실패했습니다.')
  }
}
