import React, { FC } from 'react';
import { Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import './css/styles.scss';
import { Footer } from './components';
import MainLayout from './components/layouts/MainLayout';
import ErrorBoundary from './helpers/ErrorBaundery';

type AppProps = {
  route: {
    routes: []
    routesHeader: []
  }
};

const App: FC<AppProps> = ({ route }) => {
  return (
    <div className="app">
      <MainLayout>
        <ErrorBoundary>
          <Switch>
            {renderRoutes(route.routesHeader)}
          </Switch>
          <Switch>
            {renderRoutes(route.routes)}
          </Switch>
        </ErrorBoundary>
        <Footer />
      </MainLayout>
    </div>
  );
};

export default App;
