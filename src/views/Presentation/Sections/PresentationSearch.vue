<script setup>
import { onMounted, onUnmounted } from "vue";
import axios from 'axios';
import { ref } from "vue";

const searchQuery = ref('');
const searchResultProjects = ref([]);
const searchResultUsers = ref([]);

const search = async () => {
  try {
    const projectsResponse = await axios.get(`http://somebodyhire.me/api/projects/?search=${searchQuery.value}`);
    searchResultProjects.value = projectsResponse.data;

    const usersResponse = await axios.get(`http://somebodyhire.me/api/profiles/?search=${searchQuery.value}`);
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
    <div class="results" v-if="searchResultProjects.length || searchResultUsers.length">
        <div v-if="searchResultProjects.value.length">
            <h2>Projects Results</h2>
            <p>Number of results: {{ searchResultProjects.value.length }}</p>
        </div>

        <div v-if="searchResultUsers.value.length">
            <h2>User Profile Results</h2>
            <p>Number of results: {{ searchResultUsers.value.length }}</p>
        </div>
    
    </div>
        


  </template>

<style scoped>
.searchBar{
    display: flex;
    justify-content: center;

}
</style>
  