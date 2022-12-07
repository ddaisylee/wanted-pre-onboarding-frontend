const calRem = (size: number): string => `${size / 16}rem`

const fontSize = {
  small: calRem(11),
  middle: calRem(13),
  large: calRem(15),
}

const fontWeight = {
  thin: 300,
  regular: 400,
  bold: 500,
}

const color = {
  primary: '#36f',
  border: '#e1e2e3',
  text: '#373737',
  checked: '#438BFF',
  unchecked: '#888',
  white: '#fff',
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
