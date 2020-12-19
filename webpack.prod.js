/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { SourceMapDevToolPlugin } = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    app: './src/client.tsx',
    components: './src/components/index.ts',
  },
  resolve: {
    extensions: ['.tsx', '.jsx', '.ts', '.js'],
  },
  devServer: {
    contentBase: './dist',
    port: '8000',
    historyApiFallback: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new SourceMapDevToolPlugin({
      filename: '[file].map',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        enforce: 'pre',
        use: ['source-map-loader', 'babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]_[hash:base64:5]',
              },
            },
          },
          { loader: 'sass-loader', options: { sourceMap: true } },
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
};