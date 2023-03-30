import { NavLink } from "react-router-dom";
import {
	useDispatchCtxNav,
	ActionTypes,
} from "../../context/navigation/NavContext";
import i18n from "../../i18n";

const NavigationItem = () => {
	const dispatch = useDispatchCtxNav();
	const hideNavHandler = () => {
		dispatch({ type: ActionTypes.HIDE });
	};
	const navItems = [
		{
			id: 1,
			name: i18n.t("components:navigation.home"),
			url: "/",
		},
		{
			id: 2,
			name: i18n.t("components:navigation.car_rental"),
			url: "/rental-car",
		},
		{
			id: 3,
			name: i18n.t("components:navigation.trips_route"),
			url: "/routes",
		},
		{
			id: 4,
			name: i18n.t("components:navigation.Transportation_of_events"),
			url: "/event-service",
		},
		{
			id: 5,
			name: i18n.t("components:navigation.contact"),
			url: "/contact",
		},
	];

	return (
		<>
			{navItems.map(navElement => (
				<li key={navElement.id}>
					<NavLink
						onClick={hideNavHandler}
						to={navElement.url}
						className={({ isActive }) =>
							isActive ? "tomtom-nav-logo active" : "tomtom-nav-logo "
						}>
						{navElement.name}
					</NavLink>
				</li>
			))}
		</>
	);
};

export default NavigationItem;
