import { FaRegSquareCheck, FaRegRectangleXmark } from "react-icons/fa6";
import "./TripTable.scss";
import dimensions from "../../functionalities/browser-dimensions";
import i18n from "../../i18n";



const TripTable = () => {
	const { t } = i18n;

	return (
		<>
			{dimensions().width > 480 ? (
				<table>
					<thead>
						<tr>
							<th>{t("components:table.departure")}</th>
							<th>{t("components:table.monday")}</th>
							<th>{t("components:table.tuesday")}</th>
							<th>{t("components:table.wednesday")}</th>
							<th>{t("components:table.thursday")}</th>
							<th>{t("components:table.friday")}</th>
							<th>{t("components:table.saturday")}</th>
							<th>{t("components:table.sunday")}</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{t("components:table.poland")}</td>
							<td>
								<FaRegRectangleXmark className='i red' />
							</td>
							<td>
								<FaRegRectangleXmark className='i red' />
							</td>
							<td>
								<FaRegSquareCheck className='i green' />
							</td>
							<td>
								<FaRegSquareCheck className='i green' />
							</td>
							<td>
								<FaRegRectangleXmark className='i red' />
							</td>
							<td>
								<FaRegRectangleXmark className='i red' />
							</td>
							<td>
								<FaRegSquareCheck className='i green' />
							</td>
						</tr>
						<tr>
							<td>{t("components:table.denmark")}</td>
							<td>
								<FaRegSquareCheck className='i green' />
							</td>
							<td>
								<FaRegRectangleXmark className='i red' />
							</td>
							<td>
								<FaRegRectangleXmark className='i red' />
							</td>
							<td>
								<FaRegSquareCheck className='i green' />
							</td>
							<td>
								<FaRegSquareCheck className='i green' />
							</td>
							<td>
								<FaRegRectangleXmark className='i red' />
							</td>
							<td>
								<FaRegSquareCheck className='i green' />
							</td>
						</tr>
					</tbody>
				</table>
			) : (
				<table>
					<thead>
						<tr>
							<th>{t("components:table.departure")}</th>
							<th>{t("components:table.poland")}</th>
							<th>{t("components:table.denmark")}</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{t("components:table.monday")}</td>
							<td>
								<FaRegRectangleXmark className='i red' />
							</td>
							<td>
								<FaRegSquareCheck className='i green' />
							</td>
						</tr>
						<tr>
							<td>{t("components:table.tuesday")}</td>
							<td>
								<FaRegRectangleXmark className='i red' />
							</td>
							<td>
								<FaRegRectangleXmark className='i red' />
							</td>
						</tr>
						<tr>
							<td>{t("components:table.wednesday")}</td>
							<td>
								<FaRegSquareCheck className='i green' />
							</td>
							<td>
								<FaRegRectangleXmark className='i red' />
							</td>
						</tr>
						<tr>
							<td>{t("components:table.thursday")}</td>
							<td>
								<FaRegSquareCheck className='i green' />
							</td>
							<td>
								<FaRegSquareCheck className='i green' />
							</td>
						</tr>
						<tr>
							<td>{t("components:table.friday")}</td>
							<td>
								<FaRegRectangleXmark className='i red' />
							</td>
							<td>
								<FaRegSquareCheck className='i green' />
							</td>
						</tr>
						<tr>
							<td>{t("components:table.saturday")}</td>
							<td>
								<FaRegRectangleXmark className='i  red' />
							</td>
							<td>
								<FaRegRectangleXmark className='i red' />
							</td>
						</tr>
						<tr>
							<td>{t("components:table.sunday")}</td>
							<td>
								<FaRegSquareCheck className='i green' />
							</td>
							<td>
								<FaRegSquareCheck className='i green' />
							</td>
						</tr>
					</tbody>
				</table>
			)}
		</>
	);
};

export default TripTable;
