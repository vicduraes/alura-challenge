import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home/Home';
import Community from './pages/Community/Community';

export default () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/comunidade' component={Community} />
    </Switch>
  </Router>
);
