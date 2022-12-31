import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
`

export const Button = styled.button`
  width: inherit;
  height: 40px;
  background-color: ${({ theme }) => theme.color.primary};
  border-width: 10px;
  border-radius: 4px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  color: ${({ theme }) => theme.color.white};
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
