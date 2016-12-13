const path  = require('path');

module.exports = {
    entry: [
        './src/App.js',
        './styles/app.less'
    ],
    output: {
        path: './public',
        filename: 'app.js'
    },
    devServer: {
        contentBase: './public',
        inline: true,
        port: 3333
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015', 'stage-2']
                }
            },
            {
                test: /\.less$/,
                loader: "style!css!autoprefixer!less-loader"
            }
        ]
    },
    resolve: {
        alias: {
            CONFIG: path.join(__dirname, 'config', `${process.env.NODE_ENV || 'DEV'}`)
        }
    }
};
