import React from 'react';
import { Route } from 'react-router-dom';

import '../../styles/style.scss';

export default ({ component: C, props: cProps, ...rest }) => (
  <Route {...rest} render={props => <C {...props} {...cProps} />} />
);
