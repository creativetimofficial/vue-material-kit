<script setup>
import axios from 'axios';
import { onMounted, ref, computed } from "vue";
import NavbarDefault from "../../../examples/navbars/NavbarDefault.vue";

const isAuthenticated = computed(() => !!sessionStorage.getItem('access_token'));
const userId = computed(() => sessionStorage.getItem('user_id'));
const loggedUserName = computed(() => sessionStorage.getItem('username'));

const profileData = ref([]);


const getProfile = async () => {
    const profileDataRecieved = await axios.get(`http://somebodyhire.me/api/profile/${userId.value}/`);
    profileData.value = profileDataRecieved.data;

};

onMounted(async() => {
    await getProfile();
});

</script>

<script>



</script>


<template>
    <NavbarDefault />
    <div>
      <h1>Профиль пользователя {{ loggedUserName }} id {{ userId }}</h1>
      <h2>{{ profileData.username }}</h2>
        <p>{{ profileData.email }}</p>  
      
    </div>
  </template> 



<style scoped>
</style>