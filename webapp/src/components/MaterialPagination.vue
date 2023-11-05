<script setup>
defineProps({
  color: {
    type: String,
    default: "success",
  },
  size: {
    type: String,
    default: "",
  },
});
function getClasses(color, size) {
  let colorValue, sizeValue;

  colorValue = color && `pagination-${color}`;
  sizeValue = size && `pagination-${size}`;

  return `${colorValue} ${sizeValue}`;
}
</script>
<template>
  <ul class="pagination" :class="getClasses(color, size)">
    <slot />
  </ul>
</template>
