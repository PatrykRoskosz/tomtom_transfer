import { NavLink } from "react-router-dom";
const NavigationItem = () => {
	const navItems = [
		{
			id: 1,
			name: "home",
			url: "/",
		},
		{
			id: 2,
			name: "car rent",
			url: "/rental-car",
		},
		{
			id: 3,
			name: "routes",
			url: "/routes",
		},
		{
			id: 4,
			name: "event service",
			url: "/event-service",
		},
		{
			id: 5,
			name: "contact",
			url: "/contact",
		},
	];

	return (
		<>
			{navItems.map(navElement => (
				<li key={navElement.id}>
					<NavLink
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
