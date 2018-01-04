import React from 'react';

const Deal = (props) => (
	<div>
	{props.deal.title} | {props.deal.price} | {props.deal.url}
	</div>
)

//Need to change the image so that it is just a thumbnail and not such a large image


export default Deal;