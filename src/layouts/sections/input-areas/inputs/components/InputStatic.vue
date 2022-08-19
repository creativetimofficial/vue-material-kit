<script setup>
//Vue Material Kit 2 components
import MaterialInput from "@/components/MaterialInput.vue";
</script>
<template>
  <section class="py-7">
    <div class="container">
      <div class="row justify-space-between py-2">
        <div class="col-lg-4 mx-auto">
          <MaterialInput
            class="input-group-static mb-4"
            label="First Name"
            type="text"
            placeholder="eg. Thomas Shelby"
          />
        </div>
      </div>
    </div>
  </section>
</template>
