import { useState, useEffect } from "react";
import React from "react";
import Button from "../buttons/Button";
import bus from "../../images/headerPicture/busHeader.jpg";
import i18n from "../../i18n";

import "./Header.scss";

const Header: React.FC = () => {
	const [isHeader, setIsHeader] = useState(false);
	const { t } = i18n;

	useEffect(() => {
	const showImg =	setTimeout(() => setIsHeader(true) , 100);

	return () => {
		clearTimeout(showImg);
	}
		
	}, [isHeader]);

	const imgClasses = isHeader ? "show-header-img" : "hide-header-img";
	const headerTextClasses = isHeader ? "tomtom-header-text show-header show-btn" : "tomtom-header-text hide-header hide-btn";

	return (
		<header className='header'>
			<div className={headerTextClasses}>
				<h1>Tomtom Transfer</h1>
				<p>podróżuj z nami </p>
				<Button
					text={t("components:header.btn_header")}
					click={() => console.log("click")}
				/>
			</div>
			<div className='header-img'>
				<img className={imgClasses} src={bus} alt='' />
			</div>
			{/* <div className='tomtom-hero-image'></div> */}
		</header>
	);
};
export default Header;
