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

const oferta = [
	{
		id: 1,
		title: "Przewozy osobowe",
		text: "Indywidualne podróże: Jeśli planujesz wyjazd do Danii w celach biznesowych, turystycznych lub osobistych, oferujemy komfortowy i bezpieczny transport osobowy. Grupowe przewozy: Organizujesz wyjazd integracyjny, konferencję czy wycieczkę grupową? Nasze pojazdy są idealnym rozwiązaniem dla grup ludzi o różnej wielkości. ",
		imgSrc: "",
		imgAlt: "",
		items: [],
	},
	{
		id: 2,
		title: "Przewóz paczek",
		text: "Gwarantujemy szybki i pewny przewóz paczek od drzwi do drzwi. Twoje paczki dotrą do odbiorcy w Danii sprawnie i w nienaruszonym stanie.",
		imgSrc: "",
		imgAlt: "",
		items: [],
	},
	{
		id: 3,
		title: "Przewozy pracowników firm",
		text: "Zapewniamy wygodny transport pracowników do ich miejsca pracy w Danii, co wpływa na ich zadowolenie i efektywność.",
		imgSrc: "",
		imgAlt: "",
		items: [],
	},
];

const RoutesPage = () => {
	const { t } = i18n;
	const oferta = [
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
			<Components.TripTable />
			<div className='routes-section-design-description'>
				Jesteśmy dynamiczną i doświadczoną firmą transportową, skupioną na
				dostarczaniu niezawodnych usług przewozu osób oraz paczek z Polski do
				Danii. Nasza misja polega na zapewnieniu bezpiecznych, komfortowych i
				terminowych podróży, które spełniają oczekiwania naszych Klientów w
				każdym calu.
			</div>
			<ul className='routes-section-ul'>
				{oferta.map(car => (
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
