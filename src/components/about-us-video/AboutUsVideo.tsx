import "./AboutUsVideo.scss";
import video from "../../images/kobenhavn/video.mp4";
import i18n from "../../i18n";

const AboutUsVideo = () => {
	return (
		<section className='about-us-video-wrapper'>
			<video className='about-us-video' src={video} autoPlay loop muted />
			<div className='about-us-video-text-section'>
				<h2> {i18n.t("pages:about_us.title")}</h2>
				<div className='about-us-video-text-wrapper'>
					<p> {i18n.t("pages:about_us.content")}</p>
				</div>
			</div>
		</section>
	);
};

export default AboutUsVideo;
