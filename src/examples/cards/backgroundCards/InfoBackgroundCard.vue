<script setup>
defineProps({
  color: {
    type: String,
    default: "dark",
  },
  image: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div class="card h-100 card-background align-items-start">
    <div
      class="full-background"
      :style="{ backgroundImage: `url(${image})` }"
    ></div>
    <div class="card-body z-index-3">
      <i class="material-icons text-white text-3xl">{{ icon }}</i>
    </div>
    <div class="card-footer pb-3 pt-2 z-index-3">
      <h4 class="text-white mb-1 cursor-pointer">{{ title }}</h4>
      <p class="text-white text-xs font-weight-bolder text-uppercase opacity-7">
        {{ label }}
      </p>
    </div>
    <span
      class="mask border-radius-xl z-index-2 opacity-6"
      :class="`bg-gradient-${color}`"
    ></span>
  </div>
</template>
