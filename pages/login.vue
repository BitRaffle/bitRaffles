<template>
  <div class="bg-gray-700">
    <login-body/>
  </div>
</template>

<script>
import loginBody from '~/components/loginBody.vue'
definePageMeta({
    layout:'no-layout'
})
export default {
  components: { loginBody },

}
</script>

<style>

</style>