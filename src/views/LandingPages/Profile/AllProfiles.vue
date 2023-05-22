<script setup>
import { onMounted, onUnmounted } from "vue";
import axios from 'axios';
import { ref } from "vue";
import NavbarDefault from "../../../examples/navbars/NavbarDefault.vue";


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


onMounted(() => {
  search();
});

</script>


<template>
<NavbarDefault />
  <div>
    
    <h2 class="result-header">Найдено людей: {{ searchResultUsers.length}} </h2>
    <div class="result-grid">
      <div class="result-card" v-for="user in searchResultUsers" :key="user.id">
        <h3>{{ user.username }} with id {{ user.id }}</h3>
        <p>{{ user.email }}</p>
        <a :href="`/profile/${user.id}`">Страница пользователя</a>
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
  background-color: #3d9132;
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
  background-color: #25581e;
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
}

@media screen and (max-width: 600px) {
  .result-card {
    width: 100%;
  }
}

</style>