var path = require('path')
//引用插件
var HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + "/src",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: path.join(__dirname, './src/*.js'),
        loader: 'babel-loader',
        query: {
          presets: ['es2015','babel-preset-stage-3']
        }
      }
    ]
  },
  plugins:[
    new HtmlwebpackPlugin({
      filename: 'index.html',
      template: './src/index.html' //html文件的模板
    })
  ]
}
