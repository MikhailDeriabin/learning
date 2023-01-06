<template>
  <div id="add-event">
    <form>
      <label for="eventDescriptionInput">Event description </label>
      <input id="eventDescriptionInput" type="text" placeholder="type a description"/>
      <button @click="addEvent">Add event</button>
    </form>
  </div>
</template>

<script>
    export default {
      name: 'AddEvent',
      props:{
        updateListMethod: Function
      },
      methods: {
        async addEvent(){
          const eventContentInput = document.querySelector("#eventDescriptionInput");
          const eventContent = eventContentInput.value;
          const date = new Date();
          const currentDate = date.getDate() + "." + (date.getMonth()+1) + "." + date.getFullYear();

          const reqObj = {
            content : eventContent,
            date: currentDate
          }
          const reqOptions = {
            headers:{
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(reqObj)
          }

          await fetch("http://localhost:3001/notes", reqOptions);
          this.updateListMethod();
        }
      }
    };
</script>

<style scoped>
  #add-event{
    margin: 40px 0;
  }
  form label{
    margin-right: 10px;
  }
  form input[type="text"]{
    margin-right: 5px;
  }
</style>