module.exports = {
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: "ts-loader",
                    },
                ],
            },
        ]
    },
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
            '../../common/style': path.resolve(__dirname, 'src/common/style')
        }
    }
}