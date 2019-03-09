const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const GLOBALS = {
    "process.env": {
        NODE_ENV: JSON.stringify("development"),
    },
};

module.exports = {
    mode: "development",
    entry: ["webpack-hot-middleware/client?reload=true", path.resolve(__dirname, "src/index")],
    devtool: "inline-source-map",
    target: "web",
    output: {
        path: path.join(__dirname, "/dist"),
        publicPath: "/",
        filename: "bundle.js",
    },
    devServer: {
        contentBase: path.resolve(__dirname, "src"),
    },
    plugins: [
        new ExtractTextPlugin({ filename: "styles.css", allChunks: true }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin(GLOBALS),
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ["babel-loader"],
            },
            {
                test: /\.tsx?$/,
                loader: "babel-loader",
            },
            {
                test: /\.eot(\?v=\d+.\d+.\d+)?$/,
                loader: "file-loader",
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader?name=[name].[ext]",
            },
            {
                test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
                loader: "file-loader?name=[name].[ext]",
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader?name=[name].[ext]",
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|mp3)$/,
                use: "file-loader?name=[name].[ext]",
            },
            {
                test: /\.ico$/,
                loader: "file-loader?name=[name].[ext]",
            },
            {
                test: /(\.css|\.scss|\.sass)$/,
                loaders: ["style-loader", "css-loader"],
            },
        ],
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        alias: {
            react: path.resolve(__dirname, "./node_modules", "react"),
            jquery: path.resolve(__dirname, "./node_modules", "jquery"),
            isarray: path.resolve(__dirname, "./node_modules", "isarray"),
            inherits: path.resolve(__dirname, "./node_modules", "inherits"),
            warning: path.resolve(__dirname, "./node_modules", "warning"),
            corejs: path.resolve(__dirname, "./node_modules", "core-js"),
            mobx: path.resolve(__dirname, "./node_modules", "mobx"),
        },
    },
};
