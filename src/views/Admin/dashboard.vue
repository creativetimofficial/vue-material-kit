<template>
    <div class="layout">
      <Sidebar />
      <div class="content">
        <router-view />
      </div>
    </div>
  </template>
  
  <script>
  import Sidebar from './SideNavAdmin.vue';
  
  export default {
    components: { Sidebar }
  }
  </script>