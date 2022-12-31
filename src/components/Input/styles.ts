import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Text = styled.span`
  margin: 6px 0;
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`

export const Message = styled(Text)`
  color: ${({ theme }) => theme.color.error};
  font-size: ${({ theme }) => theme.fontSize.xsmall};
  height: 1px;
`

export const Input = styled.input.attrs(props => ({
  type: 'text',
}))`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  color: ${({ theme }) => theme.color.primary};
  :focus {
    box-shadow: 0 0 20px ${({ theme }) => theme.color.secondary};
  }
`
