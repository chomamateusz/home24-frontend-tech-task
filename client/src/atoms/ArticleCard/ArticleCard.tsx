import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useTranslation } from 'react-i18next'

import formatter from '../../utils/formatter'

type Image = {
  path: string
}

type Prices = {
  currency: string
  regular: {
    value: number
  }
}

export interface ArticleCardProps {
  name: string,
  variantName: string,
  prices: Prices,
  images: Image[],
  [key: string]: any,
}

const articleCss = `
  border: 1px solid lavenderblush;
  padding: 10px;
`

const articleItem = `
  display: inline-block;
  padding: 4px 0;
  margin: 4px 0;
  width: 100%;
`

const articleButton = `
  display: block;    
  padding: .2em;
  background-color: lightgoldenrodyellow;
  border: 1px solid lightgray;
  cursor: pointer;
  text-align: center;
`

export const ArticleCard = (props: ArticleCardProps) => {
  const { images, name, prices } = props
  const { t } = useTranslation(undefined, { useSuspense: false })

  return (
    <div
      css={css`${articleCss}`}
    >
      <img
        css={css`${articleItem}`}
        src={images[0].path}
      />
      <div
        css={css`${articleItem}`}
      >
        {name}
      </div>
      <div
        css={css`${articleItem}`}
      >
        {formatter.format(prices.regular.value / 100)}
      </div>
      <a
        css={css`
          ${articleItem}
          ${articleButton}
        `}
      >
        {t('Add to cart')}
      </a>
    </div>
  )
}

export default ArticleCard