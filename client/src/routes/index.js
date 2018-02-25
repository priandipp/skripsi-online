import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from '../components/Login';
// import Dashboard from '../components/Dashboard';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login} />
      {/* <Route path="/dashboard" exact component={Dashboard} /> */}
    </Switch>
  </BrowserRouter>
);
