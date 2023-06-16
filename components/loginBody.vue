<template>
    <div>
      <div class="">
                  
          <section class="py-36">
            <div class="container px-4 mx-auto">
              <div class="relative max-w-lg mx-auto pt-16 pb-16 px-6 md:px-10 lg:px-16 bg-gray-600 rounded-xl">
                <a class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl" href="#">
                  bitRaffle
                </a>
                <div class="relative max-w-md mx-auto">
                  <div class="text-center mb-10">
                    <h2 class="text-2xl text-gray-100 font-semibold mb-2">Let's sign you in</h2>
                    <p class="text-gray-300 font-medium">Login</p>
                  </div>
                  <form @submit.prevent="login">
                    <div class="relative w-full h-14 py-4 px-3 mb-8 border border-gray-400 hover:border-white rounded-lg">
                      <span class="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300 px-1 bg-gray-500">Email*</span>
                      <input class="w-full outline-none bg-gray-600 text-sm text-gray-100 font-medium" id="signInInput5-2" type="email" v-model="email" required>
                    </div>
                    <div class="relative w-full h-14 py-4 px-3 mb-4 border border-gray-400 hover:border-white focus-within:border-green-500 rounded-lg">
                      <span class="absolute bottom-full left-0 ml-3 -mb-1  text-xs font-semibold text-gray-300 px-1 bg-gray-500">Password*</span>
                      <input class="w-full outline-none bg-gray-600 text-sm text-gray-100 font-medium" id="signInInput5-3" type="password" v-model="password" required>
                    </div>
                    <!-- <span class="block text-xs text-gray-300 font-semibold mb-6">Must be at least 12 characters.</span> -->
                    <button class="block w-full py-4 mb-4 leading-6 text-white font-semibold bg-blue-500 hover:bg-blue-600 rounded-lg transition duration-200" :disabled="loader">Login <span class="ml-2 animate-spin h-5 w-5 border-t-2 border-white rounded-full" v-if="loader"></span></button>
                    <a class="flex items-center justify-center w-full py-4 mb-6 leading-6 text-white font-semibold bg-gray-600 hover:bg-gray-700 rounded-lg transition duration-200" href="#">
                      <div class="w-4 bg-white rounded-sm">
                        <svg width="16" height="12" viewbox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14.5 0H14L8 4.738L2 0H1.5C0.672 0 0 0.672 0 1.5V10.5C0 11.328 0.672 12 1.5 12H2V2.646L8 7.261L14 2.645V12H14.5C15.328 12 16 11.328 16 10.5V1.5C16 0.672 15.328 0 14.5 0Z" fill="#F44336"></path>
                        </svg>
                      </div>
                      <span class="ml-3">Sign In with Gmail</span>
                    </a>
                    <p class="font-medium text-center">
                      <span class="text-gray-300">Don't have an acoount?</span>
                      <nuxt-link class="inline-block text-blue-500 hover:underline" to="/register">Sign up</nuxt-link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
    </div>
  </template>
  
  <script>
import axios from 'axios'
import Swal from 'sweetalert2'
  export default {
      data(){
          return{
              email:'',
              password:'',
              loader:false
          }
      },
      mounted(){
  
      },
      methods:{
        async login() {
  try {
    this.loader = true
    const response = await axios.post('http://localhost:8000/bitplay/api/users/login', {
      email: this.email,
      password: this.password,
    });
    console.log(response.data);
    if (!response.data.successful) {
      throw new Error('Incorrect email or password');
    }
    this.setCookie('userData', response.data.data, new Date(Date.now() + 4 * 60 * 60 * 1000));

    await Swal.fire('Success', 'You have been logged in successfully', 'success');
    window.location.href = '/'
    // console.log('This is before the timeout')
    // setTimeout(async () => {
    //   const userData = this.getCookie('userData')
    //   console.log('This is after userData')
    //   const config = {
    //     method: 'get',
    //     maxBodyLength: Infinity,
    //     url: 'http://localhost:8000/bitplay/api/users/user',
    //     headers: { 
    //       'Authorization': 'Bearer ' + userData 
    //     }
    //   };
    //   console.log('This is before the making of get user')
    //   const response = await axios.request(config);
    //   console.log('This is from making a call to the user ', response.data);
    //   if(response.data.onBoardLevel === 1){
    //     window.location.href = '/';
    //   } else if(response.data.onBoardLevel === 0){
    //     window.location.href = '/setprofile';
    //   }
    // }, 1000);
  } catch (error) {
    Swal.fire('Error', error.message, 'error');
    console.error(error);
  }
  finally{
    this.loader = false;
    this.username = ''
    this.email = ''
    this.password = ''
}
},

getCookie(cname) {
      let name = cname + "=";
      let ca = document.cookie.split(";");
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    },
  setCookie(cname, cvalue, exdays) {
      const d = new Date();
      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
      let expires = "expires=" + d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    },
      },
  }
  </script>
  
  <style>
  
  </style>