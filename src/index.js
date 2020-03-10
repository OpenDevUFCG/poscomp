import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DefaultLayout from './layouts/default';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" render={(props) => <DefaultLayout {...props} />} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
