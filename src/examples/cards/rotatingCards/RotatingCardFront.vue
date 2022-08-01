<script setup>
defineProps({
  image: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
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
</script>
<template>
  <div
    class="front front-background"
    :style="{
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
    }"
  >
    <div class="card-body py-7 text-center">
      <i v-if="icon" class="material-icons text-white text-4xl my-3">{{
        icon
      }}</i>
      <p
        v-if="label"
        class="text-sm text-white text-uppercase font-weight-normal"
      >
        {{ label }}
      </p>
      <h3 class="text-white" v-html="title" />
      <p class="text-white opacity-8">
        {{ description }}
      </p>
    </div>
  </div>
</template>
