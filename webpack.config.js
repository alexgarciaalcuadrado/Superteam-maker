const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

const htmlPlugin = new HtmlWebPackPlugin({
    template: "src/index.html",
    filename: "./index.html"
   });

module.exports = {
    mode: 'development',
    entry:path.resolve(__dirname, "src/App"),
    module:{
        rules: [
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
                ],
            }
        ]
    },
    resolve: {
        alias: {
          react: path.resolve('./node_modules/react'),
        },
      },
    output: {
        filename: 'transformed.js',
        path: path.resolve(__dirname,'/build.js')
    },
    plugins:[htmlPlugin],
    devServer:{
        historyApiFallback: true
    }
}