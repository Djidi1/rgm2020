/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const LoadablePlugin = require('@loadable/webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  // entry: ['webpack-hot-middleware/client?reload=true', path.join(__dirname, './src/server')],
  entry: [path.join(__dirname, '../src/server')],
  externals: [nodeExternals({ allowlist: [/\.(?!(?:tsx?|json)$).{1,5}$/i] })],
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'main.js',
    publicPath: '/static/',
    globalObject: 'this',
  },
  resolve: {
    extensions: ['.tsx', '.jsx', '.ts', '.js'],
    fallback: { path: require.resolve('path-browserify') },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { modules: false }], '@babel/react'],
          },
        },
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { modules: false }], '@babel/react'],
          },
        },
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
      chunkFilename: '[name].css',
    }),
    new LoadablePlugin(),
  ],
};
