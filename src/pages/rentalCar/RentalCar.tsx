import CartSidePhoto from "../../components/carts/CartSidePhoto/CartSidePhoto";
import Components from "../../components";
import traficBlack from "../../images/cars/traficBlack.png";
import traficGrey from "../../images/cars/traficGrey.png";
import vivaro from "../../images/cars/vivaro.png";
import i18n from "../../i18n";

import "./RentalCar.scss";

const RentalCar = () => {
	const { t } = i18n;
	const cars = [
		{
			id: 1,
			title: t("pages:car_rental.cars.black_trafic.name"),
			text: t("pages:car_rental.cars.black_trafic.description"),
			imgSrc: traficBlack,
			imgAlt: t("pages:car_rental.cars.black_trafic.name"),
			items: [
				{
					type: t("pages:car_rental.parameter_list.color"),
					value: t("pages:car_rental.cars.black_trafic.color"),
				},
				{
					type: t("pages:car_rental.parameter_list.number_of_seats"),
					value: t("pages:car_rental.cars.black_trafic.number_of_seats"),
				},
				{
					type: t("pages:car_rental.parameter_list.air_conditioning"),
					value: t("pages:car_rental.cars.black_trafic.air_conditioning"),
				},
				{
					type: t("pages:car_rental.parameter_list.transmission"),
					value: t("pages:car_rental.cars.black_trafic.transmission"),
				},
				{
					type: t("pages:car_rental.parameter_list.engine_type"),
					value: t("pages:car_rental.cars.black_trafic.engine_type"),
				},
				{
					type: t("pages:car_rental.parameter_list.engine_power"),
					value: t("pages:car_rental.cars.black_trafic.engine_power"),
				},
			],
		},
		{
			id: 2,
			title: t("pages:car_rental.cars.silver_trafic.name"),
			text: t("pages:car_rental.cars.silver_trafic.description"),
			imgSrc: traficGrey,
			imgAlt: t("pages:car_rental.cars.silver_trafic.name"),
			items: [
				{
					type: t("pages:car_rental.parameter_list.color"),
					value: t("pages:car_rental.cars.silver_trafic.color"),
				},
				{
					type: t("pages:car_rental.parameter_list.number_of_seats"),
					value: t("pages:car_rental.cars.silver_trafic.number_of_seats"),
				},
				{
					type: t("pages:car_rental.parameter_list.air_conditioning"),
					value: t("pages:car_rental.cars.silver_trafic.air_conditioning"),
				},
				{
					type: t("pages:car_rental.parameter_list.transmission"),
					value: t("pages:car_rental.cars.silver_trafic.transmission"),
				},
				{
					type: t("pages:car_rental.parameter_list.engine_type"),
					value: t("pages:car_rental.cars.silver_trafic.engine_type"),
				},
				{
					type: t("pages:car_rental.parameter_list.engine_power"),
					value: t("pages:car_rental.cars.silver_trafic.engine_power"),
				},
			],
		},
		{
			id: 3,
			title: t("pages:car_rental.cars.silver_vivaro.name"),
			text: t("pages:car_rental.cars.silver_vivaro.description"),
			imgSrc: vivaro,
			imgAlt: t("pages:car_rental.cars.silver_vivaro.name"),
			items: [
				{
					type: t("pages:car_rental.parameter_list.color"),
					value: t("pages:car_rental.cars.silver_vivaro.color"),
				},
				{
					type: t("pages:car_rental.parameter_list.number_of_seats"),
					value: t("pages:car_rental.cars.silver_vivaro.number_of_seats"),
				},
				{
					type: t("pages:car_rental.parameter_list.air_conditioning"),
					value: t("pages:car_rental.cars.silver_vivaro.air_conditioning"),
				},
				{
					type: t("pages:car_rental.parameter_list.transmission"),
					value: t("pages:car_rental.cars.silver_vivaro.transmission"),
				},
				{
					type: t("pages:car_rental.parameter_list.engine_type"),
					value: t("pages:car_rental.cars.silver_vivaro.engine_type"),
				},
				{
					type: t("pages:car_rental.parameter_list.engine_power"),
					value: t("pages:car_rental.cars.silver_vivaro.engine_power"),
				},
			],
		},
	];
	return (
		<section className='tomtom-section-our-cars'>
			<h1>Nasze auta</h1>
			<Components.BuissnessDescription text={t("components:rental_car-text")}/>
			<ul>
				{cars.map(car => (
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
			<Components.ContactUsToDay />
		</section>
	);
};
export default RentalCar;
