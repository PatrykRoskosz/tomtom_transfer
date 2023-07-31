import { useEffect } from "react";
import Components from "../../components";
import Header from "../../components/header/Header";
import "./Home.scss";


const Home = () => {
	useEffect(() => {
    const script = document.createElement('script');

    script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v9.0&appId=your-app-id&autoLogAppEvents=1";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);
	const whyUs = [
		{
			id: 1,
			title: "Bezpieczeństwo",
			text: "Nie martw się podróą wsiądź i się odpręz my zadbamy o resztę",
			iconName: "fa-solid fa-user-secret",
		},
		{
			id: 2,
			title: "Punktualnośc",
			text: "Nie martw się podróą wsiądź i się odpręz my zadbamy o resztę",
			iconName: "fa-regular fa-clock",
		},
		{
			id: 3,
			title: "Cena",
			text: "Nie martw się podróą wsiądź i się odpręz my zadbamy o resztę",
			iconName: "fa-sharp fa-solid fa-sack-dollar",
		},
	];

	return (
		<section className='home'>
			<Header />
			<Components.OurOffer />
			<Components.AboutUsVideo />
			<Components.WhyWorkWithUs />
			<Components.ContactUsToDay />
		</section>
	);
};
export default Home;
