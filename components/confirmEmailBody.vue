<template>
    <div>
      <div class="bg-gray-700 h-screen flex items-center justify-center">
          <!-- <div class="bg-white p-8 rounded-lg shadow-lg">
            <h1 class="text-xl font-bold mb-4">Congratulations!</h1>
            <p class="mb-4">
              {{message}} Click below to signin and continue.
            </p>
            <a href="/signin"
              class=" btn bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
          </a>
          </div> -->
          <div class="flex flex-col items-center justify-center h-screen">
            <div class="text-2xl font-bold mb-4 text-white">Loading<span class="animate-pulse">...</span></div>
            <div class="relative w-32 h-32">
              <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
              </div>
              <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div id="progress" class="text-white text-lg font-bold">0%</div>
              </div>
              <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div class="animate-pulse rounded-full h-16 w-16 border-4 border-white opacity-50"></div>
              </div>
            </div>
          </div>
          
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
          code:'',
          message:''
      }
  },
  mounted(){
    setTimeout(() => {
      let percent = 0;
      const progressElement = document.getElementById('progress');
      const interval = setInterval(() => {
        percent += 5;
        if (percent <= 100) {
          progressElement.textContent = `${percent}%`;
        } else {
          clearInterval(interval);
        }
      }, 100);
    }, 500);
  
      const queryParams = this.$route.query;
      const email = queryParams.email;
      const code = queryParams.code;
      console.log('this is the email', email)
      console.log('this is the code', code)
      try {
  
          let data = JSON.stringify({
          "email": email,
          "code": code
          });
  
          let config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: 'http://localhost:8000/bitplay/api/users/confirm',
          headers: { 
              'Content-Type': 'application/json'
          },
          data : data
          };
  
          axios.request(config)
          .then((response) => {
          console.log(JSON.stringify(response.data));
          if(!response.data.successful){
              throw 'Something went wrong'
          }
          else{
              this.message = `Congratulations!!! ${email} has been successfully verified.`
              
              setTimeout(()=>{
                Swal.fire({
                    icon: 'success',
                    title: `Successfully confirmed ${this.email}. Now redirecting to login`,
                    timer: 3000, // time in milliseconds
                    showConfirmButton: false,
                    position: "center",
                    timerProgressBar: true
              })
              setTimeout(()=>{
                  window.location.href  = '/login'
              }, 1000)
              },2000)
  
              // window.location.href = '/signin'
          }
          })
          .catch((error) => {
          console.log(error);
          });
  
      } catch (error) {
          
      }
  }
  
  }
  </script>
  
  <style>
  
  </style>