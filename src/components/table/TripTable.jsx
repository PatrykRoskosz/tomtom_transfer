import { FaRegSquareCheck, FaRegRectangleXmark } from "react-icons/fa6";
import './TripTable.scss'

const TripTable = () => {
	return (
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
					<td>Dania</td>{" "}
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
	);
};

export default TripTable;
