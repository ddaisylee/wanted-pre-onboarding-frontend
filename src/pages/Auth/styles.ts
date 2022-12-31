import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 600px;
  overflow: hidden;
  border-radius: 24px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`

export const LeftBox = styled.img`
  background-color: ${({ theme }) => theme.color.secondary};
  width: 50%;
  height: 100%;
`
export const RightBox = styled.div`
  width: 60%;
  height: 100%;
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`
export const Title = styled.h1`
  position: absolute;
  top: 30px;
  left: 5px;
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`

export const Form = styled.form`
  position: absolute;
  bottom: 80px;
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  button {
    margin-top: 20px;
  }
`

export const Link = styled.div`
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.fontSize.xsmall};
  text-decoration: underline;
  cursor: pointer;
`
