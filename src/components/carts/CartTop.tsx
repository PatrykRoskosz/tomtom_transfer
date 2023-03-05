import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../buttons/Button";

import "./CartTop.scss";

export interface CartTopType {
	title: string;
	text: string;
	imgSrc: string;
	imgAlt: string;
	buttonText: string;
	url: string;
}

const CartTop: React.FC<CartTopType> = props => {
	const navigate = useNavigate();

	const buttonClickHandler = () => {
		navigate(props.url);
	};

	return (
		<div className='tomtom-cart-top'>
			<div className='tomtom-cart-top-img'>
				<img src={props.imgSrc} alt={props.imgAlt} />
			</div>
			<div className='tomtom-cart-top-text'>
				<h2>{props.title}</h2>
				<p>{props.text}</p>
				<Button click={buttonClickHandler} text={props.buttonText}/>
			</div>
		</div>
	);
};

export default CartTop;
