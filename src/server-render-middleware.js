import '@babel/polyfill';
import url from 'url';
import path from 'path';
import React from 'react';
import { matchPath, StaticRouter } from 'react-router';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { ChunkExtractor } from '@loadable/server';
import { ServerStyleSheet } from 'styled-components';
import App from './App';
import Routes from './Routes';
import configureStore from './store/configureStore';
import rootSaga from './store/sagas';

import Html from './Html';
import { getInitialState } from './store/getInitialState';

export default ((req, res) => {
  const location = req.url;
  const { store } = configureStore(getInitialState(location), location);
  const context = {};
  const sheet = new ServerStyleSheet();

  store
    .runSaga(rootSaga)
    .toPromise()
    .then(() => {
      const body = renderToString(sheet.collectStyles(
        <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            <App route={Routes} />
          </StaticRouter>
        </Provider>,
      ));
      if (context.url) {
        res.redirect(context.url);
        return;
      }
      const styles = sheet.getStyleTags();
      const statsFile = path.resolve('./dist/loadable-stats.json');
      const chunkExtractor = new ChunkExtractor({ statsFile });
      const html = Html({
        styles, body, initialState: store.getState(), chunkExtractor,
      });
      if (location.includes('.css')) {
        res.sendFile(path.join(__dirname, location));
      } else {
        res.status(context.statusCode || 200).send(html);
      }
    })
    .catch((err) => {
      throw err;
    });

  const dataRequirements = [];
  Routes.routes.some((route) => {
    const { fetchData: fetchMethod } = route;
    const { query } = url.parse(location);
    const payload = (query) ? JSON.parse(`{"${query.replace(/&/g, '","').replace(/=/g, '":"')}"}`, (key, value) => (key === '' ? value : decodeURIComponent(value))) : '';
    const match = matchPath(
      url.parse(location).pathname,
      route,
    );

    if (match && fetchMethod) {
      dataRequirements.push(
        fetchMethod({
          dispatch: store.dispatch,
          match,
          payload,
        }),
      );
    }

    return Boolean(match);
  });

  return Promise.all(dataRequirements)
    .then(() => store.close())
    .catch((err) => {
      throw err;
    });
});
