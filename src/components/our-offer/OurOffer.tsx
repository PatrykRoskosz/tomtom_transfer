import { Link } from "react-router-dom";
import keyCar from "../../images/ourOffer/keyCar.jpg";
import wedding from "../../images/ourOffer/wedding.jpg";
import delivery from "../../images/why-us/delivery.jpg";
import smallToast from "../../images/ourOffer/smallToast.jpg";
import "./OurOffer.scss";
import i18n from "../../i18n";

const OurOffer = () => {
	const { t } = i18n;
	return (
		<section className='our-offer'>
			<div className='our-offer-text-section'>
				<h2>{t("components:our_offer.title")}</h2>
			</div>
			<div className='our-offer-links-list'>
				<ul>
					<li className='our-offer-links-list-item'>
						<img src={smallToast} alt='' />
						<h3>{t("components:our_offer.transport_of_people")}</h3>
						<Link to='/routes'>{t("components:our_offer.details")}</Link>
					</li>
					<li className='our-offer-links-list-item'>
						<img src={delivery} alt='' />
						<h3>{t("components:our_offer.shipments")}</h3>
						<Link to='/routes'>{t("components:our_offer.details")}</Link>
					</li>
					<li className='our-offer-links-list-item'>
						<img src={wedding} alt='wesele' />
						<h3>{t("components:our_offer.event_handling")}</h3>

						<Link to='/event-service'>{t("components:our_offer.details")}</Link>
					</li>
					<li className='our-offer-links-list-item'>
						<img src={keyCar} alt='kluczyk do auta' />
						<h3>{t("components:our_offer.car_rental")}</h3>
						<Link to='/rental-car'>{t("components:our_offer.details")}</Link>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default OurOffer;
