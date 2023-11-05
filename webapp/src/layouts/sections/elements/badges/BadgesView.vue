<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";

// Badges page components
import BadgesGradient from "./components/BadgesGradient.vue";
import BadgesSimple from "./components/BadgesSimple.vue";
import BadgesSimpleRounded from "./components/BadgesSimpleRounded.vue";

// Badges page components codes
import {
  badgesGradientCode,
  badgesSimpleCode,
  badgesRoundedCode,
} from "./components/codes";

//nav-pills
import setNavPills from "@/assets/js/nav-pills";

//hook
onMounted(() => {
  setNavPills();
});
</script>
<template>
  <BaseLayout
    title="Badges"
    :breadcrumb="[{ label: 'Elements', route: '#' }, { label: 'Badges' }]"
  >
    <View
      title="Badges Gradients"
      :code="badgesGradientCode"
      id="badges-gradient"
    >
      <BadgesGradient />
    </View>

    <View title="Badges Simple" :code="badgesSimpleCode" id="badges-simple">
      <BadgesSimple />
    </View>

    <View
      title="Badges Simple Rounded"
      :code="badgesRoundedCode"
      id="badges-rounded"
    >
      <BadgesSimpleRounded />
    </View>
  </BaseLayout>
</template>
