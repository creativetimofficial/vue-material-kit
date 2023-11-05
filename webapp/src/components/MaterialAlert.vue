<script setup>
defineProps({
  color: {
    type: String,
    default: "success",
  },
  dismissible: {
    type: Boolean,
    default: false,
  },
  fontWeight: {
    type: String,
    default: "",
  },
});
function getClasses(color, dismissible, fontWeight) {
  let colorValue, dismissibleValue, fontWeightValue;

  colorValue = color && `alert-${color}`;

  dismissibleValue = dismissible && "alert-dismissible fade show";

  fontWeightValue = fontWeight && `font-weight-${fontWeight}`;

  return `${colorValue} ${dismissibleValue} ${fontWeightValue}`;
}
</script>
<template>
  <div
    class="alert text-white"
    role="alert"
    :class="getClasses(color, dismissible, fontWeight)"
  >
    &nbsp;
    <slot />
    <button
      v-if="dismissible"
      type="button"
      class="btn-close text-lg py-3 opacity-10"
      data-bs-dismiss="alert"
      aria-label="Close"
    >
      <span aria-hidden="true" class="text-lg font-weight-bold">&times;</span>
    </button>
  </div>
</template>
