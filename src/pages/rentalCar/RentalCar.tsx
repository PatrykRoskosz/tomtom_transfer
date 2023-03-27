import busImg from "../../images/cartTopPicture/auto.jpg";
import CartSidePhoto from "../../components/carts/CartSidePhoto/CartSidePhoto";

import "./RentalCar.scss";

const RentalCar = () => {
	const cars = [
		{
			id: 1,
			title: "TomTom Transfer",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, assumenda numquam quidem voluptatum at praesentium expedita incidunt delectus in accusantium!",
			imgSrc: busImg,
			imgAlt: "siedziba firmy",
			items: [{type: "moc", value: "100"},{type: "moc", value: "100"},{type: "moc", value: "100"},{type: "moc", value: "100"},{type: "moc", value: "100"},{type: "moc", value: "100"}]
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
		
			<section className='tomtom-section-our-cars'>
				<h1>Nasze auta</h1>
				<ul>
					{cars.map(car => (
						<CartSidePhoto key={car.id}
							id={car.id}
							title={car.title}
							text={car.text}
							imgSrc={car.imgSrc}
							imgAlt={car.imgAlt}
							items={car.items}
						/>
					))}
				</ul>
			</section>
		
	);
};
export default RentalCar;
