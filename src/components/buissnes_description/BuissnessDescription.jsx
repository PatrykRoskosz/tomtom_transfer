import "./BuissnessDescription.scss"
import i18n from "../../i18n";

const BuissnessDescription = () => {
    const { t } = i18n;
	return (
		<section className='buissness_description'>
			<p>{t("components:buissness_description")}</p>
		</section>
	);
};

export default BuissnessDescription;
