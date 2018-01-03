import React from 'react';
import CouponCard from './CouponCard.js'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image_url: this.props.coupon.image_url,
      title: this.props.coupon.title,
      merchant_name: this.props.coupon.merchant_name,
      price: this.props.coupon.price,
      discount_percentage: this.props.coupon.discount_percentage,
      id: this.props.coupon.id
    }
    this.YesButton = this.YesButton.bind(this);
    this.NoButton = this.NoButton.bind(this);
  }

  getDeals() {
    axios.get('/')
    .then(function(response) {
      console.log('successful post');
    })
    .catch((err) => {
      console.error(err);
    });
  }

  YesButton() {
    axios.post('/yes', {
      id: this.state.id
    })
      .then((response) => {
        this.setState({
          coupons: response.data
        });
      })
      .catch((err) => {
        console.error(err);
      });
      this.props.increment();
  }

  NoButton() {
    axios.post('/yes', {
      id: this.state.id
    })
      .then((response) => {
        this.setState({
          coupons: response.data
        });
      })
      .catch((err) => {
        console.error(err);
      });
      this.props.increment()
  }


  render() {
    return (
      <div styles={{"height": "100%", "width": "100%"}}>
          <CouponCard image={this.state.image_url}
            title={this.state.title}
            merchant={this.state.merchant_name}
            price={this.state.price}
            discount={this.state.discount_percentage}
            />
        <h4></h4>
          <button type="button" className="btn btn-success btn-lg btn-block" onClick={this.YesButton}>Yes</button>
          <button type="button" className="btn btn-danger btn-lg btn-block" onClick={this.NoButton}>No</button>
      </div>
    )
  }
}

export default App;
