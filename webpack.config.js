const path = require('path')


module.exports= {
    entry : './src/app.jsx',
    output:{
        path:path.join(__dirname,'public/js'),
        filename:'bundled.js'
    },
    module:{
        rules:[{
            loader :'babel-loader',
            test: /\.jsx$/,
            exclude :/node-modules/
        },{
            test :/\.s?css$/,
            use :[
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool:'cheap-module-eval-source-map',
    devServer:{
        contentBase :path.join(__dirname,'public'),
        historyApiFallback : true
    }
}
