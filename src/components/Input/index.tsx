import * as S from './styles'

interface Props {
  type: 'Email' | 'Password'
}

const Input = ({ type }: Props) => (
  <S.Container>
    <S.Text>{type}</S.Text>
    <S.Input placeholder="입력해주세요" />
  </S.Container>
)

export default Input
