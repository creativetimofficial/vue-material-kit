<script setup>
defineProps({
  color: {
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
  price: {
    type: [Number, Object],
    currency: String,
    amount: String,
    charged: String,
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
    default: () => ({
      route: "/",
      label: "Buy now",
      color: "bg-gradient-dark",
    }),
  },
  col: {
    type: String,
    default: "col-lg-3 col-sm-6",
  },
});
</script>
<template>
  <div class="mb-lg-0 mb-4" :class="`${col ?? ''}`">
    <div class="card h-100" :class="color ?? ''">
      <div
        class="text-sm-start text-center pt-4 pb-3 px-4"
        :class="color ? 'bg-transparent' : 'card-header'"
      >
        <h5 class="mb-1" :class="{ 'text-white': color }">{{ title }}</h5>
        <p class="mb-3 text-sm" :class="{ 'text-white': color }">
          {{ description }}
        </p>
        <h3 class="font-weight-bolder mt-3" :class="{ 'text-white': color }">
          {{
            typeof price === "number"
              ? `$${price}`
              : `${price.currency ?? ""}${price.amount}`
          }}
          <small
            class="text-sm text-secondary font-weight-bold"
            :class="{ 'text-white': color }"
            >/{{ price.charged ?? "mo" }}</small
          >
        </h3>
        <a
          :href="action.route"
          class="btn btn-sm w-100 border-radius-md mt-4 mb-2"
          :class="action.color"
          >{{ action.label }}</a
        >
      </div>
      <hr class="horizontal dark my-0" />
      <div class="card-body">
        <div
          class="d-flex pb-3"
          v-for="specification of specifications"
          :key="specification"
        >
          <i
            class="material-icons my-auto text-dark"
            :class="{ 'text-white': color }"
            >done</i
          >
          <span class="text-sm ps-3" :class="{ 'text-white': color }">{{
            specification
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
