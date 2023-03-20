import React from "react";

import "./SmallCard.scss";

interface smallCardType {
	title: string;
	text: string;
	color?: string;
	bg?: string;
	
}

const SmallCard: React.FC<smallCardType> = props => {
	const { color, bg, title, text} = props;
	const cartColors = (color?: string, bg?: string) => {
		if(color && bg) {
			return {
				backgroundColor: bg,
				color: color
			}
		}
		if (color) {
			return {
				color: color
			}
		}
		if (bg) {
			return {
				backgroundColor: bg
			}
		}
		return {}
	}

	return (
		<div className='tomtom-small-card' style={cartColors(color, bg)}>
			<h3>{title}</h3>
			<p>{text}</p>
		</div>
	);
};
export default SmallCard;
