import { useState } from "react";
import { AccordionItemType } from "./AccordionItem";
import AccordionItem from "./AccordionItem";

import "./Accordion.scss";

interface AccordionType {
	items: AccordionItemType[];
}

const Accordion = (props: AccordionType) => {
	const { items } = props;
	const [selected, setSelected] = useState<null | number>(1);

	const showHandler = (el: number) => {
		if (selected == el) {
			return setSelected(null);
		}

		setSelected(el);
	};

	return (
		<ul className='accordion-list'>
			{items.map(item => (
				<AccordionItem
					key={item.id}
					id={item.id}
					title={item.title}
					description={item.description}
					iconClassName={item.iconClassName}
					click={showHandler}
					show={selected}
				/>
			))}
		</ul>
	);
};

export default Accordion;
