import { ChangeEvent, useCallback, useState } from 'react'

export const useValidationCheck: (
  callback: (value: string) => boolean,
) => [
  string,
  boolean,
  (event: ChangeEvent<HTMLInputElement>) => void,
] = validationCheckCallback => {
  const [value, setValue] = useState('')
  const [isValid, setIsValid] = useState(false)

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target
      setValue(value)

      // 유효성 검사 결과가 false일 경우
      if (!validationCheckCallback(value)) {
        setIsValid(false)
      }

      // 유효성 검사 결과가 true일 경우
      if (validationCheckCallback(value)) {
        setIsValid(true)
      }
    },
    [validationCheckCallback],
  )

  return [value, isValid, handleChange]
}
