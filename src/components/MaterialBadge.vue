<script setup>
defineProps({
  size: {
    type: String,
    validator(size) {
      return ["sm", "md", "lg"].includes(size);
    },
    default: "md"
  },
  color: {
    validator(color) {
      return [
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "danger",
        "light",
        "dark",
        "white"
      ].includes(color);
    },
    default: "success"
  },
  variant: {
    type: String,
    validator(variant) {
      return ["fill", "gradient"].includes(variant);
    },
    default: "fill"
  },
  rounded: {
    type: Boolean,
    default: false
  }
});

function getClasses(variant, color, size, rounded) {
  let colorValue, sizeValue, roundedValue;

  if (variant === "gradient") {
    colorValue = `bg-gradient-${color}`;
  } else {
    colorValue = `badge-${color} bg-${color}`;
  }

  sizeValue = size && `badge-${size}`;
  roundedValue = rounded && "rounded-pill";

  return `${colorValue} ${sizeValue} ${roundedValue}`;
}
</script>
<template>
  <span class="badge" :class="getClasses(variant, color, size, rounded)">
    <slot />
  </span>
</template>
