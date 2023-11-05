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
  action: {
    type: Array,
    route: String,
    label: String,
    color: String,
    required: true,
  },
});
</script>
<template>
  <div
    class="back back-background"
    :style="{
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
    }"
  >
    <div class="card-body pt-7 text-center">
      <h3 class="text-white" v-html="title"></h3>
      <p class="text-white opacity-8">
        {{ description }}
      </p>
      <div class="buttons-group">
        <a
          v-for="({ route, color, label }, index) of action"
          :key="index"
          :href="route"
          target="_blank"
          class="btn btn-sm mt-3 inline-block ms-1"
          :class="`${color ? `btn-${color}` : 'btn-white'}`"
          >{{ label }}</a
        >
      </div>
    </div>
  </div>
</template>
