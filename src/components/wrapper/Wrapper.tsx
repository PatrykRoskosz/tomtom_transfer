import React from "react";
import "./Wrapper.scss";

const Wrapper: React.FC<{ children: React.ReactNode }> = props => {
	return <div className='wrapper'>{props.children}</div>;
};

export default Wrapper;
