import * as S from './styles'

interface Props {
  type?: 'Sign In' | 'Sign Up'
  disabled?: boolean
}

const Button = ({ type, disabled }: Props) => (
  <S.Container>
    <S.Button disabled={disabled}>{type}</S.Button>
  </S.Container>
)

export default Button
