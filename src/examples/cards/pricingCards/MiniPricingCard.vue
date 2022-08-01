<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: [Number, Object],
    currency: String,
    amount: String,
    required: true,
  },
  specifications: {
    type: Array,
    required: true,
  },
  action: {
    type: Object,
    route: String,
    label: String,
    color: String,
    class: String,
    default: () => ({
      route: "/",
      label: "Buy now",
      color: "dark",
    }),
  },
});
</script>
<template>
  <div class="card">
    <div class="card-header text-center pt-4 pb-3">
      <h6 class="text-dark opacity-8 mb-0">{{ title }}</h6>
      <h1 class="font-weight-bolder">
        <small>{{ price.currency ?? $ }}</small
        >{{ price.amount }}
      </h1>
    </div>
    <div class="card-body mx-auto pt-0">
      <div
        class="justify-content-start d-flex px-2 py-1"
        v-for="specification of specifications"
        :key="specification"
      >
        <div>
          <i class="fas fa-check text-dark opacity-6 text-sm"></i>
        </div>
        <div class="ps-2">
          <span class="text-sm">{{ specification }}</span>
        </div>
      </div>
    </div>
    <div class="card-footer pt-0">
      <a
        :href="action.route"
        class="btn w-100 mb-0"
        :class="`bg-gradient-${action.color} ${action.class}`"
        v-html="action.label"
      >
      </a>
    </div>
  </div>
</template>
