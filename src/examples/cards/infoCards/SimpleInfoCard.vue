<script setup>
defineProps({
  direction: {
    type: String,
    default: "text-start",
  },
  variant: {
    type: String,
    default: "gradient",
  },
  size: {
    type: String,
    default: "md",
  },
  color: {
    type: String,
    default: "success",
  },
  icon: {
    type: [String, Object],
    required: true,
    component: String,
    color: String,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
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
  <div :class="direction">
    <div
      class="icon icon-shape text-center border-radius-xl mt-n4"
      :class="`icon-${size} ${backgroundColor(variant, color)} shadow-${color}`"
    >
      <i
        class="material-icons opacity-10"
        :class="typeof icon == 'object' ? icon.color : ''"
        >{{ typeof icon == "string" ? icon : icon.component }}</i
      >
    </div>
    <h5 class="mt-3">{{ title }}</h5>
    <p>
      {{ description }}
    </p>
  </div>
</template>
