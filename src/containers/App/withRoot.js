import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
// import purple from '@material-ui/core/colors/purple';
// import green from '@material-ui/core/colors/green';

import { lightThemeConfig } from '../../constant/themes';

// A theme with custom primary and secondary color.
// It's optional.
const lightTheme = createMuiTheme(lightThemeConfig);

function withRoot(Component) {
  function WithRoot(props) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <MuiThemeProvider theme={lightTheme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return WithRoot;
}

export default withRoot;
