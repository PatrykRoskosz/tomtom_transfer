import mapa from "../../images/headerPicture/mapa.png"
import "./RoutesPage.scss";

const RoutesPage = () => {
	return (
		<section className='routes-section'>
			<h1>Polska - Dania</h1>

			<div className='routes-hero-img'>
				<div className='pl-img'></div>
				<div className='dk-img'></div>
			</div>

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
            <div className="the-course-of-the-route-wrapper">
                <div className="the-course-of-the-route">
                    <h1>Nasza trasa Polska - Dania</h1>
                    <p><i className="fa-solid fa-location-dot red"></i>Katowice</p>
                    <p><i className="fa-solid fa-location-dot red"></i>Opole</p>
                    <p><i className="fa-solid fa-location-dot red"></i>Oława</p>
                    <p><i className="fa-solid fa-location-dot red"></i>Wrocław</p>
                    <p><i className="fa-solid fa-location-dot red"></i>Żmigród</p>
                    <p><i className="fa-solid fa-location-dot red"></i>Rawicz</p>
                    <p><i className="fa-solid fa-location-dot red"></i>Leszno</p>
                    <p><i className="fa-solid fa-location-dot red"></i>Poznań</p>
                    <p><i className="fa-solid fa-location-dot red"></i>Świepodzin</p>
                    <p><i className="fa-solid fa-location-dot red"></i>Gorzów</p>
                    <p><i className="fa-solid fa-location-dot red"></i>Renice</p>
                    <p><i className="fa-solid fa-location-dot red"></i>Szczecin</p>
                    <p><i className="fa-solid fa-location-dot red"></i>Rostock</p>
                    <p><i className="fa-solid fa-location-dot red"></i>Copenhagen</p>
                </div>
                <div className="the-course-of-the-route-map">
                <img src={mapa} alt="Mapa" />
                </div>
              
            </div>
		</section>
	);
};
export default RoutesPage;
