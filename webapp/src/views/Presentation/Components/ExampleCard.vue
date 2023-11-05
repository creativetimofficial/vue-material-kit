<script setup>
import { onMounted } from "vue";

// tooltip
import setTooltip from "@/assets/js/tooltip";

// store
import { useAppStore } from "@/stores";
const store = useAppStore();

defineProps({
  route: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: "",
  },
  subtitle: {
    type: String,
    default: "",
  },
  pro: {
    type: Boolean,
    default: false,
  },
});

onMounted(() => {
  setTooltip(store.bootstrap);
});
</script>
<script>
export default {
  inheritAttrs: false,
};
</script>
<template>
  <RouterLink :to="{ name: route }">
    <div
      class="card move-on-hover"
      v-bind="$attrs"
      :data-bs-toggle="pro ? 'tooltip' : null"
      :data-bs-placement="pro ? 'top' : null"
      :title="pro ? 'Pro Element' : null"
    >
      <img
        class="w-100"
        :class="pro && 'opacity-6'"
        :src="image"
        :alt="title"
        loading="lazy"
      />
      <svg
        v-if="pro"
        class="position-absolute"
        :style="{ top: 10, right: 10 }"
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <g
          id="lock-black"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <circle id="Oval" fill="#1F2937" cx="12" cy="12" r="12"></circle>
          <g
            id="padlock"
            transform="translate(7.000000, 5.000000)"
            fill="#FFFFFF"
            fill-rule="nonzero"
          >
            <path
              d="M5,0 C3.16666667,0 1.66666667,1.5 1.66666667,3.33333333 L1.66666667,4.58333333 C0.666666667,5.5 0,6.83333333 0,8.33333333 C0,11.0833333 2.25,13.3333333 5,13.3333333 C7.75,13.3333333 10,11.0833333 10,8.33333333 C10,6.83333333 9.33333333,5.5 8.33333333,4.58333333 L8.33333333,3.33333333 C8.33333333,1.5 6.83333333,0 5,0 Z M5.83333333,8.91666667 L5.83333333,10.8333333 L4.16666667,10.8333333 L4.16666667,8.91666667 C3.66666667,8.66666667 3.33333333,8.08333333 3.33333333,7.5 C3.33333333,6.58333333 4.08333333,5.83333333 5,5.83333333 C5.91666667,5.83333333 6.66666667,6.58333333 6.66666667,7.5 C6.66666667,8.08333333 6.33333333,8.66666667 5.83333333,8.91666667 Z M6.66666667,3.66666667 C6.16666667,3.41666667 5.58333333,3.33333333 5,3.33333333 C4.41666667,3.33333333 3.83333333,3.41666667 3.33333333,3.66666667 L3.33333333,3.33333333 C3.33333333,2.41666667 4.08333333,1.66666667 5,1.66666667 C5.91666667,1.66666667 6.66666667,2.41666667 6.66666667,3.33333333 L6.66666667,3.66666667 Z"
            ></path>
          </g>
        </g>
      </svg>
    </div>
    <div class="mt-2 ms-2">
      <h6 class="mb-0">{{ title }}</h6>
      <p class="text-secondary text-sm font-weight-normal">
        {{ subtitle }}
      </p>
    </div>
  </RouterLink>
</template>
