<template>
  <div id="list">
    <table>
      <thead>
      <tr>
        <th>Content</th>
        <th>Date</th>
      </tr>
      </thead>

      <tbody>
      <tr v-for="e in events" v-bind:key="e.id">
        <td>{{e.content}}</td>
        <td>{{e.date}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "List",
  props:{
    events: Array
  }
}
</script>

<style>
  #list td{
    padding: 5px 10px 5px 10px;
    text-align: left;
  }
</style>