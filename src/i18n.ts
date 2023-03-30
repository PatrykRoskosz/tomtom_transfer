import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";
import pages_pl from "./assets/translation/pages/pl.json";
import pages_en from "./assets/translation/pages/en.json";
import pages_dk from "./assets/translation/pages/dk.json";
import components_pl from "./assets/translation/components/pl.json";
import components_en from "./assets/translation/components/en.json";
import components_dk from "./assets/translation/components/dk.json";

i18n
	.use(detector)
	.use(initReactI18next)
	.init({
		debug: true,
		fallbackLng: "pl",
		resources: {
			pl: {
				pages: pages_pl,
				components: components_pl,
			},
			en: {
				pages: pages_en,
				components: components_en,
			},
			dk: {
				pages: pages_dk,
				components: components_dk,
			},
		},
	});
export default i18n;
