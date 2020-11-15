<template>
  <div>
    <h1>Connecteach</h1>
    <h3></h3>
    <p></p>
    <div v-if="loginChecker()" :key="componentKey">
      <h1>Hi there, <router-link :to="{ path: `/user/@${getUser()}`}">{{ getUser() }}</router-link>!</h1>
      <!--<h3><a href="#" @click="signOut()">Sign out</a></h3>-->
      
    </div>
    <div v-else>
      <h1>You are not logged in!</h1>
    </div>
    <nav>
      <ul>
        <li><router-link :to="{ name: 'login' }">Login/Register</router-link></li>
        <!-- this is for test site below -->
        <!--
        <li><router-link :to="{ name: 'tutorsignup' }">Tutor Sign Up</router-link></li>
        <li><router-link :to="{ name: 'tutorsignin' }">Tutor Sign In</router-link></li>
        <li><router-link :to="{ name: 'tutor' }">Tutor Test</router-link></li>
        <li><router-link :to="{ name: 'subject'}">subject test</router-link></li>
        -->
      </ul>
    </nav>
  </div>
</template>

<script>
import router from '../routes';
import * as api from './apiCalls';

export default {
  name: "Home",
  data() {
    return {
      componentKey:0,
    };
  },
  methods: {
    loginChecker: api.loginChecker,
    getUser: () => api.getCookies().sessionID.split("-")[1],
    signOut: () => {
      api.signOut();
      router.go(0);
    }
  }
};
</script>