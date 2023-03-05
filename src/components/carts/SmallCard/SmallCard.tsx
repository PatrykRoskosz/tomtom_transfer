import React from "react";

import "./SmallCard.scss";

interface smallCardType {
	title: string;
	text: string;
}

const SmallCard: React.FC<smallCardType> = props => {
	return (
		<div className='tomtom-small-card'>
			<h3>{props.title}</h3>
			<p>{props.text}</p>
		</div>
	);
};
export default SmallCard;
