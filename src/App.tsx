import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
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
            {route.routesHeader.map(({ fetchData, ...routeProps }) => (
              <Route key={routeProps.path} {...routeProps} />
            ))}
          </Switch>
          <Switch>
            {route.routes.map(({ fetchData, ...routeProps }) => (
              <Route key={routeProps.path} {...routeProps} />
            ))}
          </Switch>
        </ErrorBoundary>
        <Footer />
      </MainLayout>
    </div>
  );
};

export default App;
