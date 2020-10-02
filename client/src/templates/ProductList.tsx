import React from 'react';

import { Category, Article } from '../types';
import './ProductList.css';
import Sidebar from '../organisms/Sidebar';
import Header from '../atoms/Header';
import Footer from '../atoms/Footer';
import Articles from '../organisms/Articles';

type State = {
  categories: Category[];
};

class ArticleList extends React.Component {
  state: State = {
    categories: [],
  };

  componentDidMount() {
    var xhr = new XMLHttpRequest();

    xhr.open('POST', '/graphql');
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.send(JSON.stringify({
      query: `{
        categories(ids: "156126", locale: de_DE) {
          name
          articleCount
          childrenCategories {
            name
            urlPath
          }
          categoryArticles(first: 50) {
            articles {
              name
              variantName
              prices {
                currency
                regular {
                  value
                }
              }
              images(
                format: WEBP
                maxWidth: 200
                maxHeight: 200
                limit: 1
              ) {
                path
              }
            }
          }
        }
      }`,
    }));

    xhr.onload = () => {
      if (xhr.status === 200) {
        var response = JSON.parse(xhr.response);

        this.setState({ categories: response.data.categories });
      }
    }
  }

  render() {
    return (
      <div className={'page'}>
        <div className={'header'}>
          <Header />
        </div>

        <div className={'sidebar'}>
          <Sidebar items={this.state.categories[0] && this.state.categories[0].childrenCategories} />
        </div>

        <div className={'content'}>
          <Articles 
            categoryName={this.state.categories[0]?.name}
            articleCount={this.state.categories[0]?.articleCount}
            articles={this.state.categories[0]?.categoryArticles.articles}
          />
        </div>

        <div className={'footer'}>
          <Footer />
        </div>
      </div>
    );
  }
}

var PLP = () => {
  return <ArticleList />;
};

export default PLP;
