import busImg from "../../images/cartTopPicture/auto.jpg";
import CartSidePhoto from "../../components/carts/CartSidePhoto/CartSidePhoto";
import traficBlack from "../../images/cars/traficBlack.png";
import traficGrey from "../../images/cars/traficGrey.png";
import vivaro from "../../images/cars/vivaro.png";
import Navigation from "../../components/navigation/Navigation";


import "./RentalCar.scss";

const RentalCar = () => {
	const cars = [
		{
			id: 1,
			title: "Renault Trafic",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, assumenda numquam quidem voluptatum at praesentium expedita incidunt delectus in accusantium!",
			imgSrc: traficBlack,
			imgAlt: "Renault Trafic",
			items: [{type: "Kolor: ", value: "Czarny"},{type: "Liczba miejsc: ", value: "9"},{type: "Klimatyzacja", value: "tak"},{type: "Skrzynia biegów: ", value: "manualna"},{type: "Typ silnika: ", value: "Diesel"},{type: "moc", value: "100"}]
		},
		{
			id: 2,
			title: "Renault Trafic",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, assumenda numquam quidem voluptatum at praesentium expedita incidunt delectus in accusantium!",
			imgSrc: traficGrey,
			imgAlt: "Renault Trafic",
			items: [{type: "Kolor: ", value: "Srebrny"},{type: "Liczba miejsc: ", value: "9"},{type: "Klimatyzacja", value: "tak"},{type: "Skrzynia biegów: ", value: "manualna"},{type: "Typ silnika: ", value: "Diesel"},{type: "moc", value: "100"}]

		},
		{
			id: 3,
			title: "Opel Vivaro",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, assumenda numquam quidem voluptatum at praesentium expedita incidunt delectus in accusantium!",
			imgSrc: vivaro,
			imgAlt: "Opel Vivaro",
			items: [{type: "Kolor: ", value: "Czarny"},{type: "Liczba miejsc: ", value: "9"},{type: "Klimatyzacja", value: "tak"},{type: "Skrzynia biegów: ", value: "manualna"},{type: "Typ silnika: ", value: "Diesel"},{type: "moc", value: "100"}]

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
