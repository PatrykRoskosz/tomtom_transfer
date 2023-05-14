import { useEffect } from "react";
import i18n from "../../i18n";
import opelLightGrey from "../../images/cars/opelLightGrey.jpg";
import SmallCard from "../../components/carts/SmallCard/SmallCard";
import Components from "../../components";
import "./Home.scss";

const Home = () => {
	useEffect(() => {
    const script = document.createElement('script');

    script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v9.0&appId=your-app-id&autoLogAppEvents=1";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);
	const whyUs = [
		{
			id: 1,
			title: "Bezpieczeństwo",
			text: "Nie martw się podróą wsiądź i się odpręz my zadbamy o resztę",
			iconName: "fa-solid fa-user-secret",
		},
		{
			id: 2,
			title: "Punktualnośc",
			text: "Nie martw się podróą wsiądź i się odpręz my zadbamy o resztę",
			iconName: "fa-regular fa-clock",
		},
		{
			id: 3,
			title: "Cena",
			text: "Nie martw się podróą wsiądź i się odpręz my zadbamy o resztę",
			iconName: "fa-sharp fa-solid fa-sack-dollar",
		},
	];

	return (
		<section className='home'>
			<Components.ArticleAndPhoto
				title={i18n.t("pages:about_us.title")}
				text={
					"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, enim molestiae provident repellat, praesentium nesciunt fuga, illo sequi architecto necessitatibus nulla delectus nostrum pariatur accusamus sit. Itaque accusantium eum ipsa harum animi. Officiis impedit quibusdam porro quis quos adipisci ut, dolores excepturi in quas eum, quod reiciendis deserunt? Optio possimus esse est neque quod ipsa assumenda vero ducimus, sapiente, magni blanditiis? Officia facere voluptates perferendis. Id corporis ducimus illo! Quaerat, sint ut nulla nostrum cum unde nisi tenetur corrupti doloribus reiciendis officiis quos nihil quae! Mollitia vero quae nesciunt doloremque, expedita, ex velit tempora, molestiae modi quidem sequi quaerat quasi."
				}
				imgSrc={opelLightGrey}
				imgAlt={"auto"}
				reverse={true}
			/>
			<Components.ServicesList />

			<section className='why-us'>
				<h1>Dlaczego my</h1>
				<ul>
					{whyUs.map(card => (
						<SmallCard
							key={card.id}
							title={card.title}
							text={card.text}
							iconName={card.iconName}
						/>
					))}
				</ul>
			</section>
			  <div id="fb-root"></div>
      <div
        className="fb-page"
        data-href="https://www.facebook.com/facebook"
        data-tabs="timeline"
        data-width="500"
        data-height=""
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      >
        <blockquote
          cite="https://www.facebook.com/facebook"
          className="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/facebook">Your Page</a>
        </blockquote>
      </div>
		</section>
	);
};
export default Home;
