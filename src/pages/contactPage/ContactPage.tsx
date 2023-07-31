import "./ContactPage.scss";
import blackTrafic from "../../images/cars/traficBlack.png";
import Components from "../../components";
import { FaPhone, FaEnvelope, FaBuildingColumns } from "react-icons/fa6";

const ContactPage = () => {
	return (
		<>
			<div>
				<section className='tomtom-section-contact'>
					<h1>Kontakt</h1>
					<div className='frame'>
						<div className='contact'>
							<div className="p">
								<div className='round'>
									<FaPhone className='i' />
								</div>
								<a href='tel:+48539863374'>+48 539 863 374</a>
							</div>
							<div className="p">
								<div className='round'>
									<FaPhone className='i' />
								</div>
								<a href='tel:+48880743030 '>+48 880 743 030</a>
							</div>
							<div className="p">
								<div className='round'>
									<FaEnvelope className='i' />
								</div>
								<a
									href='mailto:transport.rp77@gmail.com'
									className='small-text'>
									transport.rp77@gmail.com
								</a>
							</div>
							<div className='contact-photo'>
								<img src={blackTrafic} alt='zdięcie' />
							</div>
						</div>
					</div>
				</section>
				<Components.ContactUsToDay />
			</div>
		</>
	);
};

export default ContactPage;
