const path = require('path');

module.exports = {
    devtool: "source-map",
    devServer: {
        open: true,
        contentBase: path.resolve(__dirname, '../', 'public'),
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, '../', 'build'),
        sourceMapFilename: "[name].js.map",
    },
    module: {
        rules: [
            {
                test: /\.(sass|scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpg|svg|gif|jpeg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images',
                            publicPath: '../images',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [],
};