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


</script>


<template>
  <NavbarDefault />
  <div class="profile-container">
    <h1>Профиль пользователя</h1>
      <h2>{{ profileData.username }}</h2>
      <p>{{ profileData.email }}</p>
      <P>Имя: {{ profileData.name }}</P>
      <p>Местоположение: {{ profileData.location }}</p>
      <p>Краткое описание: {{ profileData.short_intro }}</p>
      <p>Биография: {{ profileData.bio }}</p>
      <!--<p>Ссылка на изображение: {{ profileData.profile_image }}</p>-->
      <p>Ссылка на GitHub: {{ profileData.social_github }}</p>
      <p>Ссылка на Twitter: {{ profileData.social_twitter }}</p>
      <p>Ссылка на VK: {{ profileData.social_vk }}</p>
      <p>Ссылка на YouTube: {{ profileData.social_youtube }}</p>
      <p>Ссылка на сайт: {{ profileData.social_website }}</p>
      <button>Message</button>
  </div>
</template> 

<style scoped>
.profile-container {
width: 50%;
margin: 5% 25%;
padding: 20px;
box-shadow: 0px 0px 10px 0px rgba(6, 104, 14, 0.281);
background-color: #ffffff57;
border-radius: 10px;
}

.profile-container img {
width: 100px;
height: 100px;
border-radius: 50%;
object-fit: cover;
margin-bottom: 20px;

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
  margin-left: 25%;
}
button:hover{
  background-color: #6ac55e;
  color: rgb(61, 61, 61);
}
</style>