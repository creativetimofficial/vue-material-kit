<!-- Шаблон для страницы, содержимое которой видно только зарегистрированным пользователям -->

<script setup>

import { computed } from "vue";

// example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import Header from "@/examples/Header.vue";


const isAuthenticated = computed(() => !!sessionStorage.getItem('access_token')); // Computed property to check if the user is authenticated

</script>




<template>
  <DefaultNavbar  />

  <Header>
    <div v-if="isAuthenticated">
        <p>Наш главный секрет</p>
    </div>
    <div v-else>
        <p>здесь ничего нет</p>
    </div>
  </Header>
</template>