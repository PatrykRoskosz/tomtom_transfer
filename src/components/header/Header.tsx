import React from "react";
import Button from "../buttons/Button";
import i18n from "../../i18n";
import Logo from "../logo/Logo";
import { useLocation } from "react-router-dom";
import { FaPhone, FaEnvelope } from "react-icons/fa6";

import "./Header.scss";

const Header: React.FC = () => {
	const { t } = i18n;

	const location = useLocation();

	return (
		<>
			<Logo />
			{location.pathname !== "/event-service" && (
				<header className='header'>
					<div className='text_wrapper'>
						<h1>{t("components:header.title")}</h1>
						<div className='header-contact'>
							<div className='header-contact-media '>
								<a href='mailto:transport.rp77@gmail.com'>
									<div className='round email'>
										<FaEnvelope className='i' />{" "}
									</div>
									<span>transport.rp77@gmail.com</span>
								</a>
							</div>
							<div className='header-contact-media '>
								<a href='tel:+48539863374'>
									<div className='round phone'>
										<FaPhone className='i' />{" "}
									</div>
									<span>+48 539 863 374</span>
								</a>
							</div>
							{/* <Button
								text={t("components:header.btn_header")}
								click={() => console.log("click")}
							/> */}
						</div>
					</div>
					<div className='bg-shadow' />
				</header>
			)}
		</>
	);
};
export default Header;
// m.me/1743083499347676
