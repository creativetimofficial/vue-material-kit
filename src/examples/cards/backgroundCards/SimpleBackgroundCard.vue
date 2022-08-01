<script setup>
defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  route: {
    type: String,
    default: "javascript:;",
  },
});
</script>
<template>
  <a :href="route">
    <div class="card card-background">
      <div
        class="full-background"
        :style="{ backgroundImage: `url(${image})` }"
      ></div>
      <div class="card-body pt-12">
        <h4 class="text-white">{{ title }}</h4>
        <p class="text-white">
          {{ description }}
        </p>
      </div>
    </div>
  </a>
</template>
