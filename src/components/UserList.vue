<template>
  <div :class="[{ list: LIST_ACTIVE }, 'user-list']">
    <user-item 
      v-for="user in usersOnPage" 
      :key="user.id"
      :user="user"
    />
    <p v-if='ERROR' class="error">Ошибка :(</p>
    <div class="page-numbers">
      <a 
        :class="[{ active: number ===  startNumberPage }, 'page-number']"
        @click="newPage(number)"
        v-for="number in numbersList"
        :key="number"
      >{{number}}</a>
    </div>
  </div>
</template>

<script>

import {mapActions, mapGetters} from 'vuex'
import UserItem from './UserItem.vue'


export default {
  components: { UserItem },
  data() {
    return {
      userQuantityForPage: 3,
      startNumberPage: 1,
      numberActive: false
    }
  },
  methods: {
    ...mapActions([
      'GET_USERS'
    ]),
    newPage(number){
      this.startNumberPage = number
    }
  },
  computed: {
    ...mapGetters([
      'USERS',
      'ERROR',
      'LIST_ACTIVE'
    ]),
    numbersList(){
      return Math.floor(this.USERS.length / this.userQuantityForPage)
    },
    usersOnPage(){
      if (this.USERS.length > 2) {
        let from = (this.startNumberPage - 1) * this.userQuantityForPage
        let to = from + this.userQuantityForPage
        return this.USERS.slice(from, to)
      }
      return this.USERS
    }
  },
  mounted() {
    this.GET_USERS()
  }
}
</script>

<style>

</style>