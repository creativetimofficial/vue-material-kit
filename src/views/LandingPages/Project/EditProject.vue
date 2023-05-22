<script setup>
import axios from 'axios';
import { onMounted, ref, computed } from "vue";
import NavbarDefault from "../../../examples/navbars/NavbarDefault.vue";
import { useRouter } from "vue-router";
import { useRoute } from 'vue-router';

const isAuthenticated = computed(() => !!sessionStorage.getItem('access_token'));
const userId = computed(() => sessionStorage.getItem('user_id'));
const loggedUserName = computed(() => sessionStorage.getItem('username'));
const token = computed(() => sessionStorage.getItem('access_token'));

const projectData = ref([]);
const router = useRouter();
const debugText = ref('');
const projectId = ref(null);
const route = useRoute();


// const getProfile = async () => {
//     const profileDataRecieved = await axios.get(`http://somebodyhire.me/api/profile/${userId.value}/`);
//     profileData.value = processProfileData(profileDataRecieved.data);
// };


axios.interceptors.request.use((request) => {
  debugText.value += '\n\nRequest:\n' + JSON.stringify(request, null, 2);
  return request;
});

axios.interceptors.response.use((response) => {
  debugText.value += '\n\nResponse:\n' + JSON.stringify(response, null, 2);
  return response;
}, (error) => {
  debugText.value += '\n\nResponse Error:\n' + JSON.stringify(error.toJSON(), null, 2);
  return Promise.reject(error);
});

const getProject = async () => {
    try {
        const projectDataRecieved = await axios.get(`http://somebodyhire.me/api/projects/${projectId.value}/`);
        projectData.value = projectDataRecieved.data;
    } catch (error) {
        console.error('There was an error fetching the project data', error);
    }
};

// const updateProfile = async () => {
//     try {
//         const token = computed(() => sessionStorage.getItem('access_token'));
//         debugText.value = `Type of token: ${typeof token.value}, Value of token: ${token.value}`;
//         const headers = { 'Authorization': `Bearer ${token.value}` };
//         await axios.patch(`http://somebodyhire.me/api/profile/${userId.value}/`, profileData.value, { headers });
//         router.push('/ViewMyProfile');
//     } catch (error) {
//         debugText.value = `Error: ${JSON.stringify(error, null, 2)}`;
//         console.error(error);
//     }
// };

const updateProject = async () => {
    try {
        const headers = { 'Authorization': `Bearer ${token.value}` };
        const data = {
            title: projectData.value.title,
            description: projectData.value.description,
            demo_link: projectData.value.demo_link,
            source_link: projectData.value.source_link,
            tags: projectData.value.tags,

        };
        const response = await axios.patch(`http://somebodyhire.me/api/projects/${projectId.value}/`, data, { headers });
        router.push(`/project/${response.data.id}`);
    } catch (error) {
        debugText.value = `Error: ${JSON.stringify(error, null, 2)}`;
        console.error(error);
    }
};

const cancelUpdate = () => {
    router.push('/myprojects');
};

onMounted(async() => {
    projectId.value = route.params.id;
    await getProject();
});
</script>

<template>
    <NavbarDefault />
    <div class="profile-container">
        <H1> Страница Редактирования Проекта {{ projectId }}</H1>
        <div v-if="!isAuthenticated">
            <h1>Вы не авторизованы</h1>
        </div>
        <div v-else>
            <div v-if = "userId == projectData.owner">
        <h1>User Profile: {{ loggedUserName }}</h1>
        <textarea readonly v-model="debugText"></textarea>
        <input type="text" v-model="projectData.title" placeholder="Title">
        <input type="text" v-model="projectData.description" placeholder="Description">
        <textarea v-model="projectData.demo_link" placeholder="Demo link"></textarea>
        <textarea v-model="projectData.source_link" placeholder="Source code link"></textarea>
        <textarea v-model="projectData.tags" placeholder="Tags"></textarea>
        <button @click="updateProject" class="btn-submit">Update</button>
        <button @click="cancelUpdate" class="btn-cancel">Cancel</button>
            </div>
            <div v-else>
                <h1>Вы не являетесь владельцем проекта</h1>
            </div>
        </div>
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


.profile-container input, .profile-container textarea {
  width: 100%; /* Make inputs and textareas take up the full width of the container */
  padding: 10px; /* Add some padding */
  margin-bottom: 15px; /* Add some margin */
  box-sizing: border-box; /* Ensure padding doesn't affect final dimensions */
  border: 1px solid #ccc; /* Add a border */
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