<template>
    <div v-if="!loginChecker()">
        <div class="bg-gradient-primary">
        <div class="container">

            <!-- Outer Row -->
            <div class="row justify-content-center">

                <div class="col-xl-10 col-lg-12 col-md-9">

                    <div class="card o-hidden border-0 shadow-lg my-5">
                        <div class="card-body p-0">
                            <!-- Nested Row within Card Body -->
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="p-5">
                                        <div class="text-center">
                                            <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                        </div>
                                        <form id="loginForm" class="user" action="#">
                                            <div class="form-group">
                                                <input type="text" class="form-control form-control-user"
                                                    name="username" aria-describedby="emailHelp"
                                                    placeholder="Username">
                                            </div>
                                            <div class="form-group">
                                                <input type="password" class="form-control form-control-user"
                                                    name="password" placeholder="Password">
                                            </div>
                                        <input type="submit" @click="login" class="btn btn-primary btn-user btn-block" value="Login" />
                                        </form>
                                        <hr>
                                        <div class="text-center">
                                            <router-link class="small" :to="{ path: '/register'}">Create an Account!</router-link>
                                        </div>
                                    </div>
                                </div>
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
import * as api from './apiCalls';

import router from "../routes";

// if(api.loginChecker()) router.push({path:"/"});

import $ from "jquery";

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
  data() {
    return {
        router
    }
  },
  methods: {
    login,
    loginQuery,
    //register,
    ...api,
    signOut: () => {
      api.signOut();
      router.go(0);
    }
  }
};
</script>

