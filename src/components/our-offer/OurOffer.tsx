import { Link } from "react-router-dom";
import Components from "..";
import "./OurOffer.scss";

const OurOffer = () => {
	return (
		<section className='our-offer'>
			<div className='our-offer-text-section'>
				<h2>Nasza Oferta</h2>
			</div>
			<div className='our-offer-links-list'>
				<ul>
					<li className='our-offer-links-list-item'>
						<h3>Transpor Osób</h3>
						<img src='' alt='' />
						<Link to='/'>Szczegóły</Link>
					</li>
					<li className='our-offer-links-list-item'>
						<h3>Przesyłki</h3>
						<img src='' alt='' />
						<Link to='/'>Szczegóły</Link>
					</li>
					<li className='our-offer-links-list-item'>
						<h3>Obsługa wydarzeń</h3>
						<img src='' alt='' />
						<Link to='/'>Szczegóły</Link>
					</li>
					<li className='our-offer-links-list-item'>
						<h3>Wynajem samochodów</h3>
						<img src='' alt='' />
						<Link to='/'>Szczegóły</Link>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default OurOffer;
