import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import '../../styles/app.scss';

export default ({ component: C, props: cProps, ...rest }) => (
  <Route
    {...rest}
    render={props => (cProps.isAuthenticated ? <C {...props} {...cProps} /> : <Redirect to="/maintenance" />)}
  />
);
