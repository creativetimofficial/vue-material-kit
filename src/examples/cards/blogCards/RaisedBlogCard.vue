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
    label: String,
    route: String,
    color: String,
    default: () => ({
      label: "",
      route: "#",
      color: "success",
    }),
  },
});
</script>
<template>
  <div class="card shadow-lg">
    <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
      <a class="d-block blur-shadow-image">
        <img
          :src="image"
          alt="img-blur-shadow"
          class="img-fluid shadow border-radius-lg"
        />
      </a>
    </div>
    <div class="card-body">
      <h4>{{ title }}</h4>
      <p>
        {{ description }}
      </p>
      <a
        :href="action.route"
        class="icon-move-right"
        :class="`text-${action.color}`"
      >
        {{ action.label }}
        <i class="fas fa-arrow-right text-xs ms-1" aria-hidden="true"></i>
      </a>
    </div>
  </div>
</template>
