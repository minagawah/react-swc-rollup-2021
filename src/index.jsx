import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import { CacheProvider, jsx } from '@emotion/react';
// import createCache from '@emotion/cache';

import { App } from './app';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
