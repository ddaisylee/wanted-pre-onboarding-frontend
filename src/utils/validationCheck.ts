export const emailValidationCheck = (email: string) => {
  return email.includes('@')
}

export const passwordValidationCheck = (password: string) => {
  return password.length >= 8
}
