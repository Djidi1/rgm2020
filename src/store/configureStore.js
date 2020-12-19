import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import sagaMonitor from '@redux-saga/simple-saga-monitor';
import { createMemoryHistory } from 'history';
import createRootReducer from './reducers';

export default function configureStore(initialState, url = '/') {
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
  const history = createMemoryHistory({ initialEntries: [url] });

  const store = createStore(
    createRootReducer(history),
    initialState,
    compose(
      applyMiddleware(routerMiddleware(history), sagaMiddleware),
    ),
  );

  // if (module.hot) {
  //   // Enable Webpack hot module replacement for reducers
  //   module.hot.accept('./reducers', () => {
  //     const nextRootReducer = require('./reducers').default;
  //     store.replaceReducer(nextRootReducer);
  //   });
  // }
  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);
  return { store, history };
}
