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
            class="btn-icon"
          >
            <div class="d-flex align-items-center">
              Small
              <i class="material-icons ms-2" aria-hidden="true">favorite</i>
            </div>
          </MaterialButton>

          <MaterialButton
            variant="gradient"
            color="success"
            class="btn-icon mx-2"
          >
            <div class="d-flex align-items-center">
              Default
              <i class="material-icons ms-2" aria-hidden="true">favorite</i>
            </div>
          </MaterialButton>

          <MaterialButton
            variant="gradient"
            color="success"
            size="lg"
            class="btn-icon"
          >
            <div class="d-flex align-items-center">
              Large
              <i class="material-icons ms-2" aria-hidden="true">favorite</i>
            </div>
          </MaterialButton>
        </div>
      </div>
    </div>
  </section>
</template>
