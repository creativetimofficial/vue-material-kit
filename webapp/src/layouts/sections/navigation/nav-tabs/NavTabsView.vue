<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";

// Nav tabs page components
import TabsSimple from "./components/TabsSimple.vue";

// Nav tabs page components codes
import { TabsSimpleCode } from "./components/Codes";

//nav-pills
import setNavPills from "@/assets/js/nav-pills";

//hook
onMounted(() => {
  setNavPills();
});
</script>
<template>
  <BaseLayout
    title="Nav Tabs"
    :breadcrumb="[{ label: 'Navigation', route: '#' }, { label: 'Nav Tabs' }]"
  >
    <View title="Tabs Simple" :code="TabsSimpleCode" id="tabs-simple">
      <TabsSimple />
    </View>
  </BaseLayout>
</template>
