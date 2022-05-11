const path = require('path')

module.exports = {

    entry: path.join(__dirname, '..', 'src', 'index'),

    output: {
        path: path.join(__dirname, '..', 'dist'),
        filename: '[name]-[hash].js',
    },

    htmlPluginConfig: (theTemplate) => ({
        title : 'DEV', 
        template: path.join(__dirname, '..', 'src', 'html', theTemplate)
    }),

    /*
        standardPreLoaders: [{
              test:/\.js$/,
              exclude: /node_modules/,
              include: /src/,
              loader: 'standard'
          }],
   */
    jsLoader: {
        test: /\.js$/,
        exclude: /node_modules/,
        include: /src/,
        loader: 'babel'
    },
    cssLoader: {
        test: /\.css$/,
        exclude: /node_modules/,
        include: /src/,
        // loader: 'raw'
        //  loaders:  ['style','css?modules']
        loaders: ['style', 'css']
    },

    resolve: {
        alias: {
            src: path.join(__dirname,  'src'),
            components: path.join(__dirname, '..', 'src', 'components'),
            utils: path.join(__dirname, '..', 'src', 'utils')
        }
    }
}
