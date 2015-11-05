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
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['jsx-loader']
            }
        ]
    }
};