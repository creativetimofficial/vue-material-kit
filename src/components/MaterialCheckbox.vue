<script setup>
defineProps({
  id: {
    type: String,
    default: "",
  },
  color: {
    type: String,
    default: "dark",
  },
  inputClass: {
    type: String,
    default: "",
  },
  labelClass: {
    type: String,
    default: "",
  },
  checked: {
    type: Boolean,
    default: false,
  },
});
</script>
<template>
  <div class="form-check">
    <input
      class="form-check-input"
      :class="`bg-${color} border-${color} ${inputClass}`"
      type="checkbox"
      value=""
      :id="id"
      :checked="checked"
    />
    <label class="form-check-label" :class="labelClass" :for="id">
      <slot />
    </label>
  </div>
</template>
