export const popoversCode = `<script setup>
import { onMounted } from "vue";
//Vue Material Kit 2 components
import MaterialButton from "@/components/MaterialButton.vue";

// popover
import setPopover from "@/assets/js/popover";

// store
import { useAppStore } from "@/stores";
const store = useAppStore();

// hook
onMounted(() => {
  setPopover(store.bootstrap);
});
</script>
<template>
  <div class="container">
    <div class="row py-7 text-center">
      <div>
        <MaterialButton
          variant="gradient"
          color="success"
          data-bs-container="body"
          data-bs-toggle="popover"
          data-bs-placement="top"
          data-bs-content="That’s the main thing people are controlled by! Thoughts- their perception of themselves!">
          Popover on top
        </MaterialButton>
        
        <MaterialButton
          class="mx-2"
          variant="gradient"
          color="success"
          data-bs-container="body"
          data-bs-toggle="popover"
          data-bs-placement="right"
          data-bs-content="We’re not always in the position that we want to be at.">
          Popover on right
        </MaterialButton>

        <MaterialButton
          variant="gradient"
          color="success"
          data-bs-container="body"
          data-bs-toggle="popover"
          data-bs-placement="bottom"
          data-bs-content="A lot of people don’t appreciate the moment until it’s passed.">
          Popover on bottom
        </MaterialButton>

        <MaterialButton
          class="ms-2"
          variant="gradient"
          color="success"
          data-bs-container="body"
          data-bs-toggle="popover"
          data-bs-placement="left"
          data-bs-content="It really matters and then like it really doesn’t matter. What matters is the people who are sparked by it.">
          Popover on left
        </MaterialButton>
      </div>
    </div>
  </div>
</template>
`;

export const tooltipsCode = `<script setup>
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
          title="Tooltip on top">
          Tooltip on top
        </MaterialButton>

        <MaterialButton
          class="mx-2"
          variant="gradient"
          color="success"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          title="Tooltip on right">
          Tooltip on right
        </MaterialButton>

        <MaterialButton
          variant="gradient"
          color="success"
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title="Tooltip on bottom">
          Tooltip on bottom
        </MaterialButton>

        <MaterialButton
          class="ms-2"
          variant="gradient"
          color="success"
          data-bs-toggle="tooltip"
          data-bs-placement="left"
          title="Tooltip on left">
          Tooltip on left
        </MaterialButton>
      </div>
    </div>
  </div>
</template>
`;
