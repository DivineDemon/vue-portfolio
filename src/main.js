import { createApp } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faArrowRightLong, faBars } from "@fortawesome/free-solid-svg-icons";

import App from "./App.vue";
import store from "./store";
import "./assets/css/tailwind.css";

library.add(faBars);
library.add(faArrowRightLong);

createApp(App)
  .use(store)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
