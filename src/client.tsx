import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import reducer from './store/reducers';
import App from './App';
import rootSaga from './store/sagas';
import Routes from './Routes';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware, logger),
);
sagaMiddleware.run(rootSaga);

render(
  <Provider store={store}>
    <BrowserRouter>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */ }
      {/* @ts-ignore */ }
      <App route={Routes} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
