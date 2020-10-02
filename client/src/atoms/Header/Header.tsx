import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

export interface HeaderProps {
  [key: string]: any,
}

const headerInputCss = `
  float: right;
`

export const Header = (props: HeaderProps) => {
  const { ...otherProps } = props

  return (
    <React.Fragment>
      <strong>home24</strong>
      <input
        css={css`${headerInputCss}`}
        placeholder={'Suche'}
      />
    </React.Fragment>
  )
}

export default Header