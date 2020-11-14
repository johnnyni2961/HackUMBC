<template>
  <div>
    <h1>This is the login component</h1>
    <input id="uninput" type="text">
    <br>
    <input type="button" @click="testAPI" value="Submit">
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: "LoginComponent",
  methods: {
    testAPI: () => {
      console.log($("#idinput"));
      $.get({
        url: `http://localhost:8090/users/name/${$('#uninput')[0].value}`, 
        success: function(response) {
          console.log(response);
        }
      });
    }
  }
};
</script>