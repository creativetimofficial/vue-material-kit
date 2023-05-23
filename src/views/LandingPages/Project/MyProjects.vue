<script setup>
import { onMounted, onUnmounted, computed } from "vue";
import axios from 'axios';
import { ref } from "vue";
import NavbarDefault from "../../../examples/navbars/NavbarDefault.vue";

const searchQuery = ref('');
const searchResultProjects = ref([]);
const searchResultUsers = ref([]);

const userId = computed(() => sessionStorage.getItem('user_id'));
const username = computed(() => sessionStorage.getItem('username'));

const search = async () => {
  try {
    const projectsResponse = await axios.get(`http://somebodyhire.me/api/search/projects/?search_query=${searchQuery.value}`);
    searchResultProjects.value = projectsResponse.data;

    const usersResponse = await axios.get(`http://somebodyhire.me/api/search/profiles/?search_query=${searchQuery.value}`);
    searchResultUsers.value = usersResponse.data;
  } catch (error) {
    console.error('There was an error fetching the search results', error);
  }
};


onMounted(() => {
  search();
});

</script>


<template>
<NavbarDefault  />
  <div>
    <h2 class="result-header">Проекты пользователя {{ username }}</h2>
    <div class="result-grid">
      <div class="result-card" v-for="project in searchResultProjects" :key="project.id">
        <div v-if = "project.owner == userId" class="project-owner-note">
        <h3>{{ project.title }} with ID {{ project.id }}</h3>
        <p>{{ project.description }}</p>
        <p>Создатель: {{ project.owner }} </p>
        <a :href="`/project/${project.id}`">Страница проекта</a>
        <p></p>
        <a :href="`/editproject/${project.id}`">Редактирование проекта</a>

    </div>  
    </div>
    </div>
    
  </div>


  </template>

<style scoped>
.searchBar {
  display: flex;
  justify-content: center;
  align-items: center;
}


.result-header {
  color: #fff;
  background-color: #333;
  padding: 10px;
  text-align: center;
  margin-top: 20px;
}

.result-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.result-card {
  display: flex;
  flex-direction: column;
  background-color: rgba(92, 90, 90, 0.5);
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  width: calc(100% / 3 - 20px);
  box-sizing: border-box;
}

@media screen and (max-width: 992px) {
  .result-card {
    width: calc(100% / 2 - 20px);
  }
}

@media screen and (max-width: 600px) {
  .result-card {
    width: 100%;
  }
}

</style>