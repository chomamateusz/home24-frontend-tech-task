import React from 'react'

export interface FooterProps {
  [key: string]: any,
}

export const Footer = (props: FooterProps) => {
  const { ...otherProps } = props

  return (
    <>
      Alle Preise sind in Euro (€) inkl. gesetzlicher Umsatzsteuer und Versandkosten.
    </>
  )
}

export default Footer