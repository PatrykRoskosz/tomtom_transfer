import Components from "../../components";
import CartSidePhoto from "../../components/carts/CartSidePhoto/CartSidePhoto";
import i18n from "../../i18n";
import "./RoutesPage.scss";

const RoutesPage = () => {
	const { t } = i18n;
	const offer = [
		{
			id: 1,
			title: t("components:transport_offer.one.title"),
			text: t("components:transport_offer.one.text"),
			imgSrc: "",
			imgAlt: "",
			items: [],
		},
		{
			id: 2,
			title: t("components:transport_offer.two.title"),
			text: t("components:transport_offer.two.text"),
			imgSrc: "",
			imgAlt: "",
			items: [],
		},
		{
			id: 3,
			title: t("components:transport_offer.three.title"),
			text: t("components:transport_offer.three.text"),
			imgSrc: "",
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

			{/* <h1>Termin wyjazdów</h1>

			<Components.Accordion items={ofertss} /> */}

			{/* <h1>Termin wyjazdów</h1> */}

			{/* <div className='the-course-of-the-route-wrapper'>
				<div className='the-course-of-the-route'>
					<h1>Nasza trasa</h1>
					<ul>
						<li>
							<FaLocationDot className='fa-solid fa-location-dot red' />
							Katowice
						</li>
						<li>
							<FaLocationDot className='fa-solid fa-location-dot red' />
							Opole
						</li>
						<li>
							<FaLocationDot className='fa-solid fa-location-dot red' />
							Oława
						</li>
						<li>
							<FaLocationDot className='fa-solid fa-location-dot red' />
							Wrocław
						</li>
						<li>
							<FaLocationDot className='fa-solid fa-location-dot red' />
							Żmigród
						</li>
						<li>
							<FaLocationDot className='fa-solid fa-location-dot red' />
							Rawicz
						</li>
						<li>
							<FaLocationDot className='fa-solid fa-location-dot red' />
							Leszno
						</li>
						<li>
							<FaLocationDot className='fa-solid fa-location-dot red' />
							Poznań
						</li>
						<li>
							<FaLocationDot className='fa-solid fa-location-dot red' />
							Świepodzin
						</li>
						<li>
							<FaLocationDot className='fa-solid fa-location-dot red' />
							Gorzów
						</li>
						<li>
							<FaLocationDot className='fa-solid fa-location-dot red' />
							Renice
						</li>
						<li>
							<FaLocationDot className='fa-solid fa-location-dot red' />
							Szczecin
						</li>
						<li>
							<FaLocationDot className='fa-solid fa-location-dot red' />
							Rostock
						</li>
						<li>
							<FaLocationDot className='fa-solid fa-location-dot red' />
							Copenhagen
						</li>
					</ul>
				</div>
				<div className='the-course-of-the-route-map'>
					<img src={mapa} alt='Mapa' />
				</div>
			</div> */}
		</section>
	);
};
export default RoutesPage;
