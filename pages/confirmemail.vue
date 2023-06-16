<template>
  <div>
    <confirm-email-body/>
  </div>
</template>

<script>
definePageMeta({
    layout:'no-layout'
})
import confirmEmailBody from '~/components/confirmEmailBody.vue'
export default {
  components: { confirmEmailBody },

}
</script>

<style>

</style>