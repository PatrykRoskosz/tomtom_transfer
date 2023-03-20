import React from "react";

import "./CartSidePhoto.scss";

interface CartSidePhotoType {
	id: number;
	title: string;
	text: string;
	imgSrc: string;
	imgAlt: string;
	isGold?: boolean;
}

const CartSidePhoto: React.FC<CartSidePhotoType> = props => {

	

	return (
		<div className='tomtom-cart-side-photo'>
			{props.id % 2 != 0 ? (
				<>
					<div className='tomtom-cart-side-photo-img'>
						<img src={props.imgSrc} alt={props.imgAlt} />
					</div>
					<div className='tomtom-cart-side-photo-text'>
						<h3>{props.title}</h3>
						<div className='tomtom-cart-side-photo-text-description'>
							<p>{props.text}</p>
						</div>
					</div>
				</>
			) : (
				<>
					<div className='tomtom-cart-side-photo-text'>
						<h3>{props.title}</h3>
						<div className='tomtom-cart-side-photo-text-description'>
							<p>{props.text}</p>
						</div>
					</div>
					<div className='tomtom-cart-side-photo-img'>
						<img src={props.imgSrc} alt={props.imgAlt} />
					</div>
				</>
			)}
		</div>
	);
};
export default CartSidePhoto;
