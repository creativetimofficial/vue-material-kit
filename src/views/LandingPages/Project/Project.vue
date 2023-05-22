<script setup>
import axios from 'axios';
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import NavbarDefault from '../../../examples/navbars/NavbarDefault.vue';


const projectId = ref(null);
const route = useRoute();
const projectData = ref([]);

onMounted(async() => {
    projectId.value = route.params.id;
    await getProject();
});


const getProject = async () => {
    try {
        const projectDataRecieved = await axios.get(`http://somebodyhire.me/api/projects/${projectId.value}/`);
        projectData.value = projectDataRecieved.data;
    } catch (error) {
        console.error('There was an error fetching the project data', error);
    }
};




</script>


<template>
  <NavbarDefault />
    <div v-if="projectData">
      <h1>Проект номер: {{ projectData.id }}</h1>
      <h2>{{ projectData.title }}</h2>
      <p>{{ projectData.description }}</p>
      <img :src="projectData.featured_image" alt="Featured image">
      <p v-if="projectData.demo_link">Demo Link: <a :href="projectData.demo_link">{{ projectData.demo_link }}</a></p>
      <p v-if="projectData.source_link">Source Link: <a :href="projectData.source_link">{{ projectData.source_link }}</a></p>
      <p>Total Votes: {{ projectData.vote_total }}</p>
      <p>Vote Ratio: {{ projectData.vote_ratio }}</p>
      <p>Created On: {{ new Date(projectData.created).toLocaleDateString() }}</p>
      <p>Owner ID: {{ projectData.owner }}</p>
      <p>Tags: 
        <span v-for="(tag, index) in projectData.tags" :key="index">
          {{ tag }}<span v-if="index < projectData.tags.length - 1">, </span>
        </span>
      </p>
    </div>
  </template> 



<style scoped>
</style>
  