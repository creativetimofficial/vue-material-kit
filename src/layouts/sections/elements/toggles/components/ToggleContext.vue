<script setup>
//Vue Material Kit 2 components
import MaterialSwitch from "@/components/MaterialSwitch.vue";
</script>
<template>
  <div class="container py-6 mt-3">
    <div class="d-flex justify-content-center align-items-center">
      <MaterialSwitch
        class="mb-0"
        id="flexSwitchCheckDefault1"
        labelClass="text-dark font-weight-bold d-block text-sm"
      >
        Remember me

        <template #description>
          <span class="ms-1 text-xs d-block"
            >Be sure that you will always be logged in.</span
          >
        </template>
      </MaterialSwitch>
    </div>
  </div>
</template>
