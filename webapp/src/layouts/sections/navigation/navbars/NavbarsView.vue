<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";

// Navbars page components
import NavbarDark from "./components/NavbarDark.vue";

// Navbars page components codes
import { navbarDarkCode } from "./components/codes";

//nav-pills
import setNavPills from "@/assets/js/nav-pills";

//hook
onMounted(() => {
  setNavPills();
});
</script>
<template>
  <BaseLayout
    title="Navbars"
    :breadcrumb="[{ label: 'Navigation', route: '#' }, { label: 'Navbars' }]"
  >
    <View
      title="Navbar dark"
      :code="navbarDarkCode"
      id="navbar-dark"
      height="300  position-relative"
    >
      <NavbarDark />
    </View>
  </BaseLayout>
</template>
