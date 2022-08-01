export const breadcrumbsCode = `<script setup>
// example component
import Breadcrumbs from "@/examples/Breadcrumbs.vue";
</script>
<template>
<div class="container py-6 mt-2">
<div class="row px-8 ">
  <Breadcrumbs :routes="[{ label: 'Home', route: '/' }]" />

  <Breadcrumbs
    :routes="[
      { label: 'Home', route: '/' },
      { label: 'Library', route: '/' },
    ]"
  />
  <Breadcrumbs
    :routes="[
      { label: 'Home', route: '/some-route' },
      { label: 'Library', route: '/some-route' },
      { label: 'Data' },
    ]"
  />
</div>
</div>
</template>`;
