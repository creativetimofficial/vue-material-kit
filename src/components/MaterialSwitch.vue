<script setup>
defineProps({
  id: {
    type: String,
    required: true,
  },
  checked: {
    type: Boolean,
    default: false,
  },
  labelClass: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="form-check form-switch">
    <input
      :id="id"
      class="form-check-input"
      type="checkbox"
      :name="id"
      :checked="checked"
    />
    <label class="form-check-label d-block" :class="labelClass" :for="id"
      ><slot
    /></label>
    <slot name="description" v-if="$slots.description" />
  </div>
</template>
