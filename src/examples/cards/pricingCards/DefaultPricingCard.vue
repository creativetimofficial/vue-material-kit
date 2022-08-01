<script setup>
import MaterialBadge from "../../../components/MaterialBadge.vue";
defineProps({
  color: {
    type: String,
    default: "",
  },
  badge: {
    type: Object,
    color: String,
    label: String,
    required: true,
  },
  price: {
    type: Object,
    currency: String,
    amount: String,
    charged: String,
    required: true,
  },
  specifications: {
    type: Array,
    label: String,
    includes: Boolean,
    required: true,
  },
  action: {
    type: Object,
    route: String,
    label: String,
    color: String,
    default: () => ({
      route: "/",
      label: "Join",
      color: "success",
    }),
  },
  colored: {
    type: Boolean,
    default: false,
  },
});
</script>
<template>
  <div class="card shadow-lg" :class="`bg-gradient-${color}`">
    <MaterialBadge
      :class="[
        ` w-30 mt-n2 mx-auto bg-${badge.color}`,
        colored ? 'text-white' : 'text-dark',
      ]"
      :color="badge.color"
      rounded
      >{{ badge.label }}</MaterialBadge
    >
    <div class="card-header text-center pt-4 pb-3 bg-transparent">
      <h1
        class="font-weight-bold mt-2"
        :class="colored ? 'text-white' : 'text-dark'"
      >
        <small class="text-lg align-top me-1">{{ price.currency }}</small
        >{{ price.amount }}<small class="text-lg">/{{ price.charged }}</small>
      </h1>
    </div>
    <div
      class="card-body text-lg-start text-center pt-0"
      :class="colored ? 'text-white' : 'text-dark'"
    >
      <div
        class="d-flex justify-content-lg-start justify-content-center p-2"
        v-for="({ label, includes }, index) of specifications"
        :key="index"
      >
        <i class="material-icons my-auto">{{
          includes === true ? "done" : "remove"
        }}</i>
        <span class="ps-3">{{ label }}</span>
      </div>

      <a
        :href="action.route"
        class="btn btn-icon d-lg-block mt-3 mb-0"
        :class="`bg-gradient-${action.color}`"
      >
        {{ action.label }}
        <i class="fas fa-arrow-right ms-1"></i>
      </a>
    </div>
  </div>
</template>
