const webpack = require('webpack');
const path = require('path');


module.exports = {

    devtool:'inline-source-map', //(For Debugging)


entry: {
    index:'./src/index.js'
},

output:{
    path:path.resolve(__dirname,'dist'),
    filename:'main.js'
},
    module: {
        rules: [

            {
                //rules kun kun file ma use garne i.e. regex regExp
            test:/\.js$/,
            exclude:/node_modules/,
            use:'babel-loader'
            },
            {
                test:/\.css$/,
                // exclude:/node_modules/,
                use:['style-loader','css-loader']
                // right side first css-loader conversts css to combiend array then style loader will work
            }
            


        ]
    },

    devServer:{
        contentBase: path.join(__dirname,"/public/"),
        port:3000,
        publicPath:"http://localhost:3000/dist/"

    }


}
