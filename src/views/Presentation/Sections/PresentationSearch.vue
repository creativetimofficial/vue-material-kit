<script setup>
import { onMounted, onUnmounted } from "vue";
import axios from 'axios';
import { ref } from "vue";


const searchQuery = ref('');
const searchResultProjects = ref([]);
const searchResultUsers = ref([]);

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




</script>


<template>
    <div class="searchBar">
    <!-- Added @keyup.enter="search" to enable searching by pressing Enter key -->
    <!-- Added class searchInput for styling -->
    <input class="searchInput" type="text" v-model="searchQuery" @keyup.enter="search" placeholder="Поиск по проектам и людям" />
    <!-- Added class searchButton for styling -->
    <button class="searchButton" type="submit" @click="search">Go</button>
  </div>

    <div>
        <h2>Найдено проектов: {{ searchResultProjects.length}} </h2>
        <div v-for = "project in searchResultProjects" :key="project.id">
            <h3>{{ project.title }} with ID {{ project.id }}</h3>
            <p>{{ project.description }}</p>
            <a :href="`http://somebodyhire.me/project/${project.id}`">Страница проекта</a>

        </div>
        <h2>Найдено людей: {{ searchResultUsers.length}} </h2>
        <div v-for = "user in searchResultUsers" :key="user.id">
            <h3>{{ user.username }} with id {{ user.id }}</h3>
            <p>{{ user.email }}</p>
            <a :href="`http://somebodyhire.me/profile/${user.id}`">Страница пользователя</a>
            
            
        </div>

    </div>
        


  </template>

<style scoped>
.searchBar {
  display: flex;
  justify-content: center;
  align-items: center;
}

.searchInput {
  /* Makes the search input take up the maximum available width */
  flex-grow: 1;
  /* Adds some padding inside the input field */
  padding: 10px;
  /* Adds some margin to the right side of the input field */
  margin-right: 10px;
  /* Increased the font size a bit */
  font-size: 16px;
}

.searchButton {
  /* Adds some padding inside the button */
  padding: 10px 20px;
  /* Changes the font size */
  font-size: 16px;
  /* Changes the background color of the button */
  background-color: #007BFF;
  /* Changes the color of the text inside the button */
  color: white;
  /* Makes the border corners rounded */
  border-radius: 4px;
  /* Removes the default button border */
  border: none;
  /* Changes the cursor to a hand pointer when hovering over the button */
  cursor: pointer;
}

.searchButton:hover {
  /* Changes the background color of the button when hovering over it */
  background-color: #0056b3;
}
</style>
  