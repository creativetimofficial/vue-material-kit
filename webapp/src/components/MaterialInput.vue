<script setup>
defineProps({
  id: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  label: {
    type: [String, Object],
    text: String,
    class: String,
    default: () => ({
      class: "",
    }),
  },
  value: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  size: {
    type: String,
    default: "md",
  },
  error: {
    type: Boolean,
    default: false,
  },
  success: {
    type: Boolean,
    default: false,
  },
  isRequired: {
    type: Boolean,
    default: false,
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  inputClass: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "",
  },
});
function getClasses(size, success, error) {
  let sizeValue, isValidValue;

  sizeValue = size && `form-control-${size}`;

  if (error) {
    isValidValue = "is-invalid";
  } else if (success) {
    isValidValue = "is-valid";
  } else {
    isValidValue = "";
  }

  return `${sizeValue} ${isValidValue}`;
}
</script>
<template>
  <div class="input-group">
    <label v-if="label" :class="label.class">{{
      typeof label == "string" ? label : label.text
    }}</label>
    <span v-if="icon" class="input-group-text"
      ><i class="fas" :class="`fa-${icon}`" aria-hidden="true"></i
    ></span>
    <input
      :id="id"
      :type="type"
      class="form-control"
      :class="[getClasses(size, success, error), inputClass]"
      :value="value"
      :placeholder="placeholder"
      :isRequired="isRequired"
      :disabled="isDisabled"
    />
  </div>
</template>
