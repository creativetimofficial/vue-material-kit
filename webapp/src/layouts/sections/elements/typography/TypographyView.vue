<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";

// Typography page components
import Roboto from "./components/Roboto.vue";

// Typography page components codes
import { robotoCode } from "./components/codes";

//nav-pills
import setNavPills from "@/assets/js/nav-pills";

//hook
onMounted(() => {
  setNavPills();
});
</script>
<template>
  <BaseLayout
    title="Typography"
    :breadcrumb="[{ label: 'Elements', route: '#' }, { label: 'Typography' }]"
  >
    <View
      title="Typography - Font Family Roboto"
      :code="robotoCode"
      id="typography-roboto"
      height="600"
    >
      <Roboto />
    </View>
  </BaseLayout>
</template>
