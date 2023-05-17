<template>
    <div class="project-card">
      <h2>{{ project.title }}</h2>
      <img :src="project.featured_image" alt="Project Image">
      <p>{{ project.description }}</p>
      <p>Vote Total: {{ project.vote_total }}</p>
      <p>Vote Ratio: {{ project.vote_ratio }}</p>
      <p>Created: {{ project.created }}</p>
      <p>Owner: {{ project.owner }}</p>
      <p>Tags: {{ project.tags.join(', ') }}</p>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  
  export default    {
    name: 'ProjectCard',
    setup() {
      const project = ref({
        id: 1,
        title: "kateschka's project updated",
        description: "КРУТОЙ ВЕБ-САЙТ",
        featured_image: "http://somebodyhire.me/default.jpg",
        demo_link: null,
        source_link: null,
        vote_total: 0,
        vote_ratio: 0,
        created: "2023-05-10T19:58:30.084115",
        owner: 3,
        tags: []
      })
  
      return { project }
    }
  }
  </script>
  
  <style scoped>
  .project-card {
    width: 300px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
  }
  .project-card img {
    width: 100%;
    height: auto;
  }
  </style>