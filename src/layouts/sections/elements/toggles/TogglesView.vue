<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";

// Toggles page components
import Toggle from "./components/Toggle.vue";
import ToggleContext from "./components/ToggleContext.vue";

// Toggles page components codes
import { toggleCode, toggleContextCode } from "./components/codes";

//nav-pills
import setNavPills from "@/assets/js/nav-pills";

//hook
onMounted(() => {
  setNavPills();
});
</script>
<template>
  <BaseLayout
    title="Toggles"
    :breadcrumb="[{ label: 'Elements', route: '#' }, { label: 'Toggles' }]"
  >
    <View title="Toggle" :code="toggleCode" id="toggle">
      <Toggle />
    </View>
    <View title="Toggle Context" :code="toggleContextCode" id="toggle-context">
      <ToggleContext />
    </View>
  </BaseLayout>
</template>
