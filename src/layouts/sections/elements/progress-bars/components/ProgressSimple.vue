<script setup>
//Vue Material Kit 2 components
import MaterialProgress from "@/components/MaterialProgress.vue";
</script>
<template>
  <section class="py-6 mt-4">
    <div class="container">
      <div class="row justify-space-between py-2">
        <div class="col-lg-6 mx-auto">
          <MaterialProgress class="mb-3" color="primary" :value="50" />
          <MaterialProgress class="mb-3" color="secondary" :value="50" />
          <MaterialProgress class="mb-3" color="success" :value="50" />
          <MaterialProgress class="mb-3" color="info" :value="50" />
          <MaterialProgress class="mb-3" color="warning" :value="50" />
          <MaterialProgress class="mb-3" color="danger" :value="50" />
          <MaterialProgress class="mb-3" color="dark" :value="50" />
        </div>
      </div>
    </div>
  </section>
</template>
