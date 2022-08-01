<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";

// Button Groups page components
import ButtonGroupsSimple from "./components/ButtonGroupsSimple.vue";
import ButtonGroupsOutline from "./components/ButtonGroupsOutline.vue";
import ButtonGroupsCheckbox from "./components/ButtonGroupsCheckbox.vue";
import ButtonGroupsRadio from "./components/ButtonGroupsRadio.vue";
import ButtonGroupsSizing from "./components/ButtonGroupsSizing.vue";

// Button Groups page components codes
import {
  buttonGroupsSimpleCode,
  buttonGroupsOutlineCode,
  buttonGroupsCheckboxCode,
  buttonGroupsRadioCode,
  buttonGroupsSizingCode,
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
    title="Button Groups"
    :breadcrumb="[
      { label: 'Elements', route: '#' },
      { label: 'Button Groups' },
    ]"
  >
    <View
      title="Button Groups Simple"
      :code="buttonGroupsSimpleCode"
      id="button-groups-simple"
    >
      <ButtonGroupsSimple />
    </View>

    <View
      title="Button Groups Outline"
      :code="buttonGroupsOutlineCode"
      id="button-groups-outline"
    >
      <ButtonGroupsOutline />
    </View>

    <View
      title="Button Groups Checkbox"
      :code="buttonGroupsCheckboxCode"
      id="button-groups-checkbox"
    >
      <ButtonGroupsCheckbox />
    </View>

    <View
      title="Button Groups Radio"
      :code="buttonGroupsRadioCode"
      id="button-groups-radio"
    >
      <ButtonGroupsRadio />
    </View>
    <View
      title="Button Groups Sizing"
      :code="buttonGroupsSizingCode"
      id="button-groups-sizing"
    >
      <ButtonGroupsSizing />
    </View>
  </BaseLayout>
</template>
