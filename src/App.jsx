import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Material UI Custom Theme
import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './themes/Blue';

// Layout
// import Layout from './components/Layout';

// Atoms
import MainContainer from './components/Atoms/MainContainer';

// Layout
import HeaderBar from './components/Layout/HeaderBar';
import FeatureBar from './components/Layout/FeatureBar';
import FeatureBarTabs from './components/Layout/FeatureBarTabs';

import PaperBase from './components/paperbase/Paperbase';

const Home = () => <div>Home</div>;

const App = () => {
  console.log(theme);
  return (
    <MuiThemeProvider theme={theme}>
      <>
        <CssBaseline />
        <HeaderBar />
        <FeatureBar title="Authentication" />
        <FeatureBarTabs />
        <PaperBase />
      </>
    </MuiThemeProvider>
  );
};

export default App;
