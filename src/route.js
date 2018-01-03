import React from 'react';
import SavedDealsComp from './SavedDealsComp.js'
import App from './app.js';
import {
  HashRouter as Router,
  Route,
  Link
 } from 'react-router-dom';

//Create Nav Bar with links

//Move route paths to App using React-Router-switch statments
//React Router switch

const Navigation = () => (
  <nav>
    <Link to='/'>Swipe New Coupons</Link>
    <Link to='/savedDeals'>See Saved Coupons</Link>
  </nav>
)


module.exports = Navigation;
