import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './styles'
import { Button, Input } from '../../components'
import { useValidationCheck } from '../../hooks/useValidationCheck'
import {
  emailValidationCheck,
  passwordValidationCheck,
} from '../../utils/validationCheck'
import { axiosInstance, setAccessToken, getAccessToken } from '../../utils'
import { SIGNIN_URL, SIGNUP_URL } from '../../assets/constants'

const SignIn = () => {
  const [isSignInPage, setIsSignInPage] = useState(true)

  const navigate = useNavigate()
  const [email, isEmailValid, handleEmailChange] =
    useValidationCheck(emailValidationCheck)

  const [password, isPasswordValid, handlePasswordChange] = useValidationCheck(
    passwordValidationCheck,
  )

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const body = { email, password }
      const url = isSignInPage ? SIGNIN_URL : SIGNUP_URL
      const { data } = await axiosInstance.post(url, body)
      setAccessToken(data.access_token)

      if (isSignInPage) {
        alert('로그인에 성공했습니다.')
        navigate('/todo')
      } else {
        alert('회원가입에 성공했습니다')
        navigate('/todo')
      }
    } catch (error) {
      alert('로그인에 실패했습니다.')
    }
  }

  useEffect(() => {
    const accessToken = getAccessToken()
    if (accessToken) navigate('/todo')
    if (!accessToken) navigate('/')
  }, [navigate])

  return (
    <S.Container>
      <S.LeftBox src="/Img/pre-onboarding.png" />
      <S.RightBox>
        <S.Title>{isSignInPage ? 'Sign In' : 'Sign Up'}</S.Title>
        <S.Form onSubmit={e => handleSubmit(e)}>
          <Input
            type="Email"
            isValid={isEmailValid}
            value={email}
            message="올바른 이메일 형식을 입력해주세요."
            onChange={e => handleEmailChange(e)}
          />
          <Input
            type="Password"
            isValid={isPasswordValid}
            value={password}
            message="비밀번호는 8자 이상입니다."
            onChange={e => handlePasswordChange(e)}
          />
          <Button disabled={!isEmailValid || !isPasswordValid}>
            {isSignInPage ? 'Sign In' : 'Sign Up'}
          </Button>
          <S.Link onClick={() => setIsSignInPage(!isSignInPage)}>
            {isSignInPage ? 'Sign Up' : 'Sign In'}
          </S.Link>
        </S.Form>
      </S.RightBox>
    </S.Container>
  )
}

export default SignIn
