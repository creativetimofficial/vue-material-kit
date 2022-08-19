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
            class="input-group-outline mb-4"
            :label="{ text: 'Outline', class: 'form-label' }"
            type="text"
          />
        </div>
      </div>
    </div>
  </section>
</template>
