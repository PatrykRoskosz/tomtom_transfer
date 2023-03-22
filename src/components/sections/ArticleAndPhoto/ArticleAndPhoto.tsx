import "./ArticleAndPhoto.scss";

interface ArticleAndPhoto {
	title: string;
	text: string;
	imgSrc: string;
	imgAlt: string;
    reverse?: boolean;
}

const ArticleAndPhoto = (props: ArticleAndPhoto) => {
	const { title, text, imgSrc, imgAlt} = props;

	return (
		<section className='article-and-photo-wrapper'>
			<div className='article-and-photo-img-section'>
				<img src={imgSrc} alt={imgAlt} />
			</div>
			<div className='article-and-photo-article-section'>
				<article>
					<h1>{title}</h1>
					<p>{text}</p>
				</article>
			</div>
		</section>
	);
};
export default ArticleAndPhoto;
