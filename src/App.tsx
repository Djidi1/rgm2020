import { hot } from 'react-hot-loader/root';
import React, { FC } from 'react'; // we need this to make JSX compile
import './styles.scss';

import {
  Footer,
  Details,
  // Header,
  Main,
} from './components';

import MainLayout from './components/layouts/MainLayout';
import ErrorBoundary from './helpers/ErrorBaundery';

type AppProps = {
};

export const App: FC<AppProps> = () => (
  <MainLayout>
    {/* <Header /> */}
    <Details />
    <ErrorBoundary>
      <Main />
    </ErrorBoundary>
    <Footer />
  </MainLayout>
);

const hotReloadApp = hot(<App />);

export default hotReloadApp;
