<template>
  <aside class="sidebar">
    <ul>
      <li><a href="#" @click.prevent="goToPage('el-badges')">Dashboard</a></li>
      <li><a href="#" @click.prevent="goToPage('admin-users')">Users</a></li>
      <li><a href="#" @click.prevent="goToPage('admin-settings')">Settings</a></li>
    </ul>
  </aside>
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