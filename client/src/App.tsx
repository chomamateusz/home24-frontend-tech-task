import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import ProductListPage from './pages/ProductListPage';

export const App = () => (
    <Router>
      <Switch>
        <Route path='/' exact={true} component={ProductListPage} />
        <Route path='/kategorie/:childCategoryName' component={ProductListPage} />
      </Switch>
    </Router>
  );

export default App;
