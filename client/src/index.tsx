import React from 'react';
import ReactDOM from 'react-dom';

import './i18n'

import ProductListPage from './pages/ProductListPage';

ReactDOM.render(
  <React.StrictMode>
    <ProductListPage />
  </React.StrictMode>,
  document.getElementById('root')
)
