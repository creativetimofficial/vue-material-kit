<script setup>
import axios from 'axios';
import { onMounted, ref, computed } from "vue";
import NavbarDefault from "../../../examples/navbars/NavbarDefault.vue";
import { useRouter } from "vue-router";

const isAuthenticated = computed(() => !!sessionStorage.getItem('access_token'));
const userId = computed(() => sessionStorage.getItem('user_id'));
const loggedUserName = computed(() => sessionStorage.getItem('username'));
const token = computed(() => sessionStorage.getItem('access_token'));

const profileData = ref([]);
const router = useRouter();
const debugText = ref('');
const selectedImage = ref(null);

const getProfile = async () => {
    const profileDataRecieved = await axios.get(`http://somebodyhire.me/api/profile/${userId.value}/`);
    profileData.value = processProfileData(profileDataRecieved.data);
};

const processProfileData = (data) => {
    return {
        name: data.name || '',
        email: data.email || '',
        username: data.username || '',
        location: data.location || '',
        short_intro: data.short_intro || '',
        bio: data.bio || '',
        social_github: data.social_github || '',
        social_twitter: data.social_twitter || '',
        social_vk: data.social_vk || '',
        social_youtube: data.social_youtube || '',
        social_website: data.social_website || '',
        profile_image: data.profile_image || '',
    };
};

// Эти функции нужны для отображения отладочных сообщений
axios.interceptors.request.use((request) => {
  if (request.data instanceof FormData) {
    const formData = request.data;
    for (let [key, value] of formData.entries()) {
      if (value instanceof File) {
        debugText.value += `\nFile being sent: ${value.name}, size: ${value.size} bytes`;
      } else {
        debugText.value += `\n${key}: ${value}`;
      }
    }
  } else {
    debugText.value += '\n\nRequest:\n' + JSON.stringify(request, null, 2);
  }
  return request;
});

axios.interceptors.response.use((response) => {
  debugText.value += '\n\nResponse:\n' + JSON.stringify(response, null, 2);
  return response;
}, (error) => {
  debugText.value += '\n\nResponse Error:\n' + JSON.stringify(error.toJSON(), null, 2);
  return Promise.reject(error);
});

const onFileChange = (event) => {
    selectedImage.value = event.target.files[0];
    debugText.value = `Selected image: ${selectedImage.value.name}`;
};

const updateProfile = async () => {
  try {
    const tokenValue = token.value;
    const headers = { 
      'Authorization': `Bearer ${tokenValue}`,
      'Content-Type': 'multipart/form-data'
    };

    // Create a new FormData object
    const formData = new FormData();

    // Append the profile data
    Object.entries(profileData.value).forEach(([key, value]) => {
      formData.append(key, value);
    });

   
    if (selectedImage.value) {
      formData.append('profile_image', selectedImage.value);
    };


    await axios.patch(`http://somebodyhire.me/api/profile/${userId.value}/`, formData, { headers });
    router.push('/ViewMyProfile');
  } catch (error) {
    debugText.value = `Error: ${JSON.stringify(error, null, 2)}`;
    console.error(error);
  }
};

const cancelUpdate = () => {
    router.push('/ViewMyProfile');
};

onMounted(async() => {
    await getProfile();
});
</script>

<template>
    <NavbarDefault />
    <div class="profile-container">
        <h1>User Profile: {{ loggedUserName }}</h1>
        <!-- 
          Это поле, в которое выводится весь обмен, происходящий между клиентом и сервером. Нужно для отладки.
          <textarea readonly v-model="debugText"></textarea> -->

        <!-- Событие происходит в момент загрузки файла. В этот момент в переменную selectedImage записывается файл, который был выбран. -->
        <img class="project-image" :src="profileData.profile_image" alt="Profile image">
        <input type="file" accept="image/*" @change="onFileChange">
        
        <input type="text" v-model="profileData.username" placeholder="Имя пользователя">
        <input type="email" v-model="profileData.email" placeholder="Email">
        <input type="text" v-model="profileData.name" placeholder="Полное имя">
        <input type="text" v-model="profileData.short_intro" placeholder="Краткое описание">
        <input type="text" v-model="profileData.location" placeholder="Местоположение">
        <textarea v-model="profileData.bio" placeholder="Подробное описание"></textarea>
        <textarea v-model="profileData.social_github" placeholder="GitHub"></textarea>
        <textarea v-model="profileData.social_twitter" placeholder="Twitter"></textarea>
        <textarea v-model="profileData.social_vk" placeholder="ВКонтакте"></textarea>
        <textarea v-model="profileData.social_youtube" placeholder="YouTube"></textarea>
        <textarea v-model="profileData.social_website" placeholder="Сайт"></textarea>
        <div>
        <button @click="updateProfile" class="btn-submit">Сохранить</button>
        <button @click="cancelUpdate" class="btn-cancel">Отменить</button>
        </div>
    </div>
</template>


<style scoped>
.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 5% 10%;
  padding: 20px;
  box-shadow: 0px 0px 10px 0px rgba(6, 104, 14, 0.281);
}

.profile-container img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
}


.profile-container input, .profile-container textarea {
  width: 100%; /* Make inputs and textareas take up the full width of the container */
  padding: 10px; /* Add some padding */
  margin-bottom: 15px; /* Add some margin */
  box-sizing: border-box; /* Ensure padding doesn't affect final dimensions */
  border: 1px solid #2ca33c; /* Add a border */
  border-radius: 5px; /* Add rounded corners */
}

/* Style for smaller screens */
@media (max-width: 768px) {
  .profile-container {
    width: 95%;
  }
}


.btn-submit {
    color: #fff;
    background-color: #4CAF50;
    border: none;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 5px;
}

.btn-cancel {
    color: #fff;
    background-color: #f44336;
    border: none;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 5px;
}
</style>