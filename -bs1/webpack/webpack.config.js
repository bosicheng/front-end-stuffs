const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    mode:"development",
    entry:{
        "index":'./src/index.js',
        "index2":'./src/index2.js'
    },
    output:{
        path:path.resolve(__dirname,'dist'),  //必须用绝对路径
        filename:'[name].js',
        publicPath:'http://localhost:8086'
    },
    module:{
        rules:[
            {
                test:/\.scss$/,
                // use:[{loader:'style-loader'},{loader:'css-loader'},{loader:'sass-loader'}]
                // use: ExtractTextPlugin.extract({
                //     fallback: "style-loader",
                //     use: "css-loader"
                // })
                use:ExtractTextPlugin.extract({
                    use:["css-loader","sass-loader"],
                    fallback:"style-loader"
                })
            }
        ]
    },
    plugins:[
        new HtmlPlugin({
            template:'./src/index.html',
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            filename:'a.html',
            // title:'title1',
            chunks:['index']
        }),
        new ExtractTextPlugin("css/styles.css"),
    ],
    devServer:{
        contentBase:'./dist',
        host:'localhost',
        port:'8086',
        // compress:true,
        open:true

    }
}