import React from 'react';

// Material UI Custom Theme
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import theme from './themes/Green';

import AppRouter from './routes';

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <AppRouter />
    </MuiThemeProvider>
  );
};

export default App;
