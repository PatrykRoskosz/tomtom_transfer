import { Link } from "react-router-dom";

import keyCar from "../../images/ourOffer/keyCar.jpg";
import wedding from "../../images/ourOffer/wedding.jpg";
import toast from "../../images/ourOffer/toast.jpg";
import smallToast from "../../images/ourOffer/smallToast.jpg";
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
						<img src={smallToast} alt='' />
						<Link to='/'>Szczegóły</Link>
					</li>
					<li className='our-offer-links-list-item'>
						<h3>Przesyłki</h3>
						<img src={toast} alt='' />
						<Link to='/'>Szczegóły</Link>
					</li>
					<li className='our-offer-links-list-item'>
						<h3>Obsługa wydarzeń</h3>
						<img src={wedding} alt='wesele' />
						<Link to='/'>Szczegóły</Link>
					</li>
					<li className='our-offer-links-list-item'>
						<h3>Wynajem samochodów</h3>
						<img src={keyCar} alt='kluczyk do auta' />
						<Link to='/'>Szczegóły</Link>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default OurOffer;
