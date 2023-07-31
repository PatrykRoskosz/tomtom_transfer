import "./WhyWorkWithUs.scss";
import i18n from "../../i18n";
import WhyWorkWithUsItem from "./WhyWorkWithUsItem";

const WhyWorkWithUs = () => {
	const { t } = i18n;
	return (
		<section className='why-work-with-us'>
			<div className='why-work-with-us-hero-img'></div>
			<div className='why-work-with-us-title'>
				<h2>{t("components:why-work-wit-us.title")}</h2>
			</div>
			<div className='why-work-with-us-reasons'>
				<WhyWorkWithUsItem additionalSign='%' fromValue='0' toValue='100'>
					{t("components:why-work-wit-us.satisfied_customers")}
				</WhyWorkWithUsItem>
				<WhyWorkWithUsItem fromValue='0' toValue='20'>
					{t("components:why-work-wit-us.years_of_experience")}
				</WhyWorkWithUsItem>
				<WhyWorkWithUsItem fromValue='0' toValue='468'>
					{t("components:why-work-wit-us.thousands_of_kilometers_traveled")}
				</WhyWorkWithUsItem>
				<WhyWorkWithUsItem fromValue='0' toValue='2500'>
					{t("components:why-work-wit-us.number_of_trips_made")}
				</WhyWorkWithUsItem>
			</div>
		</section>
	);
};

export default WhyWorkWithUs;
