import "./ContactUsToDay.scss";
import i18n from "../../i18n";


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
				<div className="contact-us-today-choose-us-hero"></div>
			</div>
			<h2>{t("components:contact_us_today.title")}</h2>
			<p>{t("components:contact_us_today.description")}</p>
			
		</section>
	);
};

export default ContactUsToDay;
