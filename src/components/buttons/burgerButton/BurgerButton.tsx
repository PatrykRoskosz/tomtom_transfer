import { useEffect } from "react";
import { useStateCtxNav, useDispatchCtxNav, ActionTypes } from "../../../context/navigation/NavContext";

import "./BurgerButton.scss";

const BurgerButton = () => {
    const state = useStateCtxNav();
    const dispatch = useDispatchCtxNav();

	const toggleNavHandler = () => {
		if (state.isShowNav) {
			dispatch({type: ActionTypes.HIDE})
		} else {
			dispatch({type: ActionTypes.SHOW})
		}
	} 

    useEffect(()=> {
        if(state.isShowNav) {
            dispatch({type: ActionTypes.SHOW})
        } else {
            dispatch({type: ActionTypes.HIDE})
        }
    }, [state.isShowNav])

	const btnClasses = state.isShowNav
		? "tomtom-burger-button tomtom-burger-button-x"
		: "tomtom-burger-button";

	return (
		<button onClick={toggleNavHandler } className={btnClasses}>
			<div></div>
			<div></div>
			<div></div>
		</button>
	);
};

export default BurgerButton;
