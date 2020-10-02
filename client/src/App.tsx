import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import ProductListPage from './pages/ProductListPage';
import StyleProvider from './atoms/StyleProvider';

export const App = () => (
  <StyleProvider>
    <Router>
      <Switch>
        <Route path='/' exact={true} component={ProductListPage} />
        <Route path='/kategorie/:childCategoryName' component={ProductListPage} />
      </Switch>
    </Router>
  </StyleProvider>
);

export default App;
