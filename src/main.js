import React from 'react';
import App from './app.js';
import Navigation from './route.js'
import {
  HashRouter as Router,
  Route,
  Link
 } from 'react-router-dom';

import axios from 'axios';
//testing out my comments

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coupons: [{
        image_url: "https://api.sqoot.com/v2/deals/5394809/image?api_key=kzjh2j",
        title: "Finding you deals!",
        merchant_name: "",
        price: "",
        discount_percentage: "",
        id: 1
      }],
      index: 0,
      postal: 0,
      flag: false
    }
    this.incrementIndex = this.incrementIndex.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this)
    this.foo = this.foo.bind(this);
  }

  foo(arg) {
    this.setState({
      coupons: arg
    })
  }

  // componentDidMount() {
  //   console.log(this.state)
  //   axios.get('/helper')
  //   .then(() => {
  //     axios.get('/arrayCoupons').then((response) => {
  //       console.log('is the problem here??', response.data)
  //       this.foo(response.data);
  //       console.log("Coupons:",this.state.coupons);
  //     })
  //   })
  // }

  componentDidUpdate() {
    console.log('componenet is updating', this.state)
  }

  incrementIndex() {
    console.log('inside main.js incremneting', this.state.index)
    this.setState({index:this.state.index+1})
    console.log(this.state.index, 'after incrementing')
  }

    handleChange (e) {
    this.setState({
      postal: e.target.value
    })
  }

  handleClick () {
    console.log('going postal!!!!!', this.state.postal)
    let postal = this.state.postal
    if(postal > 1001 && postal < 99950){
      axios.post('/helper', {postal: this.state.postal}).then((res)=>{
        this.setState({flag: true})
      })
      .then(() => {
      axios.get('/arrayCoupons').then((response) => {
        console.log('is the problem here??', response.data)
        this.foo(response.data);
        console.log("Coupons:",this.state.coupons);
      })
    })
    }
  }



  render() {
    if(this.state.flag === false){
              return (
    <div className='container'>
    <p> Whats your area code? </p>
        <input id="postal" className="password" placeholder="Your Postal Code - Here" type="text" value={this.state.sqrft} onChange={this.handleChange}/>
        <button onClick={this.handleClick} className="btn btn-dark"> Postal Code
        </button>
    </div>
    );
    } else {
      console.log('how many times?', this.state)
      return (
      <div>
        <div className="container" style={{'height':"55%", 'width':"55%"}}>
          <App Coupon={this.state.coupons[this.state.index]} Increment={this.incrementIndex} />
        </div>
      </div>
      )
    }
  }
}

export default Main
