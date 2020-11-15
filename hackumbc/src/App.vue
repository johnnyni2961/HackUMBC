<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Home /> -->
    <router-view></router-view>
    <!-- <script>
      window.watsonAssistantChatOptions = {
        integrationID: "74dc62fe-fbe9-4f02-bc5f-17c1e94fb362", // The ID of this integration.
        region: "us-south", // The region your integration is hosted in.
        serviceInstanceID: "33c60881-55ab-4a94-b793-f77d2e7a2a85", // The ID of your service instance.
        onLoad: function (instance) {
          instance.render();
        },
      };
      setTimeout(function () {
        const t = document.createElement("script");
        t.src =
          "https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
        document.head.appendChild(t);
      });
      
    </script> -->
  </div>
</template>

<script>
// import Home from './components/Home.vue' you don't need to import components if they're done through the router
window.watsonAssistantChatOptions = {
  integrationID: "74dc62fe-fbe9-4f02-bc5f-17c1e94fb362", // The ID of this integration.
  region: "us-south", // The region your integration is hosted in.
  serviceInstanceID: "33c60881-55ab-4a94-b793-f77d2e7a2a85", // The ID of your service instance.
  onLoad: function (instance) {
    instance.render();
  },
};
setTimeout(function () {
  const t = document.createElement("script");
  t.src =
    "https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
  document.head.appendChild(t);
});


export default {
  name: "App",
  components: {
    // Home
  },
};
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
