import { ChangeEvent, useState } from 'react'

export const useValidationCheck: (
  callback: (value: string) => boolean,
) => [
  string,
  boolean,
  (event: ChangeEvent<HTMLInputElement>) => void,
  React.Dispatch<React.SetStateAction<string>>,
] = validationCheckCallback => {
  const [value, setValue] = useState('')
  const [isValid, setIsValid] = useState(false)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event
    setValue(value)

    if (!validationCheckCallback(value)) {
      setIsValid(false)
    }

    if (validationCheckCallback(value)) {
      setIsValid(true)
    }
  }

  return [value, isValid, handleChange, setValue]
}
