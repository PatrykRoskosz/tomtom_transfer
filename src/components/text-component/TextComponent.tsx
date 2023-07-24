import "./Trust.scss";

export interface TextType {
	title: string;
	text: string;
}

const TextComponent: React.FC<TextType> = ({ title, text }) => {
	return (
		<div className='trust'>
			<div className='trust-text trust-tex-one'>
				<p>{title}</p>
			</div>
			<div className='trust-text trust-tex-two'>
				<p>{text}</p>
			</div>
			<div className='trust-hero'></div>
		</div>
	);
};

export default TextComponent;
