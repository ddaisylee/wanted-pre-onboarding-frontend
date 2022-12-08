export const setAccessToken = (accessToken: string) => {
  const ACCESS_TOKEN = accessToken
  localStorage.setItem('ACCESS_TOKEN', ACCESS_TOKEN)
}

export const getAccessToken = (): string | null => {
  const token = localStorage.getItem('ACCESS_TOKEN')
  return token
}
