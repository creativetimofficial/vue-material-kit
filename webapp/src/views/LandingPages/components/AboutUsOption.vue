<script setup>
defineProps({
  variant: {
    type: String,
    default: "gradient",
  },
  color: {
    type: String,
    default: "success",
  },
  size: {
    type: String,
    default: "md",
  },
  icon: {
    type: [String, Object],
    required: true,
    component: String,
    color: String,
  },
  content: {
    type: String,
    required: true,
  },
});

function backgroundColor(variant, color) {
  let colorValue;

  if (variant === "gradient") {
    colorValue = "bg-gradient-" + color;
  } else if (variant === "contained") {
    colorValue = "bg-" + color;
  }

  return colorValue;
}
</script>
<template>
  <div class="p-3 info-horizontal d-flex align-items-center">
    <div
      class="icon icon-shape text-center border-radius-xl"
      :class="`icon-${size} ${backgroundColor(variant, color)} shadow-${color}`"
    >
      <i
        class="material-icons opacity-10"
        :class="typeof icon == 'object' ? icon.color : ''"
        >{{ typeof icon == "string" ? icon : icon.component }}</i
      >
    </div>
    <div class="description ps-3">
      <p class="mb-0" v-html="content" />
    </div>
  </div>
</template>
