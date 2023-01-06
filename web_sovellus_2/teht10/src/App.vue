<template>
  <b-container id="app">
    <b-row>
      <b-col>
        <navbar/>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <router-view/>
      </b-col>
    </b-row>
    <b-row>
      <add-event v-bind:updateListMethod="updateListMethod"/>
    </b-row>
    <b-row>
      <list v-bind:events="events"/>
    </b-row>
  </b-container>
</template>

<script>
import Navbar from '@/components/Navbar';
import List from "@/components/List";
import AddEvent from "@/components/AddEvent";

export default {

  name: 'App',
  events: [
    {
      id: 1,
      content: "No events found",
      date: ""
    }
  ],

  components: {
    Navbar,
    List,
    AddEvent
  },

  methods: {
    async updateList(){
      const eventResp = await fetch("http://localhost:3001/notes");
      if(eventResp.status === 200)
        this.events = await eventResp.json();
    }
  },
  async beforeMount() {
    await this.updateList();
  },

  data(){
    return {
      events: this.events,
      updateListMethod: this.updateList
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
