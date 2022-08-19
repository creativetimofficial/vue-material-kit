<script setup>
//Vue Material Kit 2 components
import MaterialButton from "@/components/MaterialButton.vue";
</script>
<template>
  <section class="py-7 m-3 bg-gray-100">
    <div class="container">
      <div class="row justify-space-between text-center py-2">
        <div class="col-6 mx-auto">
          <div class="btn-group" role="group" aria-label="Basic example">
            <MaterialButton variant="outline" color="dark">
              Left
            </MaterialButton>
            <MaterialButton variant="outline" color="dark">
              Middle
            </MaterialButton>
            <MaterialButton variant="outline" color="dark">
              Right
            </MaterialButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
