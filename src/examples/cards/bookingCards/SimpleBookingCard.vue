<script setup>
defineProps({
  image: {
    type: String,
    required: true,
  },
  categories: {
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
    type: Object,
    color: String,
    label: String,
    default: () => ({
      color: "success",
      label: "From / Night",
    }),
  },
});
</script>
<template>
  <div class="card">
    <div class="card-header p-0 mx-3 mt-n4 position-relative z-index-2">
      <a class="d-block blur-shadow-image">
        <img
          :src="image"
          alt="img-blur-shadow"
          class="img-fluid border-radius-lg"
          loading="lazy"
        />
      </a>
    </div>
    <div class="card-body pt-3">
      <p class="text-dark mb-2 text-sm">
        {{ categories }}
      </p>
      <a href="javascript:;">
        <h5>{{ title }}</h5>
      </a>
      <p>
        {{ description }}
      </p>
      <button class="btn btn-sm mb-0" :class="`btn-outline-${action.color}`">
        {{ action.label }}
      </button>
    </div>
  </div>
</template>
