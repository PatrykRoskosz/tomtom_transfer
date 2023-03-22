import React from "react";

import "./SmallCard.scss";

interface smallCardType {
	title: string;
	text: string;
	iconName?: string
	color?: string;
	bg?: string;
	
}

const SmallCard: React.FC<smallCardType> = props => {
	const { color, bg, title, text, iconName} = props;
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
			{iconName && <i className={iconName}></i>}
			<h3>{title}</h3>
			<p>{text}</p>
			
		</div>
	);
};
export default SmallCard;
