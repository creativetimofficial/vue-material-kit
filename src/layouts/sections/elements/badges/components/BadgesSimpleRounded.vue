<script setup>
//Vue Material Kit 2 components
import MaterialBadge from "@/components/MaterialBadge.vue";
</script>
<template>
  <section class="py-7 m-3 bg-gray-100">
    <div class="container">
      <div class="row justify-space-between text-center py-2">
        <div class="col-12">
          <MaterialBadge color="primary" rounded> Primary </MaterialBadge>

          <MaterialBadge color="secondary" rounded class="mx-1">
            Secondary
          </MaterialBadge>

          <MaterialBadge color="success" rounded> Success </MaterialBadge>

          <MaterialBadge color="danger" rounded class="mx-1">
            Danger
          </MaterialBadge>

          <MaterialBadge color="warning" rounded> Warning </MaterialBadge>

          <MaterialBadge color="info" rounded class="mx-1">
            Info
          </MaterialBadge>

          <MaterialBadge color="light" rounded class="text-dark">
            Light
          </MaterialBadge>

          <MaterialBadge color="dark" rounded class="ms-1">
            Dark
          </MaterialBadge>
        </div>
      </div>
    </div>
  </section>
</template>
