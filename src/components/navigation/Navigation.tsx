import  { useState, useEffect } from "react";
import { useStateCtxNav } from "../../context/navigation/NavContext";

import NavigationItem from "./NavigationItem";
import "./Navigation.scss";

const Navigation = () => {
	const [toggleIsLanguage, setToggleIsLanguage] = useState<boolean>(false);
	const [language, setLanguage] = useState<string>("PL");
	const state = useStateCtxNav();

	const changeLanguageHandler = (event: any) => {
		const language = event.target.value;
		setLanguage(language);
		console.log(language);
	};
	const toggleIsLanguageHandler = () => {
		setToggleIsLanguage(toggleValue => !toggleValue);
	};
	const navClasses = state.isShowNav ?"tomtom-nav show-navigation": "tomtom-nav hide-navigation";

	useEffect(() => {
		
	}, [state]);

	return (
		<nav className={navClasses}>
			<ul>
				<NavigationItem />
			</ul>
			<button
				className='btn-translate'
				value='pl'
				onClick={toggleIsLanguageHandler}>
				<>
					{language}
					{toggleIsLanguage && (
						<ul>
							<li key='1'>
								<button value='PL' onClick={changeLanguageHandler}>
									PL
								</button>
							</li>
							<li key='2'>
								<button value='DK' onClick={changeLanguageHandler}>
									DK
								</button>
							</li>
							<li key='3'>
								<button value='EN' onClick={changeLanguageHandler}>
									EN
								</button>
							</li>
						</ul>
					)}
				</>
			</button>
		</nav>
	);
};
export default Navigation;
