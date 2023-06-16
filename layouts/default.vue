<template>
  <div>
    <aside-bar/>
    <slot/>
  </div>
</template>

<script>
import AsideBar from '~/components/utilities/AsideBar.vue'

export default {
  components: { AsideBar },


}
</script>

<style>

</style>