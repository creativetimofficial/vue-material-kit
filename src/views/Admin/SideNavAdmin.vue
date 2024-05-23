<template>

  <div class="aside-menu">
    <nav class="nav flex-column">
      <a class="nav-link" href="#" @click.prevent="goToPage('el-badges')" active-class="active">
        <i class="bi bi-speedometer2"></i> Dashboard
      </a>
      <a class="nav-link" href="#" @click.prevent="goToPage('admin-users')" active-class="active">
        <i class="bi bi-people"></i> Users
      </a>
      <a class="nav-link" href="#" @click.prevent="goToPage('admin-settings')" active-class="active">
        <i class="bi bi-bar-chart"></i> Analytics
      </a>
    </nav>
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

<style>
.aside-menu {
  background-color: #f8f9fa;
  padding: 1rem;
  height: 100vh;
  border-right: 1px solid #e9ecef;
}

.nav-link {
  color: #495057 !important;
}

.nav-link.active {
  color: #007bff;
  font-weight: bold;
}
</style>