import { createApp } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faSun,
  faBars,
  faMoon,
  faLink,
  faPlane,
  faFolder,
  faArrowRightLong,
  faPersonCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faFacebook,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

import App from "./App.vue";
import store from "./store";
import "./assets/css/tailwind.css";

library.add(
  faSun,
  faBars,
  faMoon,
  faLink,
  faPlane,
  faGithub,
  faFolder,
  faFacebook,
  faLinkedin,
  faStackOverflow,
  faArrowRightLong,
  faPersonCircleQuestion
);

createApp(App)
  .use(store)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
