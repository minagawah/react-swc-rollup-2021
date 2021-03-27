import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import tw, { css } from 'twin.macro';

import { About } from './components/about';
import { Home } from './components/home';

// import './styles.css';

export const App = () => (
  <Switch>
    <Route path="/about" component={About} />
    <Route path="/" component={Home} />
  </Switch>
);
