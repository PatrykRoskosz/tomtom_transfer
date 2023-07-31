import "./ContactUsToDay.scss";
import i18n from "../../i18n";
import { FaPhone, FaEnvelope } from "react-icons/fa6";

const ContactUsToDay = () => {
	const { t } = i18n;
	return (
		<section className='contact-us-today'>
			<div className='contact-us-today-choose-us'>
				<p>
					{t("components:contact_us_today.one")}
					<br />
					<span>TomTom - transfer</span>
					<br /> {t("components:contact_us_today.two")}
				</p>
				<div className='contact-us-today-choose-us-hero'></div>
			</div>
			<h2>{t("components:contact_us_today.title")}</h2>
			<p>{t("components:contact_us_today.description")}</p>
			<div className="contact-us-today-media">
				<a href='tel:+48539863374'>
					<div className='round phone'>
						<FaPhone className='i' />{" "}
					</div>
					<span>+48 539 863 374</span>
				</a>
				<a href='mailto:transport.rp77@gmail.com'>
					<div className='round email'>
						<FaEnvelope className='i' />{" "}
					</div>
					<span>transport.rp77@gmail.com</span>
				</a>
			</div>
		</section>
	);
};

export default ContactUsToDay;
