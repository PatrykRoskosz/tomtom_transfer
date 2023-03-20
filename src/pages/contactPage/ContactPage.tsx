import "./ContactPage.scss";

const ContactPage = () => {
	return (
		<section className='tomtom-section-contact'>
			<h1>Kontakt</h1>
			<section className='tomtom-section-contact__data'>
				<div className="contact-wrapper">
					<h2>Siedziba firmy</h2>
					<div className="contact-data">
						<p>
							<span>ul:</span> jakas ulica 10b
						</p>
						<p>
							<span>miasto:</span>Leszno
						</p>
						<p>
							<span>Kod pocztowy:</span>00-000
						</p>
					</div>
				</div>
				<div className="contact-wrapper">
					<h2>Zadzwoń do nas</h2>
					<div className="contact-data">
						<p>
							<span>Robert:</span> <a href=''>999-000-000</a>
						</p>
						<p>
							<span>Patrycja:</span> <a href=''>999-000-000</a>
						</p>
					</div>
				</div>
				<div className="contact-wrapper">
					<h2>Napisz do nas maila</h2>
					<div className="contact-data">
						<p>
							<span>Robert:</span> <a href=''>kaskjas@sad</a>
						</p>
						<p>
							<span>Patrycja:</span> <a href=''>kslkamds@ksjd</a>
						</p>
					</div>
				</div>
			</section>
		</section>
	);
};

export default ContactPage;
