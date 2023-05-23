<script setup>
import { onMounted } from "vue";
import { ref } from "vue";
import axios from 'axios';
import { computed } from "vue";

// example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import Header from "@/examples/Header.vue";

// material-input
import setMaterialInput from "@/assets/js/material-input";

const username = ref('');
const password = ref('');
const email = ref(''); // Add email
const errorMessage = ref('');

const isAuthenticated = computed(() => !!sessionStorage.getItem('access_token')); // Computed property to check if the user is authenticated




// New register function
const register = async () => {
  if (!username.value || !password.value || !email.value) {
    errorMessage.value = "Please fill in all fields.";
  } else {
    const url = 'http://somebodyhire.me/api/register/';
    const headers = {
      'Content-Type': 'application/json',
    };
    const body = {
      username: username.value,
      password: password.value,
      email: email.value, // include email in the request body
      is_staff: false
    };

    try {
      const response = await axios.post(url, body, { headers });
      errorMessage.value = `Registration successful. Welcome ${response.data.username}!`; // Display success message
      sessionStorage.setItem('access_token', response.data.token); // Save the access token in sessionStorage
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        errorMessage.value = `Request:\nPOST ${url}\nHeaders: ${JSON.stringify(headers)}\nBody: ${JSON.stringify(body)}\n\nResponse:\nStatus: ${error.response.status}\nHeaders: ${JSON.stringify(error.response.headers)}\nBody: ${JSON.stringify(error.response.data)}`;
      } else if (error.request) {
        // The request was made but no response was received
        errorMessage.value = `Request:\nPOST ${url}\nHeaders: ${JSON.stringify(headers)}\nBody: ${JSON.stringify(body)}\n\nError: No response received from server. Please try again later.`;
      } else {
        // Something happened in setting up the request that triggered an error
        errorMessage.value = `Request:\nPOST ${url}\nHeaders: ${JSON.stringify(headers)}\nBody: ${JSON.stringify(body)}\n\nError: ${error.message}`;
      }
    }
  }
};

onMounted(() => {
  setMaterialInput();
});
</script>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      email: '',
      errorMessage: '',
    };
  },
  methods: {
    register() {
      this.username = username.value;
      this.password = password.value;
      this.email = email.value;
      register(); // Call the register function
    },
  },
};
</script>


<template>
  <DefaultNavbar transparent />
  <Header>
    <div
      class="page-header align-items-start min-vh-100"
      :style="{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80)'
      }"
      loading="lazy"
    >
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container my-auto">
        <div class="row">
          <div class="col-lg-4 col-md-8 col-12 mx-auto">
            <div class="card z-index-0 fadeIn3 fadeInBottom">
              <div
                class="card-header p-0 position-relative mt-n4 mx-3 z-index-2"
              >
                <div
                  class="bg-gradient-success shadow-success border-radius-lg py-3 pe-1"
                >
                  <h4
                    class="text-white font-weight-bolder text-center mt-2 mb-0"
                  >
                  Регистрация
                  </h4>
                </div>
              </div>
              <div class="card-body">
                <form role="form" class="text-start">
                  <div>
                    <div>
                        <!-- This will be displayed if the user is not authenticated -->
                        <p>Пожалуйста, зарегистрируйтесь</p>
                        <p>Пароль должен быть не менее 8 символов, и не быть похожим на имя пользователя или адрес почты</p>
                    



                      <div>
                        <input v-model="username" type="text" placeholder="Имя пользователя" />
                      </div>

                      <div>
                        <input v-model="email" type="email" placeholder="Email" />
                      </div>


                      <div>
                        <input v-model="password" type="password" placeholder="Пароль" />
                      </div>


                    <div class="text-center">
                      <button
  type="button"
  class="btn bg-gradient-dark w-100 my-4 mb-2"
  @click="register"
>
  Зарегистрироваться
</button>

                    </div>
                      
                    </div>


              <div v-if="errorMessage">
                      <p>{{ errorMessage }}</p>
              </div>
  </div>
                  

                  <p class="mt-4 text-sm text-center">
                    Уже есть аккаунт?
                    <a
                      href="/pages/landing-pages/basic"
                      class="text-success text-gradient font-weight-bold"
                      >Войти</a
                    >
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Header>
</template>
