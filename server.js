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

app.get('/helper', (req, res) => {
  apiHelp.couponHelper(11222, (data) => {
    var deals = [];
    for(var i = 0; i < data.deals.length; i++) {
      var eachDeal = data.deals[i]
      var newObj = {}
      newObj['imgUrl'] = eachDeal.deal.image_url;
      newObj['title'] = eachDeal.deal.title;
      newObj['price'] = eachDeal.deal.price;
      newObj['discount'] = eachDeal.deal.discount_percentage;
      newObj['merchant'] = eachDeal.deal.merchant.name;
      newObj['finePrint'] = eachDeal.deal.fine_print;
      newObj['description'] = eachDeal.deal.description;
      newObj['url'] = eachDeal.deal.url;
      deals.push(newObj)
    }
    res.send(deals)
  })
})

const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
