import { Link } from "react-router-dom";


import "./ServicesList.scss";

const ServicesList = () => {
    return (
        <section className="services-list-wrapper">
            <div className="services-list-section">
                <ul>
                    <li><Link to="/">Wyślij z nami paczkę Polska-Dania</Link></li>
                    <li><Link to="/">Podrózój z nami Polska-Dania</Link></li>
                    <li><Link to="/">Przewieziemy twojich gości</Link></li>
                    <li><Link to="/">Wynajmij busa na wakacje</Link></li>
                    
                </ul>
            </div>
            <div className="services-list-img-section">
                <i className="fa-solid fa-truck-fast"></i>
            </div>
            <div className="services-list-hero"></div>
        </section>
    )
}

export default ServicesList;