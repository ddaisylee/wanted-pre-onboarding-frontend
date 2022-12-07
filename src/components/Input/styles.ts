import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Text = styled.span`
  margin-bottom: 6px;
  color: ${props => props.theme.color.text};
  font-size: ${props => props.theme.fontSize.small};
  font-weight: ${props => props.theme.fontWeight.bold};
`

export const Input = styled.input.attrs(props => ({
  placehoder: props.placeholder,
}))`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  color: ${props => props.theme.color.primary};
`
