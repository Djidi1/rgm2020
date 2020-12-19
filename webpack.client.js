module.exports = process.env.NODE_ENV === 'development'
  ? require('./webpack.dev.js')
  : require('./webpack.prod.js');
