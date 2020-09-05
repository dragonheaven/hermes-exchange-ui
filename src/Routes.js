import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import AppliedRoute from './components/Routes/AppliedRoute';
import PageLoader from './components/Routes/PageLoader';

const AsyncExchange = Loadable({
  loader: () => import('./containers/Exchange'),
  loading: PageLoader
});

const AsyncNotFound = Loadable({
  loader: () => import('./containers/NotFound'),
  loading: PageLoader
});


export default ({ childProps }) => (
  <Switch>
    <AppliedRoute exact path="/" component={AsyncExchange} props={childProps} />
    <AppliedRoute exact path="/exchange" component={AsyncExchange} props={childProps} />
    <Route component={AsyncNotFound} />
  </Switch>
);
