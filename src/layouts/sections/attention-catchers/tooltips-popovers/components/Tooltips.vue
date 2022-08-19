<script setup>
import { onMounted } from "vue";
//Vue Material Kit 2 components
import MaterialButton from "@/components/MaterialButton.vue";

// popover
import setTooltip from "@/assets/js/tooltip";

// store
import { useAppStore } from "@/stores";
const store = useAppStore();

// hook
onMounted(() => {
  setTooltip(store.bootstrap);
});
</script>
<template>
  <div class="container">
    <div class="row py-8 text-center">
      <div>
        <MaterialButton
          variant="gradient"
          color="success"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Tooltip on top"
        >
          Tooltip on top
        </MaterialButton>

        <MaterialButton
          class="mx-2"
          variant="gradient"
          color="success"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          title="Tooltip on right"
        >
          Tooltip on right
        </MaterialButton>

        <MaterialButton
          variant="gradient"
          color="success"
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title="Tooltip on bottom"
        >
          Tooltip on bottom
        </MaterialButton>

        <MaterialButton
          class="ms-2"
          variant="gradient"
          color="success"
          data-bs-toggle="tooltip"
          data-bs-placement="left"
          title="Tooltip on left"
        >
          Tooltip on left
        </MaterialButton>
      </div>
    </div>
  </div>
</template>
