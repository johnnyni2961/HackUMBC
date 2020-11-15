<template>
<div>
      <!-- Page Wrapper -->
    <div id="wrapper">

        <!-- Sidebar -->
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <!-- Sidebar - Brand -->
            <router-link :to="{ path: '/' }" class="sidebar-brand d-flex align-items-center">
                <div class="sidebar-brand-icon">
                    <img src="../assets/Connect_Each_Cropped.png" />
                </div>
            </router-link>



            <!-- Divider -->
            <hr class="sidebar-divider">

            <!-- Heading -->
           <!-- <div class="sidebar-heading">
                Interface
            </div> -->




            <!-- Nav Item - Tables -->

            <!-- Divider -->
            <hr class="sidebar-divider d-none d-md-block">




        </ul>
        <!-- End of Sidebar -->

        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">

            <!-- Main Content -->
            <div id="content">

                <!-- Topbar -->
                <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                    <!-- Sidebar Toggle (Topbar) -->
                    <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                        <i class="fa fa-bars"></i>
                    </button>


                <!-- End of Topbar -->
            

                    <!-- Topbar Navbar -->
                    <ul class="navbar-nav ml-auto">

                        <div class="topbar-divider d-none d-sm-block"></div>

                        <!-- Nav Item - User Information -->
                        <li class="nav-item dropdown no-arrow">
                            <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="mr-2 d-none d-lg-inline text-gray-600 small">
                                    <span v-if="loginChecker()">
                                        {{ displayName() }}
                                    </span>
                                    <span v-else>
                                        Not signed in
                                    </span>
                                </span>
                                <img class="img-profile rounded-circle"
                                    src="img/undraw_profile.svg">
                            </a>
                            <!-- Dropdown - User Information -->
                            
                            <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="userDropdown">
                                <div v-if="loginChecker()">
                                    <router-link class="dropdown-item" :to="{ path: `/user/@${getUser()}` }">
                                        <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                        Profile
                                    </router-link>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#" @click="signOut()">
                                        <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                        Logout
                                    </a>
                                </div>
                                <div v-else>
                                    <router-link class="dropdown-item" :to="{ path: '/loginpro' }">
                                        <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                        Login
                                    </router-link>
                                    <div class="dropdown-divider"></div>
                                    <router-link class="dropdown-item" :to="{ path: '/register'}">
                                        <i class="fas fa-sign-in-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                        Register
                                    </router-link>
                                </div>
                            </div>
                        </li>
                    </ul>

                </nav>
                <!-- End of Topbar -->
                <!-- Begin Page Content -->
                <div class="container-fluid">

                    <!-- Page Heading -->
                    <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Welcome to Connecteach</h1>
                    </div>

                    <!-- Content Row -->
                    <div class="row">

                        

                        <div class="col-lg-6 mb-4">

                            <!-- Illustrations -->
                            <div class="card shadow mb-4">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">How it works (for students)</h6>
                                </div>
                                <div class="card-body">
                                    <p>Connecteach is simple to use: all you need to do as a student is provide some basic information about yourself like your grade and subjects of interest via your <router-link :to="{path:`${loginChecker() ? '/user/@' + getUser() : '/loginpro'}`}">profile</router-link>.
                                    Then, when you want to find a tutor, you can filter a list of possible tutors by those areas of interest!</p>
                                </div>
                            </div>

                            <!-- Approach -->
                            <div class="card shadow mb-4">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">How it works (for tutors)</h6>
                                </div>
                                <div class="card-body">
                                    <p>Just like for students, to get started with Connecteach, you'll need to head to your <router-link :to="{path:`${loginChecker() ? '/user/@' + getUser() : '/loginpro'}`}">profile</router-link>
                                    and list off some keywords relevant to your experience. For example, say you're great in your high school math classes. You might list these tags for yourself:</p>
                                    <p class="mb-0"><kbd>math</kbd> <kbd>calculus</kbd> <kbd>algebra</kbd> <kbd>algebra</kbd> <kbd>k12</kbd></p><br>
                                    <p class="mb-0">You'll also want to list an email address for yourself. That way, interested students can find a way to contact you! Finally, you can include a brief description of yourself and your teaching style. Make yourself stand out!</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 mb-4">
                            <div class="card shadow mb-4">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">Search tutors</h6>
                                </div>
                                <div class="card-body">
                                    <input type="text" id="tagFilter" placeholder="Find some tags (separate by spaces)" class="form-control"/>
                                    <table>
                                        <tr>
                                            <th>Tutor Name</th>
                                            <th>Username</th>
                                            <th>Profile</th>
                                        </tr>
                                        <tr v-for="tutor in tutors" v-bind:key="tutor.username">
                                            <td>{{ `${tutor.fname} ${tutor.lname}` }}</td>
                                            <td>{{ tutor.username }}</td>
                                            <td><router-link :to="{path: `/user/@${tutor.username}`}">Profile</router-link></td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <!-- /.container-fluid -->

            </div>
            <!-- End of Main Content -->

            <!-- Footer -->
            <footer class="sticky-footer bg-white">
                <div class="container my-auto">
                    <div class="copyright text-center my-auto">
                        <span>Copyright &copy; Connecteach  2020</span>
                    </div>
                </div>
            </footer>
            <!-- End of Footer -->

        </div>
        <!-- End of Content Wrapper -->

    </div>
    <!-- End of Page Wrapper -->

    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
    </a>


  </div>
</template>

<script>
import router from '../routes';
import * as api from './apiCalls';

import $ from 'jquery';

export default {
  name: "Home",
  data() {
    return {
      filterKey: $('#tagFilter')[0].value,
      tutors: api.allUserProfiles()
    };
  },
  methods: {
    ...api,
    signOut: () => {
      api.signOut();
      router.go(0);
    },
    filteredList: function(list) {
        return list.filter((val) => document.getElementById("tagFilter").value.split(" ").reduce((p,c)=>p&&val.tags.split(" ").includes(c),true));
    }
  }
};


</script>

<!--
<div>
    <h1>Connecteach</h1>
    <h3></h3>
    <p></p>
    <div v-if="loginChecker()" :key="componentKey">
      <h1>Hi there, {{ getUser() }}</h1>
      <h3><a href="#" @click="signOut()">Sign out</a></h3>
      
    </div>
    <div v-else>
      <h1>You are not logged in!</h1>
    </div>
    <nav>
      <ul>
        <li><router-link :to="{ name: 'login' }">Login/Register</router-link></li>
 
        <li><router-link :to="{ name: 'tutorsignup' }">Tutor Sign Up</router-link></li>
        <li><router-link :to="{ name: 'tutorsignin' }">Tutor Sign In</router-link></li>
        <li><router-link :to="{ name: 'tutor' }">Tutor Test</router-link></li>
        <li><router-link :to="{ name: 'subject'}">subject test</router-link></li>
      </ul>
    </nav>
  </div> -->