import React from 'react';
import couponCard from './coupon.js';
import {
  HashRouter as Router,
  Route,
  Link
 } from 'react-router-dom';


const savedCoupons = () => (<h2>Saved Coupons</h2>)

const RouteApp = () => (
  <Router>
    <div>
      <ul>
        <li><Link to='/coupon'>Swipe New Coupons</Link></li>
        <li><Link to='/savedCoupons'>See Saved Coupons</Link></li>
      </ul>
      <Route path='/coupon' component={couponCard}/>
      <Route path='/savedCoupons' component={savedCoupons}/>
    </div>
  </Router>
)

module.exports = RouteApp;
