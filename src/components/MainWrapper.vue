<template>
  <div class="wrapper">
    <sidebar/>
    <user-list/>   
    <modal/>
  </div>
</template>

<script>
import UserList from './UserList.vue';
import Sidebar from './Sidebar.vue';
import Modal from './Modal.vue';



export default {
  components: { UserList, Sidebar, Modal },

}
</script>

<style>

</style>