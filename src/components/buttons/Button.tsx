import React from 'react';

import "./Button.scss";

interface buttonType {
    text: string;
    click: () => void
}

const Button: React.FC<buttonType> = (props) => {
    return <button onClick={props.click} className="tomtom-button-one">{props.text}</button>
}

export default Button;