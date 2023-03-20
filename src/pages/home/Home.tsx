import CartTop, { CartTopType } from "../../components/carts/CartTop";
import CartSidePhoto from "../../components/carts/CartSidePhoto/CartSidePhoto";
import kImg from "../../images/cartTopPicture/kopenhaga.jpg";
import busImg from "../../images/cartTopPicture/auto.jpg";
import SmallCard from "../../components/carts/SmallCard/SmallCard";
import "./Home.scss";

const Home = () => {
	const services: CartTopType[] = [
		{
			title: "Transfer Polska-Dania",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, error?",
			imgSrc: kImg,
			imgAlt: "zdięcie",
			buttonText: "jedz z nami",
			url: "/routes",
		},
		{
			title: "Transfer Polska-Dania",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, error?",
			imgSrc: kImg,
			imgAlt: "zdięcie",
			buttonText: "jedz z nami",
			url: "/routes",
		},
		{
			title: "Transfer Polska-Dania",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, error?",
			imgSrc: kImg,
			imgAlt: "zdięcie",
			buttonText: "jedz z nami",
			url: "/routes",
		},
		{
			title: "Transfer Polska-Dania",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, error?",
			imgSrc: kImg,
			imgAlt: "zdięcie",
			buttonText: "jedz z nami",
			url: "/routes",
		},
		{
			title: "Transfer Polska-Dania",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, error?",
			imgSrc: kImg,
			imgAlt: "zdięcie",
			buttonText: "jedz z nami",
			url: "/routes",
		},
	];
	const aboutUs = {
		id: 1,
		title: "TomTom Transfer",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, assumenda numquam quidem voluptatum at praesentium expedita incidunt delectus in accusantium!",
		imgSrc: busImg,
		imgAlt: "siedziba firmy",
	};

	const whyUs = [
		{
			id: 1,
			title: "Bezpieczeństwo",
			text: "Nie martw się podróą wsiądź i się odpręz my zadbamy o resztę",
		},
		{
			id: 2,
			title: "Bezpieczeństwo",
			text: "Nie martw się podróą wsiądź i się odpręz my zadbamy o resztę",
		},
		{
			id: 3,
			title: "Bezpieczeństwo",
			text: "Nie martw się podróą wsiądź i się odpręz my zadbamy o resztę",
		},
	];

	const cars = [
		{
			id: 1,
			title: "TomTom Transfer",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, assumenda numquam quidem voluptatum at praesentium expedita incidunt delectus in accusantium!",
			imgSrc: busImg,
			imgAlt: "siedziba firmy",
		},
		{
			id: 2,
			title: "TomTom Transfer",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, assumenda numquam quidem voluptatum at praesentium expedita incidunt delectus in accusantium!",
			imgSrc: busImg,
			imgAlt: "siedziba firmy",
		},
		{
			id: 3,
			title: "TomTom Transfer",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, assumenda numquam quidem voluptatum at praesentium expedita incidunt delectus in accusantium!",
			imgSrc: busImg,
			imgAlt: "siedziba firmy",
		},
	];

	return (
		<section className='home'>
			<h1>Wyjazdy Polsk-Dania</h1>
			<p>
				Wyjedź z nami do dani, wyślij paczkę wynajmij auto, lub wynajmij nas do
				obsugi transportowej twojego wydarzenia
			</p>
			<section className='services'>
				<h1>Usługi</h1>
				<ul>
					{services.map(s => (
						<CartTop
							title={s.title}
							text={s.text}
							imgSrc={s.imgSrc}
							imgAlt={s.imgAlt}
							buttonText={s.buttonText}
							url={s.url}
						/>
					))}
				</ul>
			</section>
			<section className='about-us'>
				<h1>O Nas</h1>
				<CartSidePhoto
					id={aboutUs.id}
					title={aboutUs.title}
					text={aboutUs.text}
					imgSrc={aboutUs.imgSrc}
					imgAlt={aboutUs.imgAlt}
				/>
				<div className='tomtom-hero-image'></div>
			</section>

			<section className='why-us'>
				<h1>Dlaczego my</h1>
				<ul>
					{whyUs.map(card => (
						<SmallCard
							key={card.id}
							title={card.title}
							text={card.text}
							bg='#b55400'
						/>
					))}
				</ul>
			</section>
			<section className='our-cars'>
				<h1>Nasze auta</h1>
				<ul>
					{cars.map(car => (
						<CartSidePhoto
							id={car.id}
							title={car.title}
							text={car.text}
							imgSrc={car.imgSrc}
							imgAlt={car.imgAlt}
						/>
					))}
				</ul>
			</section>
		</section>
	);
};
export default Home;
