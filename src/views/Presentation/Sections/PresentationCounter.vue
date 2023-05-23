<script setup>
import DefaultCounterCard from "../../../examples/cards/counterCards/DefaultCounterCard.vue";
</script>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      projectsCount: 0,  // This data property will hold the count of projects
      usersCount: 0,     // This data property will hold the count of users
    };
  },
  async created() {
    try {
      // Fetch the projects data from the server
      const projectsResponse = await axios.get('http://somebodyhire.me/api/projects/');
      // Set the projectsCount to the number of projects received from the server
      this.projectsCount = projectsResponse.data.length;

      // Fetch the users data from the server
      const usersResponse = await axios.get('http://somebodyhire.me/api/profiles/');
      // Set the usersCount to the number of users received from the server
      this.usersCount = usersResponse.data.length;

    } catch (error) {
      // Log any errors that occur during the fetch to the console
      console.error(error);
    }
  },
};
</script>

<template>
  <section class="pt-3 pb-4" id="count-stats">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 z-index-2 border-radius-xl mx-auto py-3">
          <div class="row">
            <div class="col-md-4 position-relative">
              <DefaultCounterCard
                color="success"
                title="Проектов"
                description="Представлено на нашем сайте"
                :count="projectsCount"
                :duration="3000"
                divider="vertical"
              />
            </div>
            <div class="col-md-4 position-relative">
              <DefaultCounterCard
                color="success"
                title="Пользователей"
                description="Зарегистрированно с момента запуска проекта"
                :count="usersCount"
                :duration="3000"
                divider="vertical"
              />
            </div>
            <div class="col-md-4">
              <DefaultCounterCard
                color="success"
                title="Часов"
                description="Потрачено на разработку сайта"
                :count="288"
                suffix="+"
                :duration="3000"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

