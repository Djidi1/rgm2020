const Html = ({ body, initialState, styles }) => (`
  <!doctype html>
  <html>
  <head>
    <meta charSet="UTF-8" />
    <title>Server Side Rendered React App!!</title>
    ${styles}
  </head>
  <body>
  ${body}
  <script>window.APP_STATE=${JSON.stringify(initialState)}</script>
  </body>
  </html>
`);

export default Html;
