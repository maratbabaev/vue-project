<template>
  <div class="search">
    <h3>Фильтр</h3>
    <input type="text" v-model="message" placeholder="Введите текст" @input='setMessage'/>
    <button class="search-btn" @click="removeMessage">Очистить</button>
  </div>
</template>

<script>

import {mapActions, mapGetters} from 'vuex'

export default {
    data() {
        return {
            message: ''
        }
    },
    methods: {
        ...mapActions([
        'GET_FILTER'
        ]),
        setMessage() {
            this.GET_FILTER(this.message)
        },
        removeMessage() {
            this.message = ''
            this.GET_FILTER(this.message)
        }
    },
    mounted() {
       
    }
}
</script>

<style>

</style>