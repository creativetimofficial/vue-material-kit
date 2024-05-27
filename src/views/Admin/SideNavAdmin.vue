<template>


 <div id="sidebar">
  
    <ul class="nav">
      <li>
        <a class="nav-link" href="#" @click.prevent="goToPage('el-badges')" active-class="active">
        <i class="zmdi zmdi-view-dashboard"></i> Dashboard
      </a>
        
      </li>
      <li>
        <a class="nav-link" href="#" @click.prevent="goToPage('admin-users')" >
        <i class="zmdi zmdi-link"></i> Users
      </a>
        
      </li>
      <li>

        <a class="nav-link" href="#" @click.prevent="goToPage('admin-settings')">
        <i class="zmdi zmdi-widgets"></i> Analytics
      </a>
        
      </li>
     
    </ul>
  </div>




</template>

<script>
export default {
  methods: {
    goToPage(page) {
      this.$router.push({ name: page });
    }
  }
}
</script>

