import "./WhyChooseUs.scss";
import {
	FaBusinessTime,
	FaHandshakeSimple,
	FaPeopleGroup,
	FaTruckFast,
	FaRegCalendarCheck,
} from "react-icons/fa6";
import i18n from "../../i18n";

const WhyChooseUs = () => {
	const { t } = i18n;
	return (
		<section className='why-choose-us'>
			<div className='why-choose-us-question'>
				<p>{t("components:why_choose_us.title")}</p>
				<h3>TomTom - Transfer</h3>
			</div>
			<div className='why-choose-us-justification'>
				<div className='justification'>
					<FaHandshakeSimple className='i' />
					<span>{t("components:why_choose_us.one.title")}</span>
					<p>
					{t("components:why_choose_us.one.description")}
					</p>
				</div>
				<div className='justification'>
					<FaTruckFast className='i' />
					<span>{t("components:why_choose_us.two.title")}</span>
					<p>
					{t("components:why_choose_us.two.description")}
					</p>
				</div>
				<div className='justification'>
					<FaPeopleGroup className='i' />
					<span>{t("components:why_choose_us.three.title")}</span>
					<p>
					{t("components:why_choose_us.three.description")}
					</p>
				</div>
				<div className='justification'>
					<FaRegCalendarCheck className='i' />
					<span>{t("components:why_choose_us.four.title")}</span>
					<p>
					{t("components:why_choose_us.four.description")}
					</p>
				</div>
			</div>
		</section>
	);
};

export default WhyChooseUs;
