/* eslint-disable no-console */
import '@babel/polyfill';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import express from 'express';
import React from 'react';
import { StaticRouter } from 'react-router';
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
  const sheet = new ServerStyleSheet();

  store
    .runSaga(rootSaga)
    .toPromise()
    .then(() => {
      console.log('sagas complete');
      // const appMarkup = renderToString(sheet.collectStyles(
      //   <StaticRouter location={req.url} context={{}}>
      //     <Provider store={store}>
      //       <App route={Routes} />
      //     </Provider>
      //   </StaticRouter>,
      // ));
      // const styles = sheet.getStyleTags();
      // const html = Html({ styles, body: appMarkup, initialState: store.getState() });

      store.close();
      res.send('html');
      // res.send(html);
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).send(e.message);
    });
/*
  // Note that req.url here should be the full URL path from
  // the original request, including the query string.
  const { path: { component: Component } } = matchPath(req.url, routes);

  // match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
  //   if (error) {
  //     res.status(500).send(error.message);
  //   } else if (redirectLocation) {
  //     res.redirect(302, redirectLocation.pathname + redirectLocation.search);
  //   } else if (renderProps && renderProps.components) {
  const rootComp = <Root store={store} routes={routes}><Component /></Root>;

  store.runSaga(rootSaga).toPromise().then(() => {
    console.log('sagas complete');
    res.status(200).send(
      layout(
        renderToString(rootComp),
        JSON.stringify(store.getState()),
      ),
    );
  }).catch((e) => {
    console.log(e.message);
    res.status(500).send(e.message);
  });

  renderToString(rootComp);
  store.close();

  // res.status(200).send(layout('','{}'))
  //   } else {
  //     res.status(404).send('Not found');
  //   }
  // });

  */
});

app.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
  }
});
