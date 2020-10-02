import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useTranslation } from 'react-i18next'

export interface FooterProps {
  [key: string]: any,
}

const footerCss = `
  text-align: center;
`

export const Footer = (props: FooterProps) => {
  const { t } = useTranslation(undefined, { useSuspense: false })

  return (
    <div css={css`${footerCss}`}>
      {t('All prices are in euros (€) including statutory sales tax and shipping costs')}.
    </div>
  )
}

export default Footer