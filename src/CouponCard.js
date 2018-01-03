import React from 'react';

const CouponCard = (props) => {
  return (
    <div>
      <img src={props.image}></img>
      <div>{props.merchant}</div>
      <div>{props.price}</div>
      <div>{props.discount}</div>
      <div>{props.description}</div>
    </div>
  )
}
export default CouponCard;
