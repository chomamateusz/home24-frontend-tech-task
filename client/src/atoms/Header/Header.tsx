import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useTranslation } from 'react-i18next'

export interface HeaderProps {
  [key: string]: any,
}

const headerInputCss = `
  float: right;
`

export const Header = (props: HeaderProps) => {
  const { ...otherProps } = props
  const { t } = useTranslation(undefined, { useSuspense: false })

  return (
    <React.Fragment>
      <strong>home24</strong>
      <input
        css={css`${headerInputCss}`}
        placeholder={t('Search')}
      />
    </React.Fragment>
  )
}

export default Header