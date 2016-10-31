import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Layout from './components/Layout'

render(
  <Layout/>,
  document.getElementById('root')
)
