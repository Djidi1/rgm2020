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

const Page = ({
  path, header, body, exact = false,
}) => (
  <>
    <Switch>
      <Route exact={exact} path={path} component={header} />
    </Switch>
    <Switch>
      <Route exact={exact} path={path} component={body} />
    </Switch>
  </>
);

export const App: FC<AppProps> = () => (
  <Router>
    <MainLayout>
      <ErrorBoundary>
        <Switch>
          <Page exact path="/" header={Header} body={Main} />
          <Page path="/film/:filmId" header={Details} body={Main} exact={false} />
          <Page path="/search/:searchQuery" header={Header} body={Main} />
          <Route path="*" component={Page404} />
        </Switch>
      </ErrorBoundary>
      <Footer />
    </MainLayout>
  </Router>
);

const hotReloadApp = hot(<App />);

export default hotReloadApp;
