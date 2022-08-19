<script setup>
//Vue Material Kit 2 components
import MaterialButton from "@/components/MaterialButton.vue";
</script>
<template>
  <section class="py-7 m-3 bg-gray-100">
    <div class="container">
      <div class="row justify-space-between text-center py-2">
        <div class="col-12 mx-auto">
          <MaterialButton
            variant="gradient"
            color="secondary"
            class="w-auto me-2"
            >Primary</MaterialButton
          >
          <MaterialButton variant="gradient" color="primary" class="w-auto me-2"
            >Secondary</MaterialButton
          >
          <MaterialButton variant="gradient" color="info" class="w-auto me-2"
            >Info</MaterialButton
          >
          <MaterialButton variant="gradient" color="success" class="w-auto me-2"
            >Success</MaterialButton
          >
          <MaterialButton variant="gradient" color="warning" class="w-auto me-2"
            >Warning</MaterialButton
          >
          <MaterialButton variant="gradient" color="danger" class="w-auto me-2"
            >Danger</MaterialButton
          >
          <MaterialButton variant="gradient" color="light" class="w-auto me-2"
            >Light</MaterialButton
          >
          <MaterialButton variant="gradient" color="dark" class="w-auto me-2"
            >Dark</MaterialButton
          >
          <MaterialButton variant="gradient" color="white" class="w-auto me-2"
            >White</MaterialButton
          >
        </div>
      </div>
    </div>
  </section>
</template>
