<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";

// Breadcrumbs page component
import Breadcrumbs from "@/examples/Breadcrumbs.vue";

// Breadcrumbs page component code
import { breadcrumbsCode } from "./code";

//nav-pills
import setNavPills from "@/assets/js/nav-pills";

//hook
onMounted(() => {
  setNavPills();
});
</script>
<template>
  <BaseLayout
    title="Breadcrumbs"
    :breadcrumb="[{ label: 'Elements', route: '#' }, { label: 'Breadcrumbs' }]"
  >
    <View title="Breadcrumbs" :code="breadcrumbsCode" id="breadcrumbs">
      <div class="py-6 px-8 mt-2">
        <Breadcrumbs :routes="[{ label: 'Home', route: '/' }]" />

        <Breadcrumbs
          :routes="[
            { label: 'Home', route: '/' },
            { label: 'Library', route: '/' },
          ]"
        />
        <Breadcrumbs
          :routes="[
            { label: 'Home', route: '/some-route' },
            { label: 'Library', route: '/some-route' },
            { label: 'Data' },
          ]"
        />
      </div>
    </View>
  </BaseLayout>
</template>
