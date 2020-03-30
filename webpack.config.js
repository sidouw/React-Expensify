const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports= (env)=> {
    const isProd = env === 'prod'
    const CSSExtract = new MiniCssExtractPlugin({
        filename: 'styles.css',
      }) 
    return{
    entry : ['babel-polyfill','./src/app.jsx'],
    output:{
        path:path.join(__dirname,'public','dist'),
        filename:'bundled.js'
    },
    module:{
        rules:[{
            loader :'babel-loader',
            test: /\.jsx$/,
            exclude :/node-modules/
        },{
            test :/\.s?css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                  {
                    loader: 'css-loader',
                    options: {
                      sourceMap: true
                    }
                  },
                  {
                    loader: 'sass-loader',
                    options: {
                      sourceMap: true
                    }
                  }
                ]
              }
            ]
    },
    plugins: [
        CSSExtract
      ],
    devtool:isProd ? 'source-map': 'inline-source-map',
    devServer:{
        contentBase :path.join(__dirname,'public'),
        publicPath:'/dist/',
        historyApiFallback : true
    }}
}
