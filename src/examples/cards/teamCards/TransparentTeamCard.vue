<script setup>
import MaterialSocialButton from "@/components/MaterialSocialButton.vue";
defineProps({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  socials: {
    type: Array,
    component: String,
    route: String,
    default: () => [],
  },
});
</script>
<template>
  <div class="card card-profile card-plain">
    <div class="text-start mt-n5 z-index-1">
      <div class="position-relative w-25">
        <div class="blur-shadow-avatar">
          <img class="avatar avatar-xxl border-radius-xl" :src="image" />
        </div>
      </div>
    </div>
    <div class="card-body ps-0">
      <h5 class="mb-0">{{ name }}</h5>
      <p class="text-muted">{{ position }}</p>
      <p>
        {{ description }}
      </p>
      <MaterialSocialButton
        v-for="{ component, route } of socials"
        :key="component"
        type="button"
        class="btn-icon-only btn-simple btn-lg"
        data-toggle="tooltip"
        data-placement="bottom"
        title="Follow me!"
        :component="component"
        :color="component"
        :route="route"
      />
    </div>
  </div>
</template>
