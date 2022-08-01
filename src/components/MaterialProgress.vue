<script setup>
defineProps({
  variant: {
    type: String,
    validator: (v) => ["contained", "gradient"].includes(v),
    default: "contained",
  },
  color: {
    type: String,
    validator(color) {
      return [
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "danger",
        "error",
        "light",
        "dark",
      ].includes(color);
    },
    default: "success",
  },
  value: {
    type: Number,
    required: true,
  },
});

const getColor = (color, variant) => {
  let colorValue;

  if (variant === "gradient") {
    colorValue = `bg-gradient-${color}`;
  } else if (variant === "contained") {
    colorValue = `bg-${color}`;
  } else if (variant === "striped") {
    colorValue = `progress-bar-striped bg-${color}`;
  }

  return colorValue;
};
</script>
<template>
  <div class="progress">
    <div
      class="progress-bar"
      :class="getColor(color, variant)"
      role="progressbar"
      :style="{ width: `${value}%` }"
      :aria-valuenow="value"
      aria-valuemin="0"
      aria-valuemax="100"
    ></div>
  </div>
</template>
