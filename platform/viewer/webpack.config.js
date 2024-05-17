// module.exports = {
//   entry: './src/index.ts',
//   // output: {
//   //   path: path.join(__dirname, 'dist'),
//   //   filename: 'bundle.js',
//   // },
//   module: {
//     rules: [
//       { test: /\.(ts|tsx)$/, exclude: /node_modules/, loader: 'babel-loader' },
//     ],
//   },
//   // devtool: 'source-map',
// };

const path = require('path');

module.exports = {
  entry: './src/index.tsx',

  output: {
    path: path.join(__dirname, 'dist'),

    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,

        exclude: /node_modules/,

        use: {
          loader: 'babel-loader',

          // options: {
          //   presets: ['@babel/preset-env', '@babel/preset-typescript'],
          // },
        },
      },
    ],
  },

  devtool: 'source-map',
};
