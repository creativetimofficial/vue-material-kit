<script setup>
//Vue Material Kit 2 Pro components
import MaterialButton from "@/components/MaterialButton.vue";
defineProps({
  color: {
    type: String,
    default: "success",
  },
  image: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  action: {
    type: Object,
    color: String,
    variant: String,
    label: String,
    default: () => ({
      variant: "contained",
      color: "white",
      label: "Read more",
    }),
  },
});
</script>
<template>
  <div class="card card-background align-items-start h-100">
    <div
      class="full-background"
      :style="{ backgroundImage: `url(${image})` }"
    ></div>
    <div class="card-body text-center z-index-3">
      <p class="text-uppercase font-weight-bold opacity-8 text-xs mt-7">
        {{ label }}
      </p>
      <h4 class="text-white mb-1">{{ title }}</h4>
      <p class="text-white opacity-8">
        {{ description }}
      </p>
      <MaterialButton
        :variant="action.variant"
        :color="action.color"
        size="sm"
        >{{ action.label }}</MaterialButton
      >
    </div>
    <span
      class="mask border-radius-xl z-index-2 opacity-7"
      :class="`bg-gradient-${color}`"
    ></span>
  </div>
</template>
