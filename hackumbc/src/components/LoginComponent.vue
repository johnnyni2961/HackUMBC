<template>
  <div>
    <h1>Login/Register</h1>
    <table v-if="!loginChecker()">
      <tr>
        <td>
          <form action="#" id="loginForm">
            <!-- <label for="firstName">First name:</label><input name="firstName" type="text"><br>
      <label for="lastName">Last name:</label><input name="lastName" type="text"><br> -->
            <label for="username">Username:</label
            ><input name="username" type="text" /><br />
            <label for="password">Password:</label
            ><input name="password" type="password" /><br />
            <br />
            <input
              type="submit"
              value="Submit"
              @click="login"
              id="loginsubmit"
            />
          </form>
        </td>
        <td>
          <form action="#" id="registerForm">
            <label for="usernameR">Username:</label
            ><input ref="usernameR" type="text" /><br />
            <label for="fname">First name:</label
            ><input ref="fname" type="text" /><br />
            <label for="lname">Last name:</label
            ><input ref="lname" type="text" /><br />
            <label for="role">Desired role:</label>
            <!--
            <select ref="role">
              <option value="user">User</option>
              <option value="tutor">Tutor</option></select
            > --> <br />
            <label for="passwordR">Password:</label
            ><input ref="passwordR" type="password" /><br />
            <label for="passwordConfirm">Confirm password:</label
            ><input ref="passwordConfirm" type="password" /><br/>
            <input type="submit" value="Submit" @click="register" id="registersubmit"/>
          </form>
        </td>
      </tr>
    </table>
    <div v-else>
      <h2>You are already logged in! <router-link :to="{name: '/'}">Go home</router-link></h2>
    </div>
  </div>
</template>

<script>
import * as api from './apiCalls';

import router from "../routes";
import $ from "jquery";

const register = (event) => {
  event.preventDefault();
  registerQuery();
}

const registerQuery = () => {
  var form = $("#registerForm")[0];
  var data = new FormData(form);
  console.log(data.entries());
  `
  $.post({
    url: "http://localhost:8090/users/name",
    data: JSON.stringify(data),
    processData: false,
    contentType: "application/json",
    cache: false,
    timeout: 80000,
    /*xhrFields: {
      withCredentials: true,
    }*/
    success: () => {
      router.push("/");
    },
    error: (e) => {
      console.log(e);
    },
  })
  `

}

const login = (event) => {
  event.preventDefault();
  loginQuery();
};

const loginQuery = () => {
  var form = $("#loginForm")[0];
  var data = {};
  var fd = new FormData(form);
  fd.forEach((v, k) => (data[k] = v));

  // $("#loginsubmit").prop("disabled", true);
  $.post({
    url: "http://localhost:8090/users/login",
    data: JSON.stringify(data),
    processData: false,
    contentType: "application/json",
    cache: false,
    timeout: 80000,
    xhrFields: {
      withCredentials: true,
    },
    success: () => {
      router.push("/");
    },
    error: (e) => {
      console.log(e);
    },
  });
};

export default {
  name: "LoginComponent",
  methods: {
    login,
    loginQuery,
    register,
    loginChecker: api.loginChecker
  }
};
</script>