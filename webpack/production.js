const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    output: {
        filename: 'js/[name]-[contenthash].js',
        path: path.resolve(__dirname, '../', 'build'),
    },
    module: {
        rules: [
            {
                test: /\.(sass|scss)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpg|svg|gif|jpeg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name]-[contenthash].[ext]',
                            outputPath: 'images',
                            publicPath: '../images',
                        },
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                            },
                        }
                    },
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name]-[contenthash].css',
        }),
    ],
};