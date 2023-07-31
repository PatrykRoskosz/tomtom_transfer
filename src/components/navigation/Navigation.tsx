import { useState, useEffect } from "react";
import { useStateCtxNav } from "../../context/navigation/NavContext";
import i18n from "../../i18n"
import NavigationItem from "./NavigationItem";

import "./Navigation.scss";

const Navigation = () => {
	const [toggleIsLanguage, setToggleIsLanguage] = useState<boolean>(false);
	const [language, setLanguage] = useState(i18n.language);
	const state = useStateCtxNav();
	
	const changeLanguageHandler = (event: any) => {
		const language = event.target.value;
		i18n.changeLanguage(language)
		setLanguage(language);
		console.log(language);
		window.location.reload();
	};

	const toggleIsLanguageHandler = () => {
		setToggleIsLanguage(toggleValue => !toggleValue);
	};

	const navClasses = state.isShowNav
		? "tomtom-nav show-navigation"
		: "tomtom-nav hide-navigation";

	// useEffect(() => {}, [state]);

	return (
		<nav className={navClasses}>
			<ul>
				<NavigationItem />
			</ul>
			<div className="btn-translate-wrapper">
				<button
					className='btn-translate'
					value='pl'
					onClick={toggleIsLanguageHandler}>
					{language}
				</button>
				{toggleIsLanguage && (
					<ul>
						<li key='1'>
							<button value='pl' onClick={changeLanguageHandler}>
								PL
							</button>
						</li>
						<li key='2'>
							<button value='dk' onClick={changeLanguageHandler}>
								DK
							</button>
						</li>
						<li key='3'>
							<button value='en' onClick={changeLanguageHandler}>
								EN
							</button>
						</li>
					</ul>
				)}
			</div>
		</nav>
	);
};
export default Navigation;
