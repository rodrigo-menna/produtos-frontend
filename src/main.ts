import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "@fortawesome/fontawesome-free/css/all.css";
import axios from "./plugins/axios";

createApp(App)
  .use(router)
  .use(axios, {
    baseUrl: "http://localhost:8080/",
  })
  .mount("#app");
