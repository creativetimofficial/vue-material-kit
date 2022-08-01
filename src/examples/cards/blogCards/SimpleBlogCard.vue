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
    type: Object,
    color: String,
    label: String,
    default: () => ({
      color: "dark",
      label: "More info",
    }),
  },
});
</script>
<template>
  <!-- Start Card Raised Header -->
  <div class="card">
    <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
      <a class="d-block blur-shadow-image">
        <img
          :src="image"
          alt="img-blur-shadow"
          class="img-fluid shadow border-radius-lg"
          loading="lazy"
        />
      </a>
    </div>
    <div class="card-body">
      <h5 class="font-weight-normal">{{ title }}</h5>
      <p>
        {{ description }}
      </p>
      <button
        class="btn btn-outline-dark btn-sm mb-0"
        :class="`btn-outline-${action.color}`"
        name="button"
      >
        {{ action.label }}
      </button>
    </div>
  </div>
  <!-- End Card Raised Header -->
</template>
