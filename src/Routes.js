import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import { isMobile, isBrowser } from 'react-device-detect';

import AppliedRoute from './components/Routes/AppliedRoute';
import PageLoader from './components/Routes/PageLoader';

const AsyncExchange = Loadable({
  loader: () => import('./containers/Exchange'),
  loading: PageLoader
});

const AsyncMobileExchange = Loadable({
  loader: () => import('./containers/MobileExchange'),
  loading: PageLoader
});

const AsyncNotFound = Loadable({
  loader: () => import('./containers/NotFound'),
  loading: PageLoader
});

export default ({ childProps }) => (
  <Switch>
    {isBrowser && (
      <>
        <AppliedRoute exact path="/" component={AsyncExchange} props={childProps} />
        <AppliedRoute exact path="/exchange" component={AsyncExchange} props={childProps} />
      </>
    )}
    {isMobile && (
      <>
        <AppliedRoute exact path="/" component={AsyncMobileExchange} props={childProps} />
        <AppliedRoute exact path="/exchange" component={AsyncMobileExchange} props={childProps} />
      </>
    )}
    <Route component={AsyncNotFound} />;
  </Switch>
);
