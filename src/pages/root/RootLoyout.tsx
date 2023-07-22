import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import Wrapper from "../../components/wrapper/Wrapper";
import Component from "../../components";
import Navigation from "../../components/navigation/Navigation";


const RootLoyout = () => {
	return (
		<>
		
			<Header />
			<Navigation />
			<Component.BurgerButton />
			<Wrapper>
				<Outlet />
			</Wrapper>
			<Component.Footer />
		</>
	);
};

export default RootLoyout;
