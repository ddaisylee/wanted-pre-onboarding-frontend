import * as S from './styles'
import { Button, Input } from '../../components'

const SignIn = () => {
  return (
    <S.Container>
      <S.LeftBox src="/Img/pre-onboarding.png" />
      <S.RightBox>
        <S.Title>Sign In</S.Title>
        <S.Form>
          <Input type="Email" />
          <Input type="Password" />
          <Button type="Sign In" disabled />
          <S.Link>Sign Up</S.Link>
        </S.Form>
      </S.RightBox>
    </S.Container>
  )
}

export default SignIn
