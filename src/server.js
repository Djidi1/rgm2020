/* eslint-disable no-console */
import url from 'url';
import path from 'path';
import '@babel/polyfill';
import express from 'express';
import React from 'react';
import { matchPath, StaticRouter } from 'react-router';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { ServerStyleSheet } from 'styled-components';
import App from './App';
import Routes from './Routes';
import config from '../webpack.server';
import configureStore from './store/configureStore';
import rootSaga from './store/sagas';

import Html from './Html';
import { getInitialState } from './store/getInitialState';

const app = express();
const port = process.env.PORT || 3001;

const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { serverSideRender: true }));
app.use(webpackHotMiddleware(compiler));

app.use((req, res) => {
  console.log('req', req.url);
  const location = req.url;
  const { store } = configureStore(getInitialState(location), location);
  const context = {};
  const sheet = new ServerStyleSheet();

  store
    .runSaga(rootSaga)
    .toPromise()
    .then(() => {
      const appMarkup = renderToString(sheet.collectStyles(
        <StaticRouter location={req.url} context={context}>
          <Provider store={store}>
            <App route={Routes} />
          </Provider>
        </StaticRouter>,
      ));
      if (context.url) {
        res.redirect(context.url);
        return;
      }
      const styles = sheet.getStyleTags();
      const html = Html({ styles, body: appMarkup, initialState: store.getState() });
      if (location.includes('.css')) {
        res.sendFile(path.join(__dirname, location));
      } else {
        res.send(html);
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

app.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
  }
});
