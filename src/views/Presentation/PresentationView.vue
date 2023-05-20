<style scoped>
.project-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.project-card {
  flex-basis: calc(33.33% - 1em); /* 1em is for margin */
  margin: 0.5em;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  padding: 1em;
  box-sizing: border-box;
}
</style>

<script setup>
import { onMounted, onUnmounted, computed, } from "vue";

//example components
import NavbarDefault from "../..//examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../../examples/footers/FooterDefault.vue";
import Header from "../../examples/Header.vue";

// sections
import PresentationCounter from "./Sections/PresentationCounter.vue";
import PresentationSearch from "./Sections/PresentationSearch.vue";


//images
import vueMkHeader from "@/assets/img/space-background.jpg";

//authentification
const isAuthenticated = computed(() => !!sessionStorage.getItem('access_token'));

//hooks
const body = document.getElementsByTagName("body")[0];
onMounted(() => {
  body.classList.add("presentation-page");
  body.classList.add("bg-gray-200");
});
onUnmounted(() => {
  body.classList.remove("presentation-page");
  body.classList.remove("bg-gray-200");
});
</script>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      projects: [],
    };
  },
  async created() {
    try {
      const response = await axios.get('http://somebodyhire.me/api/projects/');
      this.projects = response.data;
    } catch (error) {
      console.error('There was an error fetching the projects', error);
    }
  },
};
</script>



<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <NavbarDefault :sticky="true" />
      </div>
    </div>
  </div>
  <Header>
    <div
      class="page-header min-vh-75"
      :style="`background-image: url(${vueMkHeader})`"
      loading="lazy"
    >
    <div class="container">
        <div class="row">
          <div class="col-lg-7 text-center mx-auto position-relative">
            <h1
              class="text-white pt-3 mt-n5 me-2"
              :style="{ display: 'inline-block ' }"
            >
              LinkedMin
            </h1>
            <div v-if="isAuthenticated">
                <h1
                class="text-white pt-3 mt-n5 me-2"
                :style="{ display: 'inline-block ', fontFamily: 'PressStart2P, sans-serif' }"
                > 
                Тариф Премиум</h1>
            </div>

              <div v-else>
                <p>Тариф Бесплатный</p>
              </div>

            <p class="lead text-white px-5 mt-3" :style="{ fontWeight: '500',  fontFamily: 'PressStart2P, sans-serif' }">
            Показывай себя и свои проекты.  
             Находи вдохновение, коллег и новые знания.
            </p>
          </div>
        </div>
        <div>
          <PresentationSearch />
          
  </div>
  </div>
</div>
</Header>



<div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
    <PresentationCounter />
    <div class="project-container">
    <div class="project-card" v-for="project in projects" :key="project.id">
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>
    </div>
  </div>   
  </div>

  <DefaultFooter />
</template>



