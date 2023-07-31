import "./DepartureMap.scss";
import { FaLocationDot } from "react-icons/fa6";
import mapsImage from "../../images/maps/mapaformat.png";
import i18n from "../../i18n";

const DepartureMap = () => {
	const { t } = i18n;
	return (
		<div className='the-course-of-the-route-wrapper'>
			<div className='the-course-of-the-route'>
				<h1>{t("components:departure_map.title")}</h1>

				<ul>
					<li>
						<FaLocationDot className='i red' />
						Katowice
					</li>
					<li>
						<FaLocationDot className='i red' />
						Opole
					</li>
					<li>
						<FaLocationDot className='i red' />
						Oława
					</li>
					<li>
						<FaLocationDot className='i red' />
						Wrocław
					</li>
					<li>
						<FaLocationDot className='i red' />
						Żmigród
					</li>
					<li>
						<FaLocationDot className='i red' />
						Rawicz
					</li>
					<li>
						<FaLocationDot className='i red' />
						Leszno
					</li>
					<li>
						<FaLocationDot className='i red' />
						Bydgoszcz
					</li>
					<li>
						<FaLocationDot className='i red' />
						Inowrocław
					</li>
					<li>
						<FaLocationDot className='i red' />
						Gniezno
					</li>
					<li>
						<FaLocationDot className='i red' />
						Poznań
					</li>
					<li>
						<FaLocationDot className='i red' />
						Świebodzin
					</li>
					<li>
						<FaLocationDot className='i red' />
						Gorzów Wielkopolski
					</li>
					<li>
						<FaLocationDot className='i red' />
						Szczecin
					</li>
					<li>
						<FaLocationDot className='i red' />
						Rostock
					</li>
					<li>
						<FaLocationDot className='i red' />
						Kopenhaga
					</li>
				</ul>
			</div>
			<div className='the-course-of-the-route-map'>
				<img src={mapsImage} alt='Mapa' />
			</div>
		</div>
	);
};

export default DepartureMap;
