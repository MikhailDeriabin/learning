<template>
  <b-navbar
      toggleable="md"
      type="dark"
      variant="info">
    <b-navbar-brand :to="{ name: 'Home' }">Tapahtumakalenterista</b-navbar-brand>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    AddEvent(){
      //console.log('Add event')

    }
  }
}

</script>

<style scoped>

</style>