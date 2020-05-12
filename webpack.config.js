/* eslint-disable prefer-named-capture-group */
/* eslint-disable sort-keys */
/* eslint-disable require-unicode-regexp */
/* eslint-disable no-undef */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");


config = {
    "entry": "./src/index.js",
    "module": {
        "rules": [
            {"test": /\.js$/,
                "exclude": /node_modules/,
                "loader": "babel-loader"},
            {
                "test": /\.scss$/,
                "use": [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                "test": /\.(jpe?g|png|gif|svg)$/i,
                "use": {
                    "loader": "file-loader",
                    "options": {
                        "name": "[name].[hash].[ext]",
                        "outputPath": ""
                    }
                }
            },
            {
                "test": /\.html$/i,
                "loader": "html-loader"
            }
        ]
    },
    "output": {
        "path": path.resolve(
            __dirname,
            "dist"
        )
    },
    "plugins": [
        new HtmlWebpackPlugin({
            "title": "Output Management",
            "template": "./src/index.html"
        })
    ]
};

module.exports = (env, argv) => {

    if (argv.mode === "development") {

        config.devtool = "source-map";
        config.output.filename = "main.bundle.js";

    }

    if (argv.mode === "production") {

        config.plugins.push(new CleanWebpackPlugin());
        config.output.filename = "main.[hash].bundle.js";

    }

    return config;

};