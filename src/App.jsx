import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Material UI Custom Theme
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './themes/Blue';

// Layout
import Layout from './components/Layout';
import HeaderBar from './components/Layout/HeaderBar';
import FeatureBar from './components/Layout/FeatureBar';
import FeatureBarTabs from './components/Layout/FeatureBarTabs';
import MainContainer from './components/Layout/MainContainer';

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Layout>
        <HeaderBar />
        <FeatureBar title="Authentication" />
        <FeatureBarTabs />
        <MainContainer>
          <h1>Content</h1>
        </MainContainer>
      </Layout>
    </MuiThemeProvider>
  );
};

export default App;
