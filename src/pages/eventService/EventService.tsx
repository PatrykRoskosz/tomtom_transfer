import "./EventService.scss";
import Components from "../../components";
import i18n from "../../i18n";
import { whyUs, offer } from "./typeList";

const EventService = () => {
	const { t } = i18n;
	return (
		<section className='event-service'>
			<Components.HeaderEvent />
			<Components.BuissnessDescription
				text={t("components:offer_events_description")}
			/>
			<ul className='event-service-ul'>
				{offer.map(car => (
					<Components.CartSidePhoto
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
			<Components.WhyChooseUs itemList={whyUs} />
			<Components.ContactUsToDay />
		</section>
	);
};
export default EventService;
