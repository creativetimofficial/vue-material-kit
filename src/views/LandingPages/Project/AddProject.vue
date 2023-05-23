<script setup>
import axios from 'axios';
import { ref, computed } from "vue";
import NavbarDefault from "../../../examples/navbars/NavbarDefault.vue";
import { useRouter } from "vue-router";

const isAuthenticated = computed(() => !!sessionStorage.getItem('access_token'));
const userId = computed(() => sessionStorage.getItem('user_id'));
const loggedUserName = computed(() => sessionStorage.getItem('username'));
const token = computed(() => sessionStorage.getItem('access_token'));

const projectData = ref({
    title: "",
    description: "",
    featured_image: "",
    demo_link: null,
    source_link: null,
    vote_total: 0,
    vote_ratio: 0,
    owner: userId.value,
    tags: []
});

const router = useRouter();

const debugText = ref('');

// Axios request and response interceptors
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

const createProject = async () => {
    try {
        const headers = { 'Authorization': `Bearer ${token.value}` };
        const data = {
            title: projectData.value.title,
            description: projectData.value.description,
            demo_link: projectData.value.demo_link,
            source_link: projectData.value.source_link,
            vote_total: projectData.value.vote_total,
            vote_ratio: projectData.value.vote_ratio,
            owner: userId.value
        };
        const response = await axios.post('http://somebodyhire.me/api/projects/create/', data, { headers });
        router.push(`/project/${response.data.id}`);
    } catch (error) {
        debugText.value = `Error: ${JSON.stringify(error, null, 2)}`;
        console.error(error);
    }
};

const cancelCreate = () => {
    router.push('/projects');
};

</script>

<template>
    <NavbarDefault />
    <div class="profile-container">
      <h1>Create a Project for {{ loggedUserName }}</h1>
        <textarea readonly v-model="debugText"></textarea>
        <input type="text" v-model="projectData.title" placeholder="Title">
        <input type="text" v-model="projectData.description" placeholder="Description">
        <textarea v-model="projectData.featured_image" placeholder="Link to featured image"></textarea>
        <textarea v-model="projectData.demo_link" placeholder="Demo link"></textarea>
        <textarea v-model="projectData.source_link" placeholder="Source code link"></textarea>
        <button @click="createProject" class="btn-submit">Submit</button>
        <button @click="cancelCreate" class="btn-cancel">Cancel</button>
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