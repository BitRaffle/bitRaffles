// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: !true },

  modules: [
    '@nuxtjs/tailwindcss'
],
app:{
  head:{
      title:'bitRaffle',
      meta: [
          { charset: "utf-8" },
          { name: "viewport", content: "width=device-width, initial-scale=1" },
          { hid: "description", name: "description", content: "" },
          { name: "format-detection", content: "telephone=no" },
        ],

        link: [
          {rel:'stylesheet', href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"},
          {rel:'stylesheet', href:"https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.css"},
          {rel:'stylesheet', href:"/css/tailwind/tailwind.min.css"},
          {rel:'stylesheet', href:"https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.css"},
          // {rel:'stylesheet', href:"~/assets/css/style.css"},
         
],
        script:[
          {src:"https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js", body:true},
          { src:"http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js"},
          {src:"//code.jquery.com/jquery-1.11.0.min.js"},
          {src:"https://cdn.jsdelivr.net/npm/apexcharts" ,body:true},
          {src:"/js/main.js" ,body:true},
          {src:"/js/charts-demo.js" ,body:true},
          {src:"/js/Winwheel.js", body:true},
      ],
  },
  
}
})
