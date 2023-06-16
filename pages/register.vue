<template>
  <div class="bg-gray-700">
    <register/>
  </div>
</template>

<script>
import register from '~/components/register.vue'
definePageMeta({
    layout:'no-layout'
})
export default {
  components: { register },

}
</script>

<style>

</style>