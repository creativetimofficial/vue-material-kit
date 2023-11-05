<script setup>
//Vue Material Kit 2 components
import MaterialBadge from "@/components/MaterialBadge.vue";
</script>
<template>
  <section class="py-7 m-3 bg-gray-100">
    <div class="container">
      <div class="row justify-space-between text-center py-2">
        <div class="col-12">
          <MaterialBadge variant="gradient" color="primary">
            Primary
          </MaterialBadge>

          <MaterialBadge variant="gradient" color="secondary" class="mx-1">
            Secondary
          </MaterialBadge>

          <MaterialBadge variant="gradient" color="success">
            Success
          </MaterialBadge>

          <MaterialBadge variant="gradient" color="danger" class="mx-1">
            Danger
          </MaterialBadge>

          <MaterialBadge variant="gradient" color="warning">
            Warning
          </MaterialBadge>

          <MaterialBadge variant="gradient" color="info" class="mx-1">
            Info
          </MaterialBadge>

          <MaterialBadge variant="gradient" color="light" class="text-dark">
            Light
          </MaterialBadge>

          <MaterialBadge variant="gradient" color="dark" class="ms-1">
            Dark
          </MaterialBadge>
        </div>
      </div>
    </div>
  </section>
</template>
