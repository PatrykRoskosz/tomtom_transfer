import mapa from "../../images/headerPicture/mapa.png";
import Components from "../../components";
import carton from "../../images/cartTopPicture/carton.png";
import team from "../../images/cartTopPicture/team.png";

import "./RoutesPage.scss";

const oferss = [
	{
		id: 1,
		title: "Przewóz osub",
		text: "Naszą główną ofertą są przejazdy Polska - Dania. Specjalizujemy się w przewozie osub prywatnych. Dzięki nam dojedziesz szybko i bezpiecznie od drzwi do drzwi. Wstarczy zadzwonić, umówić terminpodrózy a my zrobimy resztę. Na naszym pokładzie są mile widziane zwierzęta więc jeśli podrózujesz z twoim pupilem nie bedzie to zaden proble. Jest tez mozliwosc przygotowania fotelika dla twojego dziecka, jeśli jest taka potrzeba poinformuj nas o tymzebysmy mogli sie przygtowac. Po więcej informacji",
		imgSrc: carton,
		imgAlt: "Renault Trafic",
		items: [
			{ type: "Liczba miejsc: ", value: "9" },
			{ type: "Klimatyzacja", value: "tak" },
		],
	},
	{
		id: 2,
		title: "Kurier",
		text: "Świadczymy równiesz usługi kurjerskie Polska - Copenhaga. Jeśli chcesz wysłać paczke sprawdź naszą trasę ponizej jesli towja lokalizacja jest po drodze",
		imgSrc: carton,
		imgAlt: "Renault Trafic",
		items: [{ type: "max waga: ", value: "100 kg" }],
	},
	{
		id: 3,
		title: "Oferta dla Firm",
		text: "W naszej ofercie mamy takeze coś dla firm. Jeśli szukasz transportu dla twojego zespołu to bardzo dobrze trafiłeś. Moe to być jedno razywy przejzad lub stała współpraca. by ustalić szczegóły",
		imgSrc: team,
		imgAlt: "Renault Trafic",
		items: [{ type: "Liczba osób: ", value: "24" }],
	},
];

const RoutesPage = () => {
	return (
		<section className='routes-section'>
			<table>
				<thead>
					<th>Wyjzad z</th>
					<th>Poniedziałek</th>
					<th>Wtorek</th>
					<th>Środa</th>
					<th>Czwartek</th>
					<th>Piątek</th>
					<th>Sobota</th>
					<th>Niedziela</th>
				</thead>
				<tbody>
					<tr>
						<td>Polska</td>{" "}
						<td>
							<i className='fa-sharp fa-regular fa-circle-xmark red'></i>
						</td>
						<td>
							<i className='fa-sharp fa-regular fa-circle-xmark red'></i>
						</td>
						<td>
							<i className='fa-regular fa-circle-check green'></i>
						</td>
						<td>
							<i className='fa-regular fa-circle-check green'></i>
						</td>
						<td>
							<i className='fa-sharp fa-regular fa-circle-xmark red'></i>
						</td>
						<td>
							<i className='fa-sharp fa-regular fa-circle-xmark red'></i>
						</td>
						<td>
							<i className='fa-regular fa-circle-check green'></i>
						</td>
					</tr>
					<tr>
						<td>Dania</td>{" "}
						<td>
							<i className='fa-regular fa-circle-check green'></i>
						</td>
						<td>
							<i className='fa-sharp fa-regular fa-circle-xmark red'></i>
						</td>
						<td>
							<i className='fa-sharp fa-regular fa-circle-xmark red'></i>
						</td>
						<td>
							<i className='fa-regular fa-circle-check green'></i>
						</td>
						<td>
							<i className='fa-regular fa-circle-check green'></i>
						</td>
						<td>
							<i className='fa-sharp fa-regular fa-circle-xmark red'></i>
						</td>
						<td>
							<i className='fa-regular fa-circle-check green'></i>
						</td>
					</tr>
				</tbody>
			</table>
			{/* <h1>Polska - Dania</h1>

			<div className='routes-hero-img'>
				<div className='pl-img'></div>
				<div className='dk-img'></div>
			</div> */}
			{oferss.map(item => (
				<Components.CartSidePhoto
					key={item.id}
					id={item.id}
					title={item.title}
					text={item.text}
					imgSrc={item.imgSrc}
					imgAlt={item.imgAlt}
					items={item.items}
				/>
			))}
			{/* <section className='route-section-description'>
				<div className='one'>
					<h1>Jedź z nami</h1>
					<p>
						Naszą główną ofertą są przejazdy Polska - Dania. Specjalizujemy się
						w przewozie osub prywatnych. Dzięki nam dojedziesz szybko i
						bezpiecznie od drzwi do drzwi. Wstarczy zadzwonić, umówić termin
						podrózy a my zrobimy resztę. Na naszym pokładzie są mile widziane
						zwierzęta więc jeśli podrózujesz z twoim pupilem nie bedzie to zaden
						proble. Jest tez mozliwosc przygotowania fotelika dla twojego
						dziecka, jeśli jest taka potrzeba poinformuj nas o tymzebysmy mogli
						sie przygtowac. Po więcej informacji
						<a href=''> Zadzwoń do nas! +48 000-000-000</a>
					</p>
					<p>
						Świadczymy równiesz usługi kurjerskie Polska - Copenhaga. Jeśli
						chcesz wysłać paczke sprawdź naszą trasę ponizej jesli towja
						lokalizacja jest po drodze{" "}
						<a href=''> Zadzwoń do nas! +48 000-000-000</a> ustalimy szczeguły.
					</p>
				</div>
				<div className='two'></div>
				<div className='three'></div>
				<div className='four'>
					<p>
						W naszej ofercie mamy takeze coś dla firm. Jeśli szukasz transportu
						dla twojego zespołu to bardzo dobrze trafiłeś. Moe to być jedno
						razywy przejzad lub stała współpraca. by ustalić szczegóły
						<a href=''> Zadzwoń do nas! +48 000-000-000</a>
					</p>
				</div>
			</section> */}

			<div className='the-course-of-the-route-wrapper'>
				<div className='the-course-of-the-route'>
					<h1>Nasza trasa</h1>
					<ul>
						<li>
							<i className='fa-solid fa-location-dot red'></i>Katowice
						</li>
						<li>
							<i className='fa-solid fa-location-dot red'></i>Opole
						</li>
						<li>
							<i className='fa-solid fa-location-dot red'></i>Oława
						</li>
						<li>
							<i className='fa-solid fa-location-dot red'></i>Wrocław
						</li>
						<li>
							<i className='fa-solid fa-location-dot red'></i>Żmigród
						</li>
						<li>
							<i className='fa-solid fa-location-dot red'></i>Rawicz
						</li>
						<li>
							<i className='fa-solid fa-location-dot red'></i>Leszno
						</li>
						<li>
							<i className='fa-solid fa-location-dot red'></i>Poznań
						</li>
						<li>
							<i className='fa-solid fa-location-dot red'></i>Świepodzin
						</li>
						<li>
							<i className='fa-solid fa-location-dot red'></i>Gorzów
						</li>
						<li>
							<i className='fa-solid fa-location-dot red'></i>Renice
						</li>
						<li>
							<i className='fa-solid fa-location-dot red'></i>Szczecin
						</li>
						<li>
							<i className='fa-solid fa-location-dot red'></i>Rostock
						</li>
						<li>
							<i className='fa-solid fa-location-dot red'></i>Copenhagen
						</li>
					</ul>
				</div>
				<div className='the-course-of-the-route-map'>
					<img src={mapa} alt='Mapa' />
				</div>
			</div>
		</section>
	);
};
export default RoutesPage;
