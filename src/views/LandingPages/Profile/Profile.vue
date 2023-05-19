<script setup>
import axios from 'axios';
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";


const profileId = ref(null);
const route = useRoute();
const profileData = ref([]);

onMounted(async() => {
    profileId.value = route.params.id;
    await getProfile();
});


const getProfile = async () => {
    const profileDataRecieved = await axios.get(`http://somebodyhire.me/api/profile/${profileId.value}/`);
    profileData.value = profileDataRecieved.data;

};




</script>


<template>
    <div>
      <h1>Профиль пользователя номер: {{ profileData.id }}</h1>
      <h2>{{ profileData.username }}</h2>
        <p>{{ profileData.email }}</p>
         
      
    </div>
  </template> 



<style scoped>
</style>
  