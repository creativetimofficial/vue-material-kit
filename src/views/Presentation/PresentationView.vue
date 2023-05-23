<script setup>
import { onMounted, onUnmounted, computed, ref } from "vue";
import vueMkHeader from "@/assets/img/space-background.jpg";
import axios from 'axios';

//example components
import NavbarDefault from "../..//examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../../examples/footers/FooterDefault.vue";
import Header from "../../examples/Header.vue";


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

//Это блок для работы с хранилищем сессии
const isAuthenticated = computed(() => !!sessionStorage.getItem('access_token')); 
const userId = computed(() => sessionStorage.getItem('user_id'));
const loggedUserName = computed(() => sessionStorage.getItem('username'));
const isStaff = computed(() => sessionStorage.getItem('is_staff'));
const token = computed(() => sessionStorage.getItem('token'));

//Тут мы попробуем использовать local storage потому что оно должно работать между вкладками
const isAuthenticatedLocal = computed(() => !!localStorage.getItem('access_token')); 
const userIdLocal = computed(() => localStorage.getItem('user_id'));
const loggedUserNameLocal = computed(() => localStorage.getItem('username'));
const isStaffLocal = computed(() => localStorage.getItem('is_staff'));
const tokenLocal = computed(() => localStorage.getItem('token'));

//Отобразить на главной сразу же все проекты и пользователей
onMounted(() => {
  search();
});

</script>

<script>
import PresentationCounter from "./Sections/PresentationCounter.vue";

export default {
    data() {
        return {
            projects: [],
        };
    },
    async created() {
        try {
            const response = await axios.get("http://somebodyhire.me/api/projects/");
            this.projects = response.data;
        }
        catch (error) {
            console.error("There was an error fetching the projects", error);
        }
    },
    components: { PresentationCounter }
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
      class="page-header min-vh-50"
      :style="`background-image: url(${vueMkHeader})`"
      loading="lazy"
    >
    <div class="container">
        <div class="row">
          <div class="col-lg-7 text-center mx-auto position-relative">

            <div v-if="isAuthenticated">
                <h2
                class="text-white pt-3 mt-n5 me-2"
                :style="{ display: 'inline-block ', fontFamily: 'PressStart2P, sans-serif' }"
                > 
                Привет, {{ loggedUserName }}!</h2>
                <p class="lead text-white px-5 mt-3" :style="{ fontWeight: '500',  fontFamily: 'PressStart2P, sans-serif' }">
                  В поисках чего-то интересного?
                  </p>
            </div>

              <div v-else>
                <h1
                class="text-white pt-3 mt-n5 me-2"
                :style="{ display: 'inline-block ', fontFamily: 'PressStart2P, sans-serif'  }">LinkedMin</h1>
                <p class="lead text-white px-5 mt-3" :style="{ fontWeight: '500',  fontFamily: 'PressStart2P, sans-serif' }">
                  Показывай себя и свои проекты.  
                   Находи вдохновение, коллег и новые знания.
                </p>
              </div>

         
        </div>
        </div>

            <div class="searchBar">
                <input class="searchInput" type="text" v-model="searchQuery" @keyup.enter="search" placeholder="Поиск по проектам и людям" />
                <button class="searchButton" type="submit" @click="search">Погнали!</button>
             </div>

  </div>
  
</div>

</Header>
<PresentationCounter />
<div v-if="searchResultProjects.length > 0 || searchResultUsers.length > 0">
    <h2 class="result-header">Найдено проектов: {{ searchResultProjects.length}} </h2>
    <div class="result-grid">
      <div class="result-card" v-for="project in searchResultProjects" :key="project.id">
        <h3>{{ project.title }}</h3>
        <img class="project-image" :src="project.featured_image" alt="Featured image">
        <p>{{ project.description }}</p>
        <a :href="`http://somebodyhire.me/project/${project.id}`">Страница проекта</a>
      </div>
    </div>
<h2 class="result-header">Найдено людей: {{ searchResultUsers.length}} </h2>
    <div class="result-grid">
      <div class="result-card" v-for="user in searchResultUsers" :key="user.id">
        <h3>{{ user.username }}</h3>
        <img class="project-image" :src="user.profile_image" alt="Featured image">
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

  <DefaultFooter />
</template>


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

.searchBar {
  display: flex;
  margin-top: 3%;
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

  border: 2px solid #4EA852;
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
  background-color: #4EA852;
  /* Changes the color of the text inside the button */
  color: rgb(255, 255, 255);
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
  background-color: #2e6431;
  color: rgb(228, 228, 228);
}
.result-header {
  color: #fff;
  background-color:#3d9132;
  padding: 10px;
  text-align: center;
  margin-top: 25px;
  margin-left: 10%;
  width: 80%;
border-radius: 15px;
}

.result-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
}

.result-card {
  display: flex;
  flex-direction: column;
  background-color: #3d913248;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  width: calc(100% / 3 - 20px);
  box-sizing: border-box;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
  align-items: center;
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

.project-image {
  width: 20%;
  height: auto;
  margin-bottom: 20px;
}

</style>