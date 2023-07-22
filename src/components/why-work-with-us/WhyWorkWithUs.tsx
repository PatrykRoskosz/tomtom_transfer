import "./WhyWorkWithUs.scss";
import WhyWorkWithUsItem from "./WhyWorkWithUsItem";

const WhyWorkWithUs = () => {
	return (
		<section className='why-work-with-us'>
			<div className='why-work-with-us-hero-img'></div>
			<div className='why-work-with-us-title'>
				<h2>Dlaczego my</h2>
			</div>
			<div className='why-work-with-us-reasons'>
				<WhyWorkWithUsItem additionalSign='%' fromValue='0' toValue='100'>
					Zadowolonych klientów
				</WhyWorkWithUsItem>
				<WhyWorkWithUsItem fromValue='0' toValue='20'>
					Lat Doświadczenia
				</WhyWorkWithUsItem>
				<WhyWorkWithUsItem fromValue='0' toValue='468'>
					tysiecy przejechanych kilometrów
				</WhyWorkWithUsItem>
				<WhyWorkWithUsItem fromValue='0' toValue='2500'>
					liczba odbytych przejzadów
				</WhyWorkWithUsItem>
			</div>
		</section>
	);
};

export default WhyWorkWithUs;
