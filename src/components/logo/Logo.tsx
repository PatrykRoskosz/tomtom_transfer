import "./Logo.scss";
import { FaFacebook ,FaFacebookF} from "react-icons/fa6";

const Logo = () => {
	return (
		<div className='logo'>
			<h1>TomTom Transfer</h1>
			<a
				href='https://www.facebook.com/people/Tomtom-transfer/100076940167167/?paipv=0&eav=AfbfEAUc1SuNtotugEUunyz2--M9nH8lDqGe8hNZa79VovO61W9amYLVpEAZp06PsN0&_rdr'
				target='blanc'
				className='logo-link-fb'>
				<span>
					<FaFacebook className='i' />
				</span>
			
			</a>
		</div>
	);
};

export default Logo;
