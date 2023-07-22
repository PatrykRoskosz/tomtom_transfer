import { useState, useEffect } from "react";
import React from "react";
import Button from "../buttons/Button";
import bus from "../../images/headerPicture/busHeader.jpg";
import kopenhaga from "../../images/headerPicture/kopenhaga.jpg";
import i18n from "../../i18n";
import Logo from "../logo/Logo";
import { useLocation } from 'react-router-dom'

import "./Header.scss";

const Header: React.FC = () => {
	const [isHeader, setIsHeader] = useState(false);
	const { t } = i18n;

	const location = useLocation()
	console.log('location: ', location);

	useEffect(() => {
		const showImg = setTimeout(() => setIsHeader(true), 100);

		return () => {
			clearTimeout(showImg);
		};
	}, [isHeader]);

	const imgClasses = isHeader ? "show-header-img" : "hide-header-img";
	const headerTextClasses = isHeader
		? "tomtom-header-text show-header show-btn"
		: "tomtom-header-text hide-header hide-btn";

	return (
		<>
			<Logo />
			<header className='header'>
				<div className='text_wrapper'>
					<h1>{t("components:header.title")}</h1>
					<div>
						<Button
							text={t("components:header.btn_header")}
							click={() => console.log("click")}
						/>
					
					
					</div>
				</div>
				<div className='bg-shadow' />
			</header>
		</>

		
	);
};
export default Header;
// m.me/1743083499347676

// <header className='header'>
		// 	<div className={headerTextClasses}>
		// 		<h1>Tomtom Transfer</h1>
		// 		<p>podróżuj z nami </p>
		// 		<Button
		// 			text={t("components:header.btn_header")}
		// 			click={() => console.log("click")}
		// 		/>
		// 	</div>
		// 	<div className='header-img'>
		// 		<img className={imgClasses} src={bus} alt='' />
		// 	</div>
		// 	{/* <div className='tomtom-hero-image'></div> */}
		// </header>