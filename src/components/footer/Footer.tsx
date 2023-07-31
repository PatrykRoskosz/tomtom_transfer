import { Link } from "react-router-dom";
import i18n from "../../i18n"
import "./Footer.scss";

const Footer = () => {
	const { t } = i18n;
	return (
		<>
			<footer>
				<section className='tomtom-footer-sections'>
					<section className='tomtom-footer-contact'>
					
						<div>
							<label htmlFor='phone'>{t("components:phone")}: </label>
							<a href='tel:+48880743030 ' id="phone">+48 880 743 030</a>
						</div>
						<div>
							<label htmlFor='email'>Email: </label>
							<a href='mailto:transport.rp77@gmail.com' className='small-text'>
								transport.rp77@gmail.com
							</a>
						</div>
						<div className="tomtom-footer-hero"></div>
					</section>
					<section className='tomtom-footer-navigation'>
						<Link to='/'>{t("components:navigation.home")}</Link>
						<Link to='/rental-car'>{t("components:navigation.car_rental")}</Link>
						<Link to='/routes'>{t("components:navigation.trips_route")}</Link>
						<Link to='/event-service'>{t("components:navigation.Transportation_of_events")}</Link>
						<Link to='/contact'>{t("components:navigation.contact")}</Link>
						<Link to='/statute'>{t("components:navigation.statute")}</Link>
						<div className="tomtom-footer-hero"></div>
					</section>
				</section>
				<div className='tomtom-footer-info'>
					<p className="tomtom-footer-info-paragraph">TomTom Transfer 2023 &copy;</p>
				</div>
				<div className='footer-hero-img'></div>
			</footer>
		</>
	);
};
export default Footer;
