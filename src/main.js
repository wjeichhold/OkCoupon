import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import Navigation from './route.js'
import {
  HashRouter as Router,
  Route,
  Link
 } from 'react-router-dom';

import axios from 'axios';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coupons: [{
        image_url: "https://api.sqoot.com/v2/deals/5394809/image?api_key=kzjh2j",
        title: "10% off at Stewart Hotel",
        merchant_name: "Posh Bagel",
        price: 177.39,
        discount_percentage: 0.1,
        id: 1
      }],
      index: 0
    }
    this.incrementIndex = this.incrementIndex.bind(this);
  }



  incrementIndex() {
    this.state.index++;
  }



  render() {
    return (
      <Router>
      <div>
        <Navigation />
      </div>
      <Switch>
           <Route exact path="/" render={() => {
             <App coupon={this.state.coupons[this.state.index]} increment={this.incrementIndex}  id={this.state.coupons[this.state.index].id}/>
           }} />
           <Route path="/savedDeals" render={() => {
             <SavedDealsComp />
           }} />
       </Switch>
       </Router>
    )
  }
}
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Main),
    document.getElementById('mount')
  );
});;
