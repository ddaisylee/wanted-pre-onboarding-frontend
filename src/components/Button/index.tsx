import { ReactNode } from 'react'
import * as S from './styles'

interface Props {
  children: ReactNode
  disabled?: boolean
}

const Button = ({ children, disabled }: Props) => (
  <S.Container>
    <S.Button disabled={disabled}>{children}</S.Button>
  </S.Container>
)

export default Button
