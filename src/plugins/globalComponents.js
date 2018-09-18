import { DropDown } from "../components";
import { Parallax } from "../components";
import { VPopover } from "v-tooltip";
/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalComponents = {
  install(Vue) {
    Vue.component("drop-down", DropDown);
    Vue.component(Parallax.name, Parallax);
    Vue.component("v-popover", VPopover);
  }
};

export default GlobalComponents;
