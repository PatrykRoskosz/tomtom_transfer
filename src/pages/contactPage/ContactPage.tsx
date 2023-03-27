import "./ContactPage.scss";

const ContactPage = () => {
	return (
		<section className='tomtom-section-contact'>
			<h1>Kontakt</h1>
			<div className='frame'>
				<div className='contact'>
					<p><i className="fa-sharp fa-solid fa-location-dot"></i> ul.jasjd <br /> 00-000 miasto <br />	
					kraj</p>
					<p>
					<i className="fa-sharp fa-solid fa-phone"></i>
						<a href=''>+48 000-000-000</a>
					</p>
					<p><i className="fa-sharp fa-solid fa-envelope"></i> laslaslas@lals.com</p>
					<div className="contact-photo"><img src="" alt="zdięcie" /></div>
				</div>
			</div>
		</section>
	);
};

export default ContactPage;
