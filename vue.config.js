const path = require('path')
const webpack = require('webpack')

const resolve = dir => {
    return path.join(__dirname, dir)
}

module.exports = {
    lintOnSave: true,
    productionSourceMap: false,
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                _M: resolve('src/store/mutations')
            })
        ]
    }
}
