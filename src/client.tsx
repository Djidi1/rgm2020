// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import * as React from 'react';
import { hydrate } from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider as ReduxProvider } from 'react-redux';
import { loadableReady } from '@loadable/component';

import App from './App';
import configureStore from './store/configureStore';
import Routes from './Routes';

const { store, history } = configureStore(window.APP_STATE);

// global redeclared types
declare global {
  interface Window {
    APP_STATE;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  }
}

loadableReady(() => {
  hydrate(
    <ReduxProvider store={store}>
      <ConnectedRouter history={history}>
        <App route={Routes} />
      </ConnectedRouter>
    </ReduxProvider>,
    document.getElementById('mount'),
  );
});
