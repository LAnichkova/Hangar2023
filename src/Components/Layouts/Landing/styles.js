import styled from 'styled-components'
import themeGet from '@styled-system/theme-get'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background-color: ${themeGet('colors.bg.default')};
`