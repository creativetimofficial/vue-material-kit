<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";

// Buttons page components
import ButtonsGradient from "./components/ButtonsGradient.vue";
import ButtonsContained from "./components/ButtonsContained.vue";
import ButtonsOutlined from "./components/ButtonsOutlined.vue";
import ButtonsSizes from "./components/ButtonsSizes.vue";
import ButtonsIconLeft from "./components/ButtonsIconLeft.vue";
import ButtonsIconRight from "./components/ButtonsIconRight.vue";

// Buttons page components codes
import {
  buttonsGradientCode,
  buttonsContainedCode,
  buttonsOutlinedCode,
  buttonsSizesCode,
  buttonsIconLeftCode,
  buttonsIconRightCode,
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
    title="Buttons"
    :breadcrumb="[{ label: 'Elements', route: '#' }, { label: 'Buttons' }]"
  >
    <View
      title="Buttons Colors Gradient"
      :code="buttonsGradientCode"
      id="button-gradient"
    >
      <ButtonsGradient />
    </View>

    <View
      title="Buttons Contained"
      :code="buttonsContainedCode"
      id="button-contained"
    >
      <ButtonsContained />
    </View>

    <View
      title="Buttons Outline"
      :code="buttonsOutlinedCode"
      id="button-outlined"
    >
      <ButtonsOutlined />
    </View>

    <View title="Buttons Sizes" :code="buttonsSizesCode" id="button-sizes">
      <ButtonsSizes />
    </View>

    <View
      title="Buttons Icon Left"
      :code="buttonsIconLeftCode"
      id="button-icon-left"
    >
      <ButtonsIconLeft />
    </View>

    <View
      title="Buttons Icon Right"
      :code="buttonsIconRightCode"
      id="button-icon-right"
    >
      <ButtonsIconRight />
    </View>
  </BaseLayout>
</template>
