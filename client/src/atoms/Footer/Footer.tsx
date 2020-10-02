import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

export interface FooterProps {
  [key: string]: any,
}

const footerCss = `
  text-align: center;
`

export const Footer = (props: FooterProps) => {
  return (
    <div css={css`${footerCss}`}>
      Alle Preise sind in Euro (€) inkl. gesetzlicher Umsatzsteuer und Versandkosten.
    </div>
  )
}

export default Footer