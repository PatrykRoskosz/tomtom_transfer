import React from "react";
import { Item } from "./WhyChooseUs";
import "./WhyChooseUs.scss";
import {

	FaHandshakeSimple,
	FaPeopleGroup,
	FaTruckFast,
	FaRegCalendarCheck,
	FaHandsHoldingChild,
	FaUserCheck,
} from "react-icons/fa6";

// 'hands'|'fleet'|'people'| 'calendar'|'individually'| 'professional'

const WhyChooseUsItem: React.FC<Item> = ({ icon, span, paragraph }) => {
	let returnIcon;

	if (icon === "hands") {
		returnIcon = <FaHandshakeSimple className='i' />;
	} else if (icon === "fleet") {
		returnIcon = <FaTruckFast className='i' />;
	} else if (icon === "people") {
		returnIcon = <FaPeopleGroup className='i' />;
	} else if (icon === "calendar") {
		returnIcon = <FaRegCalendarCheck className='i' />;
	} else if (icon === "individually") {
		returnIcon = <FaHandsHoldingChild className='i' />;
	} else if (icon === "professional") {
		returnIcon = <FaUserCheck className='i' />;
	}

	return (
		<div className='justification'>
			{returnIcon}
			<span>{span}</span>
			<p>{paragraph}</p>
		</div>
	);
};

export default WhyChooseUsItem;
