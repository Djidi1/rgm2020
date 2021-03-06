import path from 'path';
import express from 'express';
import '@babel/polyfill';
import compression from 'compression';
import serverRenderMiddleware from './server-render-middleware';

const app = express();

app
  .use(compression())
  .use(express.static(path.resolve(__dirname, '../dist')))
  .use(express.static(path.resolve(__dirname, '../static')));

app.get('/*', serverRenderMiddleware);

export { app };
