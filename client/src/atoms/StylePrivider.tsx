import React from 'react'
import { css, Global } from '@emotion/core'

export interface StyleProviderProps {
  children: any,
  [key: string]: any,
}

const global = `
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
      'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export const StyleProvider = (props: StyleProviderProps) => {
  const { children } = props

  return (
    <React.Fragment>
      <Global
        styles={css`${global}`}
      />
      {
        children
      }
    </React.Fragment>
  )
}

export default StyleProvider