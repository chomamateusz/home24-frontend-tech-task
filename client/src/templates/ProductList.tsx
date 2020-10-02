import React from 'react';

import './ProductList.css';
import Sidebar from '../organisms/Sidebar';
import Header from '../atoms/Header';
import Footer from '../atoms/Footer';
import Articles from '../organisms/Articles';

import { Category } from '../types';

export interface ArticleListProps {
  categories: Category[]
}

export const ArticleList = (props: ArticleListProps) => {
  const { categories, ...otherProps } = props

  return (
    <div
      className={'page'}
      {...otherProps}
    >
      <div className={'header'}>
        <Header />
      </div>

      <div className={'sidebar'}>
        <Sidebar items={categories[0] && categories[0].childrenCategories} />
      </div>

      <div className={'content'}>
        <Articles
          categoryName={categories[0]?.name}
          articleCount={categories[0]?.articleCount}
          articles={categories[0]?.categoryArticles.articles}
        />
      </div>

      <div className={'footer'}>
        <Footer />
      </div>
    </div>
  );
}

export default ArticleList;
