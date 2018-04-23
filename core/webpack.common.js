const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  plugins: [
  ],
  output: {
    path: path.resolve(__dirname, 'build' + '/' + process.env.PLATFORM),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.(frag|vert)$/i,
        use: {
          loader: 'raw-loader'
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            compact: true
          }
        }
      }
    ]
  }
}
