import "./Trust.scss";
import i18n from "../../i18n";

const Trust = () => {
	const { t } = i18n;
	return (
		<div className='trust'>
			<div className='trust-text trust-tex-one'>
				<p>{t("components:trust.one")}</p>
			</div>
			<div className='trust-text trust-tex-two'>
				<p>{t("components:trust.two")}</p>
			</div>
			<div className='trust-hero'></div>
		</div>
	);
};

export default Trust;
