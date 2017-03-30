var config = require('./webpack.config.js');
var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var path = require('path');

var compile = webpack(config);
var server = new WebpackDevServer(compile, {
    hot: true,
    filename: config.output.filename,
    publicPath: config.output.publicPath,
    stats: {
        colors: true
    }
});

server.listen(9090, 'localhost', function() {

});