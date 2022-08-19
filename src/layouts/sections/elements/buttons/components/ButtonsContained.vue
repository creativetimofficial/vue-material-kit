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
            variant="contained"
            color="secondary"
            class="w-auto me-2"
          >
            Primary
          </MaterialButton>

          <MaterialButton
            variant="contained"
            color="primary"
            class="w-auto me-2"
          >
            Secondary
          </MaterialButton>

          <MaterialButton variant="contained" color="info" class="w-auto me-2">
            Info
          </MaterialButton>

          <MaterialButton
            variant="contained"
            color="success"
            class="w-auto me-2"
          >
            Success
          </MaterialButton>

          <MaterialButton
            variant="contained"
            color="warning"
            class="w-auto me-2"
          >
            Warning
          </MaterialButton>

          <MaterialButton
            variant="contained"
            color="danger"
            class="w-auto me-2"
          >
            Danger
          </MaterialButton>

          <MaterialButton variant="contained" color="light" class="w-auto me-2">
            Light
          </MaterialButton>

          <MaterialButton variant="contained" color="dark" class="w-auto me-2">
            Dark
          </MaterialButton>
          <MaterialButton variant="contained" color="white" class="w-auto me-2">
            White
          </MaterialButton>
        </div>
      </div>
    </div>
  </section>
</template>
