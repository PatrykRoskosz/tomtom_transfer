import "./BuissnessDescription.scss";
import React from "react";

interface TypeText {
	text: string;
}

const BuissnessDescription: React.FC<TypeText> = ({ text }) => {
	return (
		<section className='buissness_description'>
			<p>{text}</p>
		</section>
	);
};

export default BuissnessDescription;
