import { hot } from 'react-hot-loader/root';
import React, { FC } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './styles.scss';

import {
  Footer,
  Details,
  Header,
  Main,
} from './components';

import {
  Page404,
} from './pages';

import MainLayout from './components/layouts/MainLayout';
import ErrorBoundary from './helpers/ErrorBaundery';

type AppProps = {
};

export const App: FC<AppProps> = () => (
  <Router>
    <MainLayout>
      <ErrorBoundary>
        <Switch>
          <Route path="/film/:filmId" component={Details} />
          <Route path="/film" component={Details} />
          <Route path="/" component={Header} />
        </Switch>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/film" component={Main} />
          <Route path="/search/:searchQuery" component={Main} />
          <Route path="/search" component={Main} />
          <Route path="*" component={Page404} />
        </Switch>
      </ErrorBoundary>
      <Footer />
    </MainLayout>
  </Router>
);

const hotReloadApp = hot(<App />);

export default hotReloadApp;
