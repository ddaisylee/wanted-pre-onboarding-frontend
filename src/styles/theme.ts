const fontSize = {
  xsmall: '12px',
  small: '15px',
  middle: '20px',
  large: '25px',
  xlarge: '35px',
}

const fontWeight = {
  thin: 300,
  regular: 400,
  bold: 600,
}

const color = {
  primary: '#9844E8',
  secondary: '#EBE4F9',
  border: '#e1e2e3',
  text: '#373737',
  white: '#fff',
  error: '#ff3f3f',
}

export type FontSizeTypes = typeof fontSize
export type FontWeightTypes = typeof fontWeight
export type ColorTypes = typeof color

const theme = {
  fontSize,
  fontWeight,
  color,
}

export default theme
