const path = require('path')
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'production',
  entry: ["./index.ts"],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    modules: [path.resolve("node_modules"), path.resolve("src")]
  },
  externals: [nodeExternals()],
  output: {
    filename: 'mariobrusarosco-react-design-system.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
        root: 'mariobrusarosco-react-design-system',
        commonjs: 'reactDesignSystem',
      },
    libraryTarget: 'umd'
  },
  module: {
    rules: [
     {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.ts(x)?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      { 
        test: /\.css$/,
        use: ['style-loader', 'css-loader',],
        include: path.resolve(__dirname, './src')
      }
    ]
  }
}