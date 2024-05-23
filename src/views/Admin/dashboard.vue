<template>


  <div class="dashboard-page">
    <div class="row">
      <div class="col-3">
        <Sidebar />
      </div>
      <div class="col-9">
        <router-view />
      </div>
    </div>
  </div>

</template>

<script>
import Sidebar from './SideNavAdmin.vue';

export default {
  components: { Sidebar }
}
</script>