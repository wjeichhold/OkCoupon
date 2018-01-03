import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';

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
                  <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Saved Coupons</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <h4></h4>
          <App coupon={this.state.coupons[this.state.index]} increment={this.incrementIndex} />
      </div>
    )
  }
}
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Main),
    document.getElementById('mount')
  );
});
