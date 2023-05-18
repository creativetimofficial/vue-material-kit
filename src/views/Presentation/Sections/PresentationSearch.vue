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
        <input type="text" v-model="searchQuery" placeholder="Поиск по проектам и людям" />
        <button type="submit" @click="search">Go</button>
    </div>

    <div>
        <h2>Найдено проектов: {{ searchResultProjects.length}} </h2>
        <h2>Найдено людей: {{ searchResultUsers.length}} </h2>
    
    </div>
        


  </template>

<style scoped>
.searchBar{
    display: flex;
    justify-content: center;

}
</style>
  