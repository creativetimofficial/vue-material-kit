<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";

// Alerts page components
import SimpleAlerts from "./components/SimpleAlerts.vue";

// Alerts page components codes
import { simpleAlertsCode } from "./components/codes";

//nav-pills
import setNavPills from "@/assets/js/nav-pills";

//hook
onMounted(() => {
  setNavPills();
});
</script>
<template>
  <BaseLayout
    title="Alerts"
    :breadcrumb="[
      { label: 'Attention Catchers', route: '#' },
      { label: 'Alerts' },
    ]"
  >
    <View
      title="Simple Alerts"
      :code="simpleAlertsCode"
      id="simple-alerts"
      height="600"
    >
      <SimpleAlerts />
    </View>
  </BaseLayout>
</template>
