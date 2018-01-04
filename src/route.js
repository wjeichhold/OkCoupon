import React from 'react';
import ReactDOM from 'react-dom';

import {
  HashRouter as Router,
  Route,
  Link
 } from 'react-router-dom';

 import Home from './main.js';
 import SavedDealsComp from './SavedDealsComp.js'

 //import path files

//Create Nav Bar with links

//Move route paths to App using React-Router-switch statments
//React Router switch

const Navigation = () => (
	<Router>
	  <div>
        <div className="container" styles={{"height": "100%", "width": "100%"}}>
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="#">OkCoupon</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <div className="nav-link"><Link to="/">More Coupons</Link></div>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link"><Link to="/saved">Saved Coupons</Link></div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
	    <Route exact path="/" component={Home}/>
        <Route path="/saved" component={SavedDealsComp}/>
      </div>
    </Router>
)

<<<<<<< HEAD
//
// <div className="container" styles={{"height": "100%", "width": "100%"}}>
//   <div className="container">
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <a className="navbar-brand" href="#">OkCoupon</a>
//       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarNav">
//         <ul className="navbar-nav">
//           <li className="nav-item active">
//             <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">Saved Coupons</a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   </div>
//   <h4></h4>
//     <App coupon={this.state.coupons[this.state.index]} increment={this.incrementIndex} />
//
module.exports = Navigation;
=======


export default Navigation;
>>>>>>> 342bd8813f6c27a7187194fdfd726be0b4205365
