import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import Navigation from './route.js'
import {
  HashRouter as Router,
  Route,
  Link
 } from 'react-router-dom';
//Hello
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coupons: [{
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
