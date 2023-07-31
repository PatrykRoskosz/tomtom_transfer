import { useEffect, useState, useCallback, ReactNode } from "react";
import "./WhyWorkWithUs.scss";

interface WhyWorkWithUsItemType {
	fromValue: string;
	toValue: string;
	additionalSign?: string;
	children?: ReactNode;
}

const WhyWorkWithUsItem: React.FC<WhyWorkWithUsItemType> = ({
	fromValue,
	toValue,
	additionalSign,
	children,
}) => {
	const [value, setValue] = useState(parseInt(fromValue));
	const interval = 5000;
	const toValueNumber = parseInt(toValue);
	let increasingValue = useCallback(() => {
		setValue(val => val + 1);
	}, []);

	window.addEventListener('resize', (event) => {
		console.log();
	})

	useEffect(() => {
		const duration = Math.floor(interval / toValueNumber);

		let counter = setInterval(() => {
			increasingValue();
		}, duration);
		if (value === toValueNumber) {
			clearInterval(counter);
		}

		return () => {
			clearInterval(counter);
		};

	}, [value, increasingValue]);

	return (
		<div className='why-work-with-us-reasons-item'>
			<span className='why-work-with-us-reasons-item-value' data-val='2500'>
				{`${value}${additionalSign ? additionalSign : ""}`}
			</span>
			<div className='why-work-with-us-reasons-item-text'>{children}</div>
		</div>
	);
};

export default WhyWorkWithUsItem;


