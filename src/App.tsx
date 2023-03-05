import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLoyout from "./pages/root/RootLoyout";
import Home from "./pages/home/Home";
import RentalCar from "./pages/rentalCar/RentalCar";
import RoutesPage from "./pages/routesPage/RoutesPage";
import EventService from "./pages/eventService/EventService";
import ErrorPage from "./pages/errorPage/ErrorPage";
import ContactPage from "./pages/contactPage/ContactPage";

import "./App.scss";

const App = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <RootLoyout />,
			errorElement: <ErrorPage />,
			children: [
				{ index: true, element: <Home /> },
				{ path: "rental-car", element: <RentalCar /> },
				{ path: "routes", element: <RoutesPage /> },
				{ path: "event-service", element: <EventService /> },
				{ path: "contact", element: <ContactPage /> },
			],
		},
	]);
	return <RouterProvider router={router} />;
};

export default App;
