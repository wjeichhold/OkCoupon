import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';

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
      <div>
        <App coupon={this.state.coupons[this.state.index]} increment={this.incrementIndex}  id={this.state.coupons[this.state.index].id}/>
      </div>
    )
  }
}
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Main),
    document.getElementById('mount')
  );
});;

