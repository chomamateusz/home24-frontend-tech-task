import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useTranslation } from 'react-i18next';

import ArticleCard, { ArticleCardProps } from '../../atoms/ArticleCard/ArticleCard';

export interface ArticlesProps {
  [key: string]: any,
  categoryName: string,
  articleCount: number,
  articles: ArticleCardProps[],
}

const articlesCss = `
  display: grid;
  grid-gap: 26px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr) ) ;
`;

export const Articles = (props: ArticlesProps) => {
  const { categoryName, articleCount, articles } = props;
  const { t } = useTranslation(undefined, { useSuspense: false });

  return (
    <React.Fragment>
      {
        articles && articles.length ? (
          <h1>
            {categoryName}
            <small> ({articleCount})</small>
          </h1>
        ) : (
            `${t('Loading')}...`
          )
      }
      <div
        css={css`${articlesCss}`}
      >
        {
          articles && articles.map((article, i) => (
              <ArticleCard
                key={`${i}-${article.name}`}
                {...article} />
            ))
        }
      </div>
    </React.Fragment>
  );
};

export default Articles;
