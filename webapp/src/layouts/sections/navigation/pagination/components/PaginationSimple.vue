<script setup>
//Vue Material Kit 2 components
import MaterialPagination from "@/components/MaterialPagination.vue";
import MaterialPaginationItem from "@/components/MaterialPaginationItem.vue";
</script>
<template>
  <section class="py-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 mx-auto">
          <MaterialPagination :style="{ marginLeft: '80px' }">
            <MaterialPaginationItem prev />
            <MaterialPaginationItem label="1" />
            <MaterialPaginationItem label="2" active />
            <MaterialPaginationItem label="3" />
            <MaterialPaginationItem label="4" />
            <MaterialPaginationItem label="5" />
            <MaterialPaginationItem next />
          </MaterialPagination>
        </div>
      </div>
    </div>
  </section>
</template>
