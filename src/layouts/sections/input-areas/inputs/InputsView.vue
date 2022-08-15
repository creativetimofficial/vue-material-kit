<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";

// Inputs page components
import InputStatic from "./components/InputStatic.vue";
import InputDynamic from "./components/InputDynamic.vue";
import inputOutlined from "./components/InputOutlined.vue";
import InputIcon from "./components/InputIcon.vue";
import InputSuccess from "./components/InputSuccess.vue";
import InputError from "./components/InputError.vue";
import InputDisabled from "./components/InputDisabled.vue";

// Inputs page components codes
import {
  inputStaticCode,
  inputOutlinedCode,
  inputDynamicCode,
  inputSuccessCode,
  inputIconCode,
  inputErrorCode,
  inputDisabledCode,
} from "./components/codes";

//nav-pills & material-input
import setNavPills from "@/assets/js/nav-pills";
import setMaterialInput from "@/assets/js/material-input";

//hook
onMounted(() => {
  setNavPills();
  setMaterialInput();
});
</script>
<template>
  <BaseLayout
    title="Inputs"
    :breadcrumb="[{ label: 'Input Areas', route: '#' }, { label: 'Inputs' }]"
  >
    <View title="Input dynamic" :code="inputDynamicCode" id="input-dynamic">
      <InputDynamic />
    </View>

    <View title="Input static" :code="inputStaticCode" id="input-static">
      <InputStatic />
    </View>

    <View title="Input outline" :code="inputOutlinedCode" id="input-outlined">
      <inputOutlined />
    </View>

    <View title="Input with icon" :code="inputIconCode" id="input-with-icon">
      <InputIcon />
    </View>

    <View title="Input success" :code="inputSuccessCode" id="input-success">
      <InputSuccess />
    </View>

    <View title="Input error" :code="inputErrorCode" id="input-error">
      <InputError />
    </View>

    <View title="Input disabled" :code="inputDisabledCode" id="input-disabled">
      <InputDisabled />
    </View>
  </BaseLayout>
</template>
