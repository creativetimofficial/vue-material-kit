<script setup>
import { onMounted } from "vue";
import Header from "@/examples/Header.vue";
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialButton from "@/components/MaterialButton.vue";
import setMaterialInput from "@/assets/js/material-input";
import axios from "axios";
import { ref } from 'vue'
import { useStore } from '@/stores'
import router from '@/router'
onMounted(() => {
  setMaterialInput();
});

const store = useStore()
    const email = ref('')
    const password = ref('')


const handleLogin = async () => {
      try {
        // Send a POST request to the login endpoint
        const response = await axios.get('https://dummyjson.com/products/1', {
          email: email.value,
          password: password.value
        })

        // Check if the login was successful
        console.log(response && response.status===200);
        if (response && response.status===200) {
          // Save the user to the store
          store.login({
            name: response.data.name,
            email: response.data.email
          })

          // Navigate the user to the admin dashboard
          router.push('/')
        } else {
          // Display an error message if the login failed
          alert('Invalid email or password')
        }
      } catch (err) {
        console.log('Error:', err);
      }
    };
</script>

<template>
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
                  class="bg-gradient-info shadow-success border-radius-lg py-3 pe-1"
                >
                  <h4
                    class="text-white font-weight-bolder text-center mt-2 mb-0"
                  >
                    Admin Sign in
                  </h4>
                 
                </div>
              </div>
              <div class="card-body">
                <form role="form" class="text-start" @submit.prevent="handleLogin">
                  <MaterialInput
                    id="email"
                    class="input-group-outline my-3"
                    :label="{ text: 'Email', class: 'form-label' }"
                    type="email"
                    v-model="email"
                  />
                  <MaterialInput
                    id="password"
                    class="input-group-outline mb-3"
                    :label="{ text: 'Password', class: 'form-label' }"
                    type="password"
                    v-model="password"
                  />
                 
                  <div class="text-center">
                    <MaterialButton
                      class="my-4 mb-2"
                      variant="gradient"
                      color="info"
                      fullWidth
                      @click="handleLogin"
                    >
                      Sign in
                    </MaterialButton>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer class="footer position-absolute bottom-2 py-2 w-100">
        <div class="container">
          <div class="row align-items-center justify-content-lg-between">
            <div class="col-12 col-md-6 my-auto">
              <div
                class="copyright text-center text-sm text-white text-lg-start"
              >
                © {{ new Date().getFullYear() }}
              </div>
            </div>
          
          </div>
        </div>
      </footer>
    </div>
  </Header>
</template>
