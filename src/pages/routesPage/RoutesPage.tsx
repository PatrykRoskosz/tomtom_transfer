import mapa from "../../images/headerPicture/mapa.png";
import Components from "../../components";
import carton from "../../images/cartTopPicture/carton.png";
import team from "../../images/cartTopPicture/team.png";
import CartSidePhoto from "../../components/carts/CartSidePhoto/CartSidePhoto";
import { FaLocationDot } from "react-icons/fa6";
import i18n from "../../i18n";

import "./RoutesPage.scss";

const ofertss = [
	{
		id: 1,
		title: "Przewóz osub",
		description:
			"Naszą główną ofertą są przejazdy Polska - Dania. Specjalizujemy się w przewozie osub prywatnych. Dzięki nam dojedziesz szybko i bezpiecznie od drzwi do drzwi. Wstarczy zadzwonić, umówić terminpodrózy a my zrobimy resztę. Na naszym pokładzie są mile widziane zwierzęta więc jeśli podrózujesz z twoim pupilem nie bedzie to zaden proble. Jest tez mozliwosc przygotowania fotelika dla twojego dziecka, jeśli jest taka potrzeba poinformuj nas o tymzebysmy mogli sie przygtowac. Po więcej informacji",
		iconClassName: "fa-solid fa-people-group",
	},
	{
		id: 2,
		title: "Kurier",
		description:
			"Świadczymy równiesz usługi kurjerskie Polska - Copenhaga. Jeśli chcesz wysłać paczke sprawdź naszą trasę ponizej jesli towja lokalizacja jest po drodze",
		iconClassName: "fa-solid fa-box-open",
	},
	{
		id: 3,
		title: "Oferta dla Firm",
		description:
			"W naszej ofercie mamy takeze coś dla firm. Jeśli szukasz transportu dla twojego zespołu to bardzo dobrze trafiłeś. Moe to być jedno razywy przejzad lub stała współpraca. by ustalić szczegóły",
		iconClassName: "fa-solid fa-business-time",
	},
];



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
			<Components.BuissnessDescription />
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
			<Components.Trust />
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
