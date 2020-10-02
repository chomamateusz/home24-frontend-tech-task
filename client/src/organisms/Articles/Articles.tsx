import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import ArticleCard, { ArticleCardProps } from '../../atoms/ArticleCard/ArticleCard'

export interface ArticlesProps {
  categoryName: string,
  articleCount: number,
  articles: ArticleCardProps[],
  [key: string]: any,
}

const articlesCss = `
  display: grid;
  grid-gap: 26px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr) ) ;
`

export const Articles = (props: ArticlesProps) => {
  const { categoryName, articleCount, articles, ...otherProps } = props

  return (
    <React.Fragment>
      {
        articles && articles.length ? (
          <h1>
            {categoryName}
            <small> ({articleCount})</small>
          </h1>
        ) : (
            'Loading...'
          )
      }
      <div
        css={css`${articlesCss}`}
      >
        {
          articles && articles.map((article, i) => {
            return (
              <ArticleCard
                key={`${i}-${article.name}`}
                {...article} />
            )
          })
        }
      </div>
    </React.Fragment>
  )
}

export default Articles