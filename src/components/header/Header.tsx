import React from "react";
import Navigation from "../navigation/Navigation";


import "./Header.scss";

const Header: React.FC = () => {
	return (
		<header className='header'>
			<Navigation />
			<div className='tomtom-header-text'>
				<h1>Tomtom Transfer</h1>
				<p>podróżuj z nami </p>
			</div>
			<div className='tomtom-hero-image'></div>
		</header>
	);
};
export default Header;
