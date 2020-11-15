<template>
  <div class="bg-gradient-primary">
    <div class="container">
      <div class="card o-hidden border-0 shadow-lg my-5">
        <div class="card-body p-0">
          <!-- Nested Row within Card Body -->
          <div class="row">
            <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
            <div class="col-lg-7">
              <div class="p-5">
                <div class="text-center">
                  <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                </div>
                <form class="user">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control form-control-user"
                      id="usernameR"
                      placeholder="Username"
                    />
                  </div>
                  <div class="form-group row">
                    <div class="col-sm-6 mb-3 mb-sm-0">
                      <input
                        type="text"
                        class="form-control form-control-user"
                        id="fname"
                        placeholder="First Name"
                      />
                    </div>
                    <div class="col-sm-6">
                      <input
                        type="text"
                        class="form-control form-control-user"
                        id="lname"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <select id="role" class="form-control-user form-control">
                      <option value="user" selected>Student</option>
                      <option value="tutor">Tutor</option>
                    </select>
                  </div>
                  <div class="form-group row">
                    <div class="col-sm-6 mb-3 mb-sm-0">
                      <input
                        type="password"
                        class="form-control-user form-control"
                        id="passwordR"
                        placeholder="Password"
                      />
                    </div>
                    <div class="col-sm-6">
                      <input
                        type="password"
                        class="form-control form-control-user"
                        id="passwordConfirm"
                        placeholder="Repeat Password"
                      />
                    </div>
                  </div>
                  <input
                    type="submit"
                    @click="register"
                    class="btn btn-primary btn-user btn-block"
                    value="Register"
                  />
                </form>
                <hr />
                <div class="text-center">
                  <router-link class="small" :to="{ path: '/loginpro' }"
                    >Already have an account? Login!</router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as api from "./apiCalls";

import router from "../routes";

if (api.loginChecker()) router.push({ path: "/" });

import $ from "jquery";

const register = (event) => {
  event.preventDefault();
  if (api.getUserByUsername($("#usernameR")[0].value).username) {
    alert("That username is already taken!");
    return;
  }
  const val = (id) => $(id)[0].value;
  const empty = (id) => (val(id) ? true : false);
  if (
    !["#usernameR", "#fname", "#lname", "#passwordR"].reduce(
      (p, c) => p && empty(c),
      true
    )
  ) {
    alert("You have to complete all fields!");
    return;
  }
  if (val("#fname").length > 40 || val("#lname").length > 40) {
    alert("First/last name cannot be >40 characters");
    return;
  }
  if (val("#usernameR").length < 3 || val("#usernameR").length > 32) {
    alert("Username must be between 3 and 32 characters");
    return;
  }
  if (val("#passwordR").length < 6) {
    alert("Password must be >=6 characters");
    return;
  }
  if (val("#passwordR") != val("#passwordConfirm")) {
    alert("Passwords must match");
    return;
  }
  registerQuery({
    username: val("#usernameR"),
    fname: val("#fname"),
    lname: val("#lname"),
    password: val("#passwordR"),
    type: val("#role"),
  });
};

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
      if (res.status == 201) {
        router.push("/");
      } else {
        alert("An error occurred during account creation.");
      }
    },
    error: (e) => {
      console.log(e);
    },
  });
};
export default {
  name: "RegisterComponent",
  methods: {
    register,
    ...api,
    signOut: () => {
      api.signOut();
      router.go(0);
    },
  },
};
</script>
