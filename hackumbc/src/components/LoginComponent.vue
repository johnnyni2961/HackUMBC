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
            ><input id="usernameR" type="text" /><br />
            <label for="fname">First name:</label
            ><input id="fname" type="text" /><br />
            <label for="lname">Last name:</label
            ><input id="lname" type="text" /><br />
            <label for="role">Desired role:</label>
            
            <select id="role">
              <option value="user">User</option>
              <option value="tutor">Tutor</option></select
            ><br />
            <label for="passwordR">Password:</label
            ><input id="passwordR" type="password" /><br />
            <label for="passwordConfirm">Confirm password:</label
            ><input id="passwordConfirm" type="password" /><br/>
            <input type="submit" value="Submit" @click="register" id="registersubmit"/>
          </form>
        </td>
        
      </tr>
    </table>
    <div v-else>
      <h2>You are already logged in! <router-link :to="{name: '/'}">Go home</router-link>/<a href="#" @click="signOut">Sign out</a></h2>
    </div>
  </div>
</template>

<script>
import * as api from './apiCalls';

import router from "../routes";
import $ from "jquery";

const register = (event) => {
  event.preventDefault();
  if(api.getUserByUsername($("#usernameR")[0].value).username) {
    alert("That username is already taken!");
    return;
  }
  const val = id => $(id)[0].value
  const empty = id => val(id) ? true : false;
  if(!["#usernameR", "#fname","#lname","#passwordR"].reduce((p,c)=>p&&empty(c),true)) {
    alert("You have to complete all fields!");
    return;
  }
  if(val("#fname").length > 40 || val("#lname").length > 40) {
    alert("First/last name cannot be >40 characters");
    return;
  }
  if(val("#usernameR").length < 3 || val("#usernameR").length > 32) {
    alert("Username must be between 3 and 32 characters");
    return;
  }
  if(val("#passwordR").length < 6) {
    alert("Password must be >=6 characters");
    return;
  }
  if(val("#passwordR") != val("#passwordConfirm")) {
    alert("Passwords must match");
    return;
  }
  registerQuery({
    username: val("#usernameR"),
    fname: val("#fname"),
    lname: val("#lname"),
    password: val("#passwordR"),
    type: val("#role")
  });
}

const registerQuery = (dat) => {
  
  $.post({
    url: "http://localhost:8090/users/name",
    data: JSON.stringify(dat),
    processData: false,
    contentType: "application/json",
    cache: false,
    timeout: 80000,
    xhrFields: {
      withCredentials: true,
    },
    complete: (res) => {
      if(res.status == 201) {
        router.push("/");
      } else {
        alert("An error occurred during account creation.");
      }
    },
    error: (e) => {
      console.log(e);
    },
  })
  

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
    complete: (res) => {
      if(res.status == 401) {
        alert("Incorrect username/password!");
      } else if(res.status == 200) {
        router.push("/");
      }
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
    ...api,
    signOut: () => {
      api.signOut();
      router.go(0);
    }
  }
};
</script>