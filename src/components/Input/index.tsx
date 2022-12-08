import * as S from './styles'

interface Props {
  type: 'Email' | 'Password'
  value: string
  isValid: boolean
  message: string
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => void | React.Dispatch<React.SetStateAction<string>>
}

const Input = ({ type, value, isValid, message, onChange }: Props) => (
  <S.Container>
    <S.Text>{type}</S.Text>
    <S.Input onChange={e => onChange(e)} value={value} />
    {isValid || (value && <S.Message>{message}</S.Message>)}
  </S.Container>
)

export default Input
