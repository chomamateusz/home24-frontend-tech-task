import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import Sidebar from '../organisms/Sidebar';
import Header from '../atoms/Header/Header';
import Footer from '../atoms/Footer/Footer';
import Articles from '../organisms/Articles/Articles';

import { Category } from '../api/categories';

export interface ArticleListProps {
  categories: Category[],
}

const pageCss = `
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 160px auto auto;
  grid-template-areas:
    'header header header'
    'sidebar content content'
    'footer footer footer';
  margin: 6px;
`;

const pageItemCss = `
  padding: 10px;
`;

const headerCss = `
  grid-area: header;
  background-color: lightblue;
`;

const sidebarCss = `
  grid-area: sidebar;
  background-color: lavender;
`;
const contentCss = `
  grid-area: content;
  grid-column: span 2;
`;
const footerCss = `
  grid-area: footer;
  background-color: lightblue;
`;

export const ArticleList = (props: ArticleListProps) => {
  const { categories, ...otherProps } = props;

  return (
    <div
      css={css`${pageCss}`}
      {...otherProps}
    >
      <div
        css={css`
          ${pageItemCss}
          ${headerCss}
        `}
      >
        <Header />
      </div>

      <div
        css={css`
          ${pageItemCss}
          ${sidebarCss}
        `}
      >
        <Sidebar items={categories[0] && categories[0].childrenCategories} />
      </div>

      <div
        css={css`
          ${pageItemCss}
          ${contentCss}
        `}
      >
        <Articles
          categoryName={categories[0]?.name}
          articleCount={categories[0]?.articleCount}
          articles={categories[0]?.categoryArticles.articles}
        />
      </div>

      <div
        css={css`
          ${pageItemCss}
          ${footerCss}
        `}
      >
        <Footer />
      </div>
    </div>
  );
};

export default ArticleList;
