import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
	return (
		<footer>
			<section className='tomtom-footer-sections'>
				<section className='tomtom-footer-contact'>
                    <div>
                        <label htmlFor="adres">Adres:</label>
                        <div id="adres">ul. sezamkowa gdzieśtam 00-000</div>
                    </div>
					<div>
						<label htmlFor='phone'>Telefon: </label>
						<a href='' id='phone'>
							+48 888 999 000
						</a>
					</div>
                    <div>
                    <label htmlFor='email'>Email: </label>
					<a href=''> lalala@lal.cl</a>
                    </div>

					
				</section>
				<section className='tomtom-footer-navigation'>
					<Link to='/'>Home</Link>
					<Link to='/rental-car'>Rental car</Link>
					<Link to='/routes'>Routes</Link>
					<Link to='/event-service'>Events service</Link>
					<Link to='/contact'>Contact</Link>
				</section>
			</section>
			<div className='tomtom-footer-info'>
				<p>TomTom Transfer 2023 &copy;</p>
			</div>
		</footer>
	);
};
export default Footer;
