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
						<img src={smallToast} alt='' />
						<h3>Transpor Osób</h3>
						<Link to='/'>Szczegóły</Link>
					</li>
					<li className='our-offer-links-list-item'>
						<img src={toast} alt='' />
						<h3>Przesyłki</h3>
						<Link to='/'>Szczegóły</Link>
					</li>
					<li className='our-offer-links-list-item'>
						<img src={wedding} alt='wesele' />
						<h3>Obsługa wydarzeń</h3>

						<Link to='/'>Szczegóły</Link>
					</li>
					<li className='our-offer-links-list-item'>
						<img src={keyCar} alt='kluczyk do auta' />
						<h3>Wynajem samochodów</h3>

						<Link to='/'>Szczegóły</Link>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default OurOffer;
