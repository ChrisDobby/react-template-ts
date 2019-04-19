const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");
const Visualizer = require("webpack-visualizer-plugin");
const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");

const GLOBALS = {
    "process.env": {
        NODE_ENV: JSON.stringify("production"),
    },
};

module.exports = {
    mode: "production",
    entry: { bundle: path.resolve(__dirname, "src/index") },
    target: "web",
    output: {
        path: path.join(__dirname, "/dist"),
        publicPath: "/",
        filename: "bundle.js",
    },
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new ExtractTextPlugin({ filename: "styles.css", allChunks: true }),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.LoaderOptionsPlugin({
            minimize: false,
            debug: true,
            noInfo: true,
        }),
        new DuplicatePackageCheckerPlugin({
            verbose: true,
            emitError: false,
        }),
        new Visualizer({
            filename: "../stats.html",
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DefinePlugin(GLOBALS),
        new SWPrecacheWebpackPlugin({
            cacheId: "ts-react-template",
            dontCacheBustUrlsMatching: /\.\w{8}\./,
            filename: "service-worker.js",
            minify: true,
            staticFileGlobs: ["index.html"],
            staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
            mergeStaticsConfig: true,
        }),
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
                use: ExtractTextPlugin.extract({ use: "css-loader?minimize" }),
            },
        ],
    },
    resolve: {
        alias: {
            react: path.resolve(__dirname, "./node_modules", "react"),
            "react-dom": path.resolve(__dirname, "./node_modules", "react-dom"),
            jquery: path.resolve(__dirname, "./node_modules", "jquery"),
            isarray: path.resolve(__dirname, "./node_modules", "isarray"),
            toastr: path.resolve(__dirname, "./node_modules", "toastr"),
            inherits: path.resolve(__dirname, "./node_modules", "inherits"),
            warning: path.resolve(__dirname, "./node_modules", "warning"),
            "core-js": path.resolve(__dirname, "./node_modules", "core-js"),
            mobx: path.resolve(__dirname, "./node_modules", "mobx"),
            dateformat: path.resolve(__dirname, "./node_modules", "dateformat"),
            classnames: path.resolve(__dirname, "./node_modules", "classnames"),
        },
        extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    node: {
        fs: "empty",
    },
};
