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
    <div>
        <h1>Забыли пароль?</h1>
    </div>
    <div v-if="isAuthenticated">
        <p>Как же ты зашёл тогда?</p>
    </div>
    <div v-else>
        <p>Очень жаль</p>
    </div>
  </Header>
</template>