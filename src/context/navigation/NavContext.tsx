import React, { createContext, Dispatch, useReducer, useContext } from "react";



interface initialStateType {
	isShowNav: boolean;
}
export enum ActionTypes {
   SHOW = "SHOW/NAV",
   HIDE = "HIDE/NAV"
}

interface ActionType {
    type: ActionTypes;
    payload?: number;
}

const initialState = {
	isShowNav: false,
};


const navReducer = (
	state: initialStateType,
	action: ActionType
) => {
	switch (action.type) {
		case ActionTypes.SHOW:
			return {
				isShowNav: true,
			};
		case ActionTypes.HIDE:
			return {
				isShowNav: false,
			};
		default:
			return state;
	}
};

export const CtxNav = createContext(initialState);
export const CtxNavDispatch = createContext<Dispatch<ActionType>>(()=>null);

export const CtxNavProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [state, dispatch] = useReducer(navReducer, initialState);
	return (
		<CtxNav.Provider value={state}>
			<CtxNavDispatch.Provider value={dispatch}>
				{children}
			</CtxNavDispatch.Provider>
		</CtxNav.Provider>
	);
};

export const useStateCtxNav = ()=> useContext(CtxNav);
export const useDispatchCtxNav = ()=> useContext(CtxNavDispatch);
