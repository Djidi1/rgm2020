import React from 'react';
import { render } from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import reducer from './store/reducers';
import hotReloadApp from './App';
import rootSaga from './store/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware, logger),
);
sagaMiddleware.run(rootSaga);

render(
  <Provider store={store}>
    {hotReloadApp}
  </Provider>,
  document.getElementById('root'),
);
