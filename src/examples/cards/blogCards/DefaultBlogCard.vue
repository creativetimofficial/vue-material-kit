<script setup>
defineProps({
  image: {
    type: String,
    require: true,
  },
  category: {
    type: Object,
    required: true,
    color: String,
    label: String,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  author: {
    type: Object,
    require: true,
    image: String,
    name: String,
    date: String,
  },
  route: {
    type: String,
    default: "javascript:;",
  },
});
</script>
<template>
  <div class="card">
    <div class="card-header p-0 mx-3 mt-n4 position-relative z-index-1">
      <a :href="route" class="d-block blur-shadow-image">
        <img
          :src="image"
          class="img-fluid border-radius-md"
          :alt="title"
          loading="lazy"
        />
      </a>
    </div>
    <div class="card-body">
      <span
        class="text-gradient text-uppercase text-xs font-weight-bold"
        :class="`text-${category.color}`"
        >{{ category.label }}</span
      >
      <a :href="route" class="card-title mt-3 h5 d-block text-darker">
        {{ title }}
      </a>
      <p class="card-description mb-4">
        {{ description }}
      </p>
      <div class="author align-items-center">
        <img
          :src="author.image"
          :alt="author.name"
          class="avatar shadow"
          loading="lazy"
        />
        <div class="name ps-2">
          <span>{{ author.name }}</span>
          <div class="stats">
            <small>{{ author.date }}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
