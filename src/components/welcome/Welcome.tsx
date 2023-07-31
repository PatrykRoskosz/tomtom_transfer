import "./Welcome.scss";
import car from "../../images/cars/traficBlack.png";
import i18n from "../../i18n";

const Welcome = () => {
	const { t } = i18n;
	return (
		<section className='welcome'>
			
			<div className='welcome-text-section-wrapper'>
				<p className='welcome-text-section-welcome-text'>{t("components:welcome.one")}</p>
				<div className='welcome-text-section-header-wrapper'>
					<h2 className="header-logo">TomTom - Transfer</h2>
				</div>
				<p> {t("components:welcome.two")}</p>
			</div>
				<img src={car} alt=' Black renault trafic' />
		
		</section>
	);
};
export default Welcome;
