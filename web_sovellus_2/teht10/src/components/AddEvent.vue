<template>
  <div id="add-event">
    <form>
      <label for="eventDescriptionInput">Event description </label>
      <input id="eventDescriptionInput" type="text" placeholder="type a description"/>
      <button @click="addEvent">Add event</button>
      <p id="status">{{ isSuccess }}</p>
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
          if(eventContent !== ''){
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
            this.success = true;
          }else
            this.success = false;
        }
      },

      data(){
        return {
          success: undefined
        }
      },

      computed:{
        isSuccess() {
          if(this.success === true){
            const eventDescriptionInput = document.getElementById('eventDescriptionInput');
            eventDescriptionInput.value = '';
            eventDescriptionInput.focus();
            return 'Note has been saved';
          }else if(this.success === false)
            return 'Please fill all the fields';
           else
            return '';
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