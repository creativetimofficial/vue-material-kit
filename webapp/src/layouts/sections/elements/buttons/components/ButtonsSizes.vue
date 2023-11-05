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
            color="success"
            size="sm"
            class="me-2"
            >Small</MaterialButton
          >
          <MaterialButton variant="gradient" color="success" class="w-auto me-2"
            >Default</MaterialButton
          >
          <MaterialButton variant="gradient" color="success" size="lg"
            >Large</MaterialButton
          >
        </div>
      </div>
    </div>
  </section>
</template>
