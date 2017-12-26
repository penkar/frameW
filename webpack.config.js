var path = require('path');
var webpack = require('webpack');

module.exports = {
 context: __dirname,
 entry: {
   'bundle.js':'./src/index.js',
 },
 output: {
   path: __dirname,
   filename: './dist/[name]'
 },
 module: {
   rules: [{
     test: /\.html$/,
     exclude: /(node_modules|bower_components)/,
     use: {
       loader: 'html-loader'
     }
   },{
     test: /\.js$/,
     exclude: /(node_modules|bower_components)/,
     use: {
       loader: 'babel-loader',
       query: {
         presets: ['env', 'stage-0']
       },

     }
   },{
     test:/\.css$/,
     exclude:/(node_modules)/,
     use: ['style-loader', 'css-loader'],
   }]
 },
 devtool: 'source-map',
 watch: true
}
