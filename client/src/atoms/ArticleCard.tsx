import React from 'react'

import formatter from '../utils/formatter'

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

export const ArticleCard = (props: ArticleCardProps) => {
  const { images, name, prices, ...otherProps } = props

  return (
    <div className={'article'}>
      <img src={images[0].path} />
      <div>{name}</div>
      <div>{formatter.format(prices.regular.value / 100)}</div>
      <section role="button">Add to cart</section>
    </div>
  )
}

export default ArticleCard