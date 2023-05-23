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
    profileData.value = processProfileData(profileDataRecieved.data);
};

const processProfileData = (data) => {
    return {
        ...data,
        name: data.name || '🤷 No Name Provided',
        location: data.location || '🌍 No Location Provided',
        short_intro: data.short_intro || '📝 No Short Intro Provided',
        bio: data.bio || '📘 No Bio Provided',
        profile_image: data.profile_image || '📷 No Image Provided',
        social_github: data.social_github || '👨‍💻 No Github Provided',
        social_twitter: data.social_twitter || '🐦 No Twitter Provided',
        social_vk: data.social_vk || '🔵 No VK Provided',
        social_youtube: data.social_youtube || '▶️ No YouTube Provided',
        social_website: data.social_website || '🌐 No Website Provided',
    };
};

onMounted(async() => {
    await getProfile();
});


</script>


<template>
    <NavbarDefault />
    <div class="profile-container">
      <h2>{{ profileData.name }}</h2>
        
        
        <img :src="profileData.profile_image" alt="Profile Image">
        <p>{{ profileData.email }}</p>
        <p>Местоположение: {{ profileData.location }}</p>
        <p>Краткое описание: {{ profileData.short_intro }}</p>
        <p>Биография: {{ profileData.bio }}</p>
        <p>
        <a :href="`${profileData.social_github}`" target="_blank">Ссылка на GitHub</a>
        </p>
        <p>
        <a :href="`${profileData.social_twitter}`" target="_blank">Ссылка на Twitter</a>
        </p>
        
        <p>
          <a :href="`${profileData.social_vk}`" target="_blank">Ссылка на VK</a>
        </p>

        <p> 
          <a :href="`${profileData.social_youtube}`" target="_blank">Ссылка на YouTube</a>
        </p>
        
       
        <p>
          <a :href="`${profileData.social_website}`" target="_blank">Ссылка на сайт</a>
        </p>
        <a :href="`/editmyprofile`">Редактирование профиля</a>
        
        

      
    </div>
  </template> 



<style scoped>
.profile-container {
  width: 50%;
  padding: 20px;
  box-shadow: 0px 0px 10px 0px rgba(6, 104, 14, 0.281);
  margin: 5% auto;
  background-color: #ffffff57;
  border-radius: 10px;
}

.profile-container img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  justify-content: center;
  align-content: center;
  align-items: center;
  display: flex;
}

h1,h2{
  /*font-family: 'PressStart2P';*/
  color:rgb(70, 104, 105);
  font-weight: 800;
  text-align: center;
}
p{
  font-family: 'SpaceMono' monospace;
  font-weight: 500;
}
button{
  background-color: #3d9132;
  border-radius: 10px;
  text-align: center;
  color: rgb(255, 255, 255);
  font-weight: 500;
  width: 50%;
  margin-bottom: 10px;
}
button:hover{
  background-color: #6ac55e;
  color: rgb(61, 61, 61);
}


</style>