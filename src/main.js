import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import '@trevoreyre/autocomplete-vue/dist/style.css'

// Nucleo Icons
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";

import materialKit from "./material-kit";
import vSelect from 'vue-select'
const app = createApp(App);


app.component('v-select', vSelect)
app.use(createPinia());
app.use(router);
app.use(materialKit);
app.mount("#app");
