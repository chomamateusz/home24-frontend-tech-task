import React from 'react'

import ArticleCard, { ArticleCardProps } from '../atoms/ArticleCard'

export interface ArticlesProps {
  categoryName: string,
  articleCount: number,
  articles: ArticleCardProps[],
  [key: string]: any,
}

export const Articles = (props: ArticlesProps) => {
  const { categoryName, articleCount, articles, ...otherProps } = props

  return (
    <>
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
      <div className={'articles'}>
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
    </>
  )
}

export default Articles