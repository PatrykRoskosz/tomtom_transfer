import { Item } from "../../components/why-choose-us/WhyChooseUs";
import i18n from "../../i18n";
const { t } = i18n;

export const whyUs: Item[] = [
	{
		icon: "hands",
		span: t("components:why_choose_us_events.one.title"),
		paragraph: t("components:why_choose_us_events.one.description"),
	},
	{
		icon: "individually",
		span: t("components:why_choose_us_events.two.title"),
		paragraph: t("components:why_choose_us_events.two.description"),
	},
	{
		icon: "fleet",
		span: t("components:why_choose_us_events.three.title"),
		paragraph: t("components:why_choose_us_events.three.description"),
	},
	{
		icon: "professional",
		span: t("components:why_choose_us_events.four.title"),
		paragraph: t("components:why_choose_us_events.four.description"),
	},
];
export const offer = [
	{
		id: 1,
		title: t("components:offer_events.one.title"),
		text: t("components:offer_events.one.text"),
		imgSrc: "",
		imgAlt: "",
		items: [],
	},
	{
		id: 2,
		title: t("components:offer_events.two.title"),
		text: t("components:offer_events.two.text"),
		imgSrc: "",
		imgAlt: "",
		items: [],
	},
	{
		id: 3,
		title: t("components:offer_events.three.title"),
		text: t("components:offer_events.three.text"),
		imgSrc: "",
		imgAlt: "",
		items: [],
	},
	{
		id: 4,
		title: t("components:offer_events.four.title"),
		text: t("components:offer_events.four.text"),
		imgSrc: "",
		imgAlt: "",
		items: [],
	},
	{
		id: 5,
		title: t("components:offer_events.five.title"),
		text: t("components:offer_events.five.text"),
		imgSrc: "",
		imgAlt: "",
		items: [],
	},
];
