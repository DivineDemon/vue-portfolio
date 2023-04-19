import { createApp } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faArrowRightLong,
  faBars,
  faSun,
  faMoon,
  faPersonCircleQuestion,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faStackOverflow,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import App from "./App.vue";
import store from "./store";
import "./assets/css/tailwind.css";

library.add(
  faBars,
  faArrowRightLong,
  faFacebook,
  faGithub,
  faStackOverflow,
  faLinkedin,
  faSun,
  faMoon,
  faPersonCircleQuestion,
  faLink
);

createApp(App)
  .use(store)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
