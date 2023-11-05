<script setup>
defineProps({
  image: {
    type: String,
    required: true,
  },
  profile: {
    type: Object,
    required: true,
    name: String,
    link: String,
  },
  position: {
    type: Object,
    label: String,
    color: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div class="card card-profile">
    <div class="row">
      <div class="col-lg-4 col-md-6 col-12 mt-n5">
        <a :href="profile.link">
          <div class="p-3 pe-md-0">
            <img
              class="w-100 border-radius-md shadow-lg"
              :src="image"
              :alt="profile.name"
            />
          </div>
        </a>
      </div>
      <div class="col-lg-8 col-md-6 col-12 my-auto">
        <div class="card-body ps-lg-0">
          <h5 class="mb-0">{{ profile.name }}</h5>
          <h6 :class="`text-${position.color}`">{{ position.label }}</h6>
          <p class="mb-0">
            {{ description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
