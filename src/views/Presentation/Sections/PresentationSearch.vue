<script setup>
import { onMounted, onUnmounted } from "vue";
import axios from 'axios';
import { ref } from "vue";


const searchQuery = ref('');
const searchResultProjects = ref([]);
const searchResultUsers = ref([]);
const searchButtonIsPressed = ref(false);
const search = async () => {
  try {
    const projectsResponse = await axios.get(`http://somebodyhire.me/api/search/projects/?search_query=${searchQuery.value}`);
    searchResultProjects.value = projectsResponse.data;

    const usersResponse = await axios.get(`http://somebodyhire.me/api/search/profiles/?search_query=${searchQuery.value}`);
    searchResultUsers.value = usersResponse.data;
    searchButtonIsPressed.value = true;
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
    <button class="searchButton" type="submit" @click="search">Погнали!</button>
  </div>

  <div v-if="searchResultProjects.length > 0 || searchResultUsers.length > 0">
    <!--<h2 class="result-header">Найдено проектов: {{ searchResultProjects.length}} </h2>-->
    <div class="result-grid">
      <div class="result-card" v-for="project in searchResultProjects" :key="project.id">
        <h3>{{ project.title }} with ID {{ project.id }}</h3>
        <p>{{ project.description }}</p>
        <a :href="`http://somebodyhire.me/project/${project.id}`">Страница проекта</a>
      </div>
    </div>
    <!--<h2 class="result-header">Найдено людей: {{ searchResultUsers.length}} </h2>-->
    <div class="result-grid">
      <div class="result-card" v-for="user in searchResultUsers" :key="user.id">
        <h3>{{ user.username }} with id {{ user.id }}</h3>
        <p>{{ user.email }}</p>
        <a :href="`http://somebodyhire.me/profile/${user.id}`">Страница пользователя</a>
      </div>
    </div>
  </div>
  <div v-else>
    <div v-if = "searchQuery.length > 0 && searchButtonIsPressed === true" >
      <h2 class="result-header">Увы и ах! Такого нет (</h2>
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
  margin-top: 20px;
  /* Increased the font size a bit */
  font-size: 16px;
  border-radius: 1%;

  border: 2px solid #66FCF1;
  border-radius: 5px;
  outline: none;
  background: #FAFAFA;
  color: #9E9C9C;
}

.searchButton {
  /* Adds some padding inside the button */
  padding: 12px 20px;
  /* Changes the font size */
  font-size: 16px;
  /* Changes the background color of the button */
  background-color: #66FCF1;
  /* Changes the color of the text inside the button */
  color: rgb(90, 90, 90);
  /* Makes the border corners rounded */
  border-radius: 4px;
  /* Removes the default button border */
  border: none;
  /* Changes the cursor to a hand pointer when hovering over the button */
  cursor: pointer;
  width: 10%;
  margin-top: 20px;
  
}

.searchButton:hover {
  /* Changes the background color of the button when hovering over it */
  background-color: #E01EB2;
  color: rgb(228, 228, 228);
}
.result-header {
  color: #fff;
  background-color: #333;
  padding: 10px;
  text-align: center;
  margin-top: 20px;

  border: 2px solid #66FCF1;
  border-radius: 5px;
  outline: none;
  color: #9E9C9C;
}

.result-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.result-card {
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.5);
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
  .searchButton{
    width: 20%;
  }
}

@media screen and (max-width: 600px) {
  .result-card {
    width: 100%;
  }
  .searchButton{
    width: 20%;
  }
}

</style>
  