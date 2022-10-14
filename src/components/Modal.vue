<template>
  <div :class="[{ active: MODAL_ACTIVE }, 'modal']">
    <div class="modal-block">
        <img class="close" @click='removeModalClass' src="../assets/img/close.png"/>
        <p><span>Имя:</span> {{USER.name}}</p>
        <p><span>Логин:</span> {{USER.username}}</p>
        <p><span>ID:</span> {{USER.id}}</p>
        <p><span>Телефон:</span> {{USER.phone}}</p>
        <p><span>E-mail:</span> {{USER.email}}</p>
        <p><span>Сайт:</span> {{USER.website}}</p>
    </div>
  </div>
</template>

<script>

import {mapActions, mapGetters} from 'vuex'

export default {
    computed: {
        ...mapGetters([
            'MODAL_ACTIVE',
            'USER'
        ])
    },
    methods: {
        ...mapActions([
            'REMOVE_MODAL_ACTIVE'
        ]),
        removeModalClass() {
            this.REMOVE_MODAL_ACTIVE()
        }
    }
}
</script>

<style>

</style>