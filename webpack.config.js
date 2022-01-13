const HtmlWebPackPlugin = require("html-webpack-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const path = require("path");

const appPath = path.resolve(__dirname, "src/App");

const htmlPlugin = new HtmlWebPackPlugin({
    template: "src/index.html",
    filename: "./index.html"
   });

module.exports = {
    target: 'web',
    mode: 'development',
    entry : appPath,
    module:{
        exprContextCritical: false,
        rules: [
            {
                test: /\.(jpe?g|gif|png|svg)$/i,
                use: [
                {
                  loader: 'url-loader',
                  options: {
                    limit: 10000
                  }
                }
              ]
            },
            {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  "style-loader",
                  "css-loader",
                  "sass-loader",
                ]
            }
        ]
    },
    resolve: {
        alias: {
          react: path.resolve('./node_modules/react'),
        }
      },
    output: {
        filename: 'transformed.js',
        path: path.resolve(__dirname,'/build.js')
    },
    plugins:[
      htmlPlugin,
      new NodePolyfillPlugin()
    ],
    devServer:{
        historyApiFallback: true
    }
}