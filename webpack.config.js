module.exports = {
    entry: './scripts/app.jsx',
    output: {
        path: './dist',
        filename: 'app.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
             //{ test: /\.js$/, loader: 'babel-loader' },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'webpack-traceur!jsx'
            }
        ]
    }
};