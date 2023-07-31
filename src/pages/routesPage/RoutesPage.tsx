import Components from "../../components";
import CartSidePhoto from "../../components/carts/CartSidePhoto/CartSidePhoto";
import trip from '../../images/why-us/trip.jpg'
import delivery from '../../images/why-us/delivery.jpg'
import workers from '../../images/ourOffer/workers.jpg'
import i18n from "../../i18n";
import "./RoutesPage.scss";
import DepartureMap from "../../components/departure-map/DepartureMap";

const RoutesPage = () => {
	const { t } = i18n;
	const offer = [
		{
			id: 1,
			title: t("components:transport_offer.one.title"),
			text: t("components:transport_offer.one.text"),
			imgSrc: trip,
			imgAlt: "",
			items: [],
		},
		{
			id: 2,
			title: t("components:transport_offer.two.title"),
			text: t("components:transport_offer.two.text"),
			imgSrc: delivery,
			imgAlt: '',
			items: [],
		},
		{
			id: 3,
			title: t("components:transport_offer.three.title"),
			text: t("components:transport_offer.three.text"),
			imgSrc: workers,
			imgAlt: "",
			items: [],
		},
	];
	return (
		<section className='routes-section'>
			<Components.Welcome />
			<Components.BuissnessDescription
				text={t("components:buissness_description.text")}
			/>
			<DepartureMap />
			<Components.TripTable />
			<ul className='routes-section-ul'>
				{offer.map(car => (
					<CartSidePhoto
						key={car.id}
						id={car.id}
						title={car.title}
						text={car.text}
						imgSrc={car.imgSrc}
						imgAlt={car.imgAlt}
						items={car.items}
					/>
				))}
			</ul>
			<Components.TextComponent
				title={t("components:trust.one")}
				text={t("components:trust.two")}
			/>
			<Components.WhyChooseUs />
			<Components.ContactUsToDay />
		</section>
	);
};
export default RoutesPage;
