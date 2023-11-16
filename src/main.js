import { createApp } from "vue";
import { MotionPlugin } from "@vueuse/motion";
import ToastPlugin from "vue-toast-notification";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faSun,
  faBars,
  faMoon,
  faLink,
  faPlane,
  faFolder,
  faSpinner,
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
import "vue-toast-notification/dist/theme-bootstrap.css";

library.add(
  faSun,
  faBars,
  faMoon,
  faLink,
  faPlane,
  faGithub,
  faFolder,
  faSpinner,
  faFacebook,
  faLinkedin,
  faStackOverflow,
  faArrowRightLong,
  faPersonCircleQuestion
);

createApp(App)
  .use(store)
  .use(ToastPlugin)
  .use(MotionPlugin)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
