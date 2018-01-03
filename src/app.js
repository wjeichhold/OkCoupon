import React from 'react';
import CouponCard from './CouponCard.js'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image_url: "https://api.sqoot.com/v2/deals/5394809/image?api_key=kzjh2j",
      description: "10% off at Stewart Hotel",
      merchant_name: "Posh Bagel",
      price: 177.39,
      discount_percentage: 0.1,
      id: this.props.id
    }
    this.YesButton = this.YesButton.bind(this);
    this.NoButton = this.NoButton.bind(this);
  }

  get() {
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
      this.props.increment()
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
      <div>
      <CouponCard image={this.state.image_url}
      description={this.state.description}
      merchant={this.state.merchant_name}
      price={this.state.price}
      discount={this.state.discount_percentage}/>
      <button onClick={this.NoButton}>No</button>
      <button onClick={this.YesButton}>Yes</button>
      </div>
    )
  }
}

export default App;
