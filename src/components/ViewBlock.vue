<template>
  <div class="view">
    <h3>Вид:</h3>
    <div class="view-row">
        <img class="boards" @click="removeListClass" src="../assets/img/block.png"/>
        <img class="list" @click='addListClass' src="../assets/img/list.png"/>
    </div>
  </div>
</template>

<script>

import {mapActions} from 'vuex'

export default {
  methods: {
    ...mapActions([
      'ADD_LIST_ACTIVE',
      'REMOVE_LIST_ACTIVE'
    ]),
    addListClass() {
      this.ADD_LIST_ACTIVE()
    },
    removeListClass() {
      this.REMOVE_LIST_ACTIVE()
    }
  }
}
</script>

<style>

</style>