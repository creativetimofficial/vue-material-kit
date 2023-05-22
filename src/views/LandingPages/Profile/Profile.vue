<script setup>
import axios from 'axios';
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import NavbarDefault from '../../../examples/navbars/NavbarDefault.vue';

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
  <NavbarDefault />
  <div class="profile-container">
    <h1>Профиль пользователя {{ loggedUserName }}</h1>
      <h2>{{ profileData.username }}</h2>
      <p>{{ profileData.email }}</p>
      <P>Имя: {{ profileData.name }}</P>
      <p>Местоположение: {{ profileData.location }}</p>
      <p>Краткое описание: {{ profileData.short_intro }}</p>
      <p>Биография: {{ profileData.bio }}</p>
      <p>Ссылка на изображение: {{ profileData.profile_image }}</p>
      <p>Ссылка на GitHub: {{ profileData.social_github }}</p>
      <p>Ссылка на Twitter: {{ profileData.social_twitter }}</p>
      <p>Ссылка на VK: {{ profileData.social_vk }}</p>
      <p>Ссылка на YouTube: {{ profileData.social_youtube }}</p>
      <p>Ссылка на сайт: {{ profileData.social_website }}</p>
      

    
  </div>
</template> 



<style scoped>
.profile-container {
display: flex;
flex-direction: column;
align-items: center;
width: 80%;
margin: auto;
padding: 20px;
box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
}

.profile-container img {
width: 100px;
height: 100px;
border-radius: 50%;
object-fit: cover;
margin-bottom: 20px;
}
</style>