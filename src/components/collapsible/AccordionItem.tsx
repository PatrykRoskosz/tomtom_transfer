import { useState, useEffect } from "react";
import { Transition } from "react-transition-group";

export interface AccordionItemType {
	id: number;
	title: string;
	description: string;
	iconClassName: string;
	
	
}
export interface AccordionItemTypeWidthClick {
	id: number;
	title: string;
	description: string;
	iconClassName: string;
	show: null | number;
	click: (el: number)=> void;
}


const AccordionItem = (props: AccordionItemTypeWidthClick ) => {
	const { id, title, description, iconClassName, click,show} = props;

	const [isOpen, setIsOpen] = useState(false);


	const isOpenHandler = (e: React.SyntheticEvent<EventTarget>) => {
		e.stopPropagation()
		click(id)

		// setIsOpen(!isOpen);
	};

	const arrowClasses = show == id ? "arrow-up" : "arrow-up arrow-down";
	const descriptionClasses = [
		"accordion-description",
		show == id  ? "accordion-description-show" : "accordion-description-hidden",
	];

	return (
		<li key={id} >
			<button className='accordion-title' type="button" onClick={isOpenHandler}>
				<div className='accordion-title-img'>
					<i className={iconClassName}></i>
				</div>
				<div className="accordion-title-bg"></div>
				<h2>{title}</h2>
				<div className='arrow-wrapper'>
					<div className={arrowClasses}></div>
				</div>
			</button>
			<div className={descriptionClasses.join(" ")}>{description}</div>
		</li>
	);
};
export default AccordionItem;
