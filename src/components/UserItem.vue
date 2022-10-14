<template>
  <div class="user-item" @click="addModalClass">
    <h3 class="user-item__name">{{user.name}}</h3>
    <h4 class="user-item__user-name">{{user.username}}</h4>
    <a class="user-item__phone">{{getPhone}}</a>
    <a class="user-item__email">{{user.email}}</a>
    <a class="user-item__website">{{user.website}}</a>
  </div>
</template>

<script>

import {mapActions} from 'vuex'

export default {
  props: {
    user: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    getPhone() {
      return this.user.phone.slice(0,12)
    }
  },
  methods: {
    ...mapActions([
      'ADD_MODAL_ACTIVE'
    ]),
    addModalClass(){
      this.ADD_MODAL_ACTIVE(this.user)
    }
  }

}
</script>

<style>

</style>