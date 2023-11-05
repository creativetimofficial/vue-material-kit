<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";

// Dropdowns page components
import DropdownAndDropup from "./components/DropdownAndDropup.vue";

// Dropdowns page components codes
import { dropdownAndDropupCode } from "./components/codes";

//nav-pills
import setNavPills from "@/assets/js/nav-pills";

//hook
onMounted(() => {
  setNavPills();
});
</script>
<template>
  <BaseLayout
    title="Dropdowns"
    :breadcrumb="[{ label: 'Elements', route: '#' }, { label: 'Dropdowns' }]"
  >
    <View
      title="Dropdown and Dropup"
      :code="dropdownAndDropupCode"
      id="dropdown-dropup"
    >
      <DropdownAndDropup />
    </View>
  </BaseLayout>
</template>
