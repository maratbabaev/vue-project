<template>
  <div class="sidebar">
    <search/>
    <view-block/>
  </div>
</template>

<script>
import Search from './Search.vue'
import ViewBlock from './ViewBlock.vue'

export default {
  components: { Search, ViewBlock },

}
</script>

<style>

</style>