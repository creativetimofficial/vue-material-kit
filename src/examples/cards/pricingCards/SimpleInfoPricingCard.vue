<script setup>
defineProps({
  variant: {
    validator(val) {
      return ["gradient", "fill"].includes(val);
    },
  },
  color: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "",
  },
  title: {
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
    label: String,
    color: String,
    default: () => ({
      label: "Buy now",
      color: "bg-gradient-success",
    }),
  },
});

function getColor(variant, color) {
  let colorValue;

  // Setting the button variant and color
  if (variant === "gradient") {
    colorValue = `bg-gradient-${color}`;
  } else if (variant === "fill") {
    colorValue = `bg-${color}`;
  }

  return colorValue;
}
</script>
<template>
  <div
    class="card card-pricing border-0 text-center mb-4 overflow-hidden"
    :class="getColor(variant, color)"
  >
    <img
      v-if="image"
      :src="image"
      alt="pattern-lines"
      class="position-absolute opacity-6 h-100"
    />
    <div class="card-header bg-transparent">
      <h6
        class="text-uppercase ls-1 py-3 mb-0"
        :class="variant == 'gradient' ? 'text-white' : 'text-dark'"
      >
        {{ title }}
      </h6>
    </div>
    <div
      class="card-body position-relative"
      :class="variant == 'gradient' ? 'text-white' : 'text-dark'"
    >
      <p class="display-2 font-weight-bold mb-0">
        {{ price.currency ? price.currency : "$" }}{{ price.amount }}
      </p>
      <span>{{ price.charged }}</span>
      <ul class="list-unstyled my-4">
        <li
          class="align-items- mb-2"
          v-for="specification of specifications"
          :key="specification"
          v-html="specification"
        ></li>
      </ul>
    </div>
    <div class="card-footer bg-transparent position-relative">
      <button class="btn" :class="action.color">{{ action.label }}</button>
    </div>
  </div>
</template>
