import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './pages/main/Main';

const Routes = () => {
  return (
    <Router>
      {/* Aqui devem estar as rotas */}
      <Route path="/" exact component={Main} />
    </Router>
  );
};

export default Routes;
