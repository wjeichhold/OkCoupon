const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const app = express();
const db = require('./db/index.js')
const apiHelp = require('./APIhelper.js');
const bodyParser = require('body-parser');
const compiler = webpack(webpackConfig);
 
app.use(express.static(__dirname + '/www'));
app.use(bodyParser.json());

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));
<<<<<<< HEAD
 

  app.set('port', process.env.PORT || 3000)
 
  const server = app.listen(app.get('port'))
// const server = app.listen(3000, function() {
=======

app.get('/helper', (req, res) => {
  apiHelp.couponHelper(11222, (data) => {
    res.send(data.deals)
  })
})

const server = app.listen(3000, function() {
>>>>>>> 2489fff1593382c35d9601ebe871acc4bdc413cc
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);

// });