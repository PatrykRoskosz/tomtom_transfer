import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import Wrapper from "../../components/wrapper/Wrapper";
import Footer from "../../components/footer/Footer";

const RootLoyout = () => {
	return (
		<>
			<Header />
			<Wrapper>
				<Outlet />
			</Wrapper>
			<Footer />
		</>
	);
};

export default RootLoyout;
