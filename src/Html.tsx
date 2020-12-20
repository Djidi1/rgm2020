const Html = ({
  body, initialState = {}, styles, chunkExtractor,
}) => {
  const scriptTags = chunkExtractor.getScriptTags();
  return (`
  <!doctype html>
  <html>
  <head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Server Side Rendered React App!!</title>
    ${styles}
    <link rel="stylesheet" type="text/css" href="/style.css">
  </head>
  <body>
  <div id="mount">
    ${body}
  </div>
  <script>window.APP_STATE=${JSON.stringify(initialState)}</script>
  ${scriptTags}
  <script type="module" src="/main.js"></script>
  </body>
  </html>
`);
};

export default Html;
