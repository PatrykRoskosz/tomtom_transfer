import "./HeaderEvent.scss";
import i18n from "../../i18n";

const HeaderEvent = () => {
	const { t } = i18n;

	return (
		<div className='header-event'>
			<div className='header-event-text'>
				<h2>
					{t("components:event_header.one")} <br/><span className="header-logo">TomTom - Transfer</span>
				</h2>
				<p>{t("components:event_header.two")}</p>
			</div>

			<div className='header-event-hero'></div>
		</div>
	);
};

export default HeaderEvent;
