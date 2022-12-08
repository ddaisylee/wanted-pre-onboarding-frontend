import React from 'react'
import * as S from './styles'
import { Button, Input } from '../../components'
import { useValidationCheck } from '../../hooks/useValidationCheck'
import {
  emailValidationCheck,
  passwordValidationCheck,
} from '../../utils/validationCheck'

const SignIn = () => {
  const [email, isEmailValid, handleEmailChange] =
    useValidationCheck(emailValidationCheck)

  const [password, isPasswordValid, handlePasswordChange] = useValidationCheck(
    passwordValidationCheck,
  )

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(email, password)
  }

  return (
    <S.Container>
      <S.LeftBox src="/Img/pre-onboarding.png" />
      <S.RightBox>
        <S.Title>Sign In</S.Title>
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
          <Button type="Sign In" disabled={!isEmailValid || !isPasswordValid} />
          <S.Link>Sign Up</S.Link>
        </S.Form>
      </S.RightBox>
    </S.Container>
  )
}

export default SignIn
