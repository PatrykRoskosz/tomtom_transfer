import { FaRegSquareCheck, FaRegRectangleXmark } from "react-icons/fa6";
import "./TripTable.scss";
import dimensions from "../../functionalities/browser-dimensions";

const TripTable = () => {
	return (
		<>
			{dimensions().width > 480?<table>
				<thead>
					<tr>
						<th>Wyjzad</th>
						<th>Poniedziałek</th>
						<th>Wtorek</th>
						<th>Środa</th>
						<th>Czwartek</th>
						<th>Piątek</th>
						<th>Sobota</th>
						<th>Niedziela</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Polska</td>
						<td>
							<FaRegRectangleXmark className='red' />
						</td>
						<td>
							<FaRegRectangleXmark className='red' />
						</td>
						<td>
							<FaRegSquareCheck className='green' />
						</td>
						<td>
							<FaRegSquareCheck className='green' />
						</td>
						<td>
							<FaRegRectangleXmark className='red' />
						</td>
						<td>
							<FaRegRectangleXmark className='red' />
						</td>
						<td>
							<FaRegSquareCheck className='green' />
						</td>
					</tr>
					<tr>
						<td>Dania</td>
						<td>
							<FaRegSquareCheck className='green' />
						</td>
						<td>
							<FaRegRectangleXmark className='red' />
						</td>
						<td>
							<FaRegRectangleXmark className='red' />
						</td>
						<td>
							<FaRegSquareCheck className='green' />
						</td>
						<td>
							<FaRegSquareCheck className='green' />
						</td>
						<td>
							<FaRegRectangleXmark className=' red' />
						</td>
						<td>
							<FaRegSquareCheck className='green' />
						</td>
					</tr>
				</tbody>
			</table>
			:
			<table>
				<thead>
					<tr>
						<th>Wyjzad</th>
						<th>Polska</th>
						<th>Dannia</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Poniedziałek</td>
						<td>
							<FaRegRectangleXmark className=' red' />
						</td>
						<td>
							<FaRegSquareCheck className='green' />
						</td>
					</tr>
					<tr>
						<td>Wtore</td>
						<td>
							<FaRegRectangleXmark className=' red' />
						</td>
						<td>
							<FaRegRectangleXmark className=' red' />
						</td>
					</tr>
					<tr>
						<td>Środa</td>
						<td>
							<FaRegSquareCheck className='green' />
						</td>
						<td>
							<FaRegRectangleXmark className=' red' />
						</td>
					</tr>
					<tr>
						<td>Czwartek</td>
						<td>
							<FaRegSquareCheck className='green' />
						</td>
						<td>
							<FaRegSquareCheck className='green' />
						</td>
					</tr>
					<tr>
						<td>Piątek</td>
						<td>
							<FaRegRectangleXmark className=' red' />
						</td>
						<td>
							<FaRegSquareCheck className='green' />
						</td>
					</tr>
					<tr>
						<td>Sobota</td>
						<td>
							<FaRegRectangleXmark className=' red' />
						</td>
						<td>
							<FaRegRectangleXmark className=' red' />
						</td>
					</tr>
					<tr>
						<td>Niedziela</td>
						<td>
							<FaRegSquareCheck className='green' />
						</td>
						<td>
							<FaRegSquareCheck className='green' />
						</td>
					</tr>
				</tbody>
			</table>}
		</>
	);
};

export default TripTable;
