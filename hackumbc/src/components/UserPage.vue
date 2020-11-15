<template>
  <div>
    <div id="wrapper">
      <!-- Sidebar -->
      <ul
        class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <!-- Sidebar - Brand -->
        <router-link
          :to="{ path: '/' }"
          class="sidebar-brand d-flex align-items-center"
        >
          <div class="sidebar-brand-icon">
            <img src="../assets/Connect_Each_Cropped.png" />
          </div>
        </router-link>

        <!-- Divider -->
        <hr class="sidebar-divider" />

        <!-- Heading -->
        <!-- <div class="sidebar-heading">
                Interface
            </div> -->

        <!-- Nav Item - Tables -->

        <!-- Divider -->
        <hr class="sidebar-divider d-none d-md-block" />
      </ul>
      <!-- End of Sidebar -->

      <!-- Content Wrapper -->
      <div id="content-wrapper" class="d-flex flex-column">
        <!-- Main Content -->
        <div id="content">
          <!-- Topbar -->
          <nav
            class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"
          >
            <!-- Sidebar Toggle (Topbar) -->
            <button
              id="sidebarToggleTop"
              class="btn btn-link d-md-none rounded-circle mr-3"
            >
              <i class="fa fa-bars"></i>
            </button>

            <!-- End of Topbar -->

            <!-- Topbar Navbar -->
            <ul class="navbar-nav ml-auto">
              <div class="topbar-divider d-none d-sm-block"></div>

              <!-- Nav Item - User Information -->
              <li class="nav-item dropdown no-arrow">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="userDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span class="mr-2 d-none d-lg-inline text-gray-600 small">
                    <span v-if="loginChecker()">
                      {{ displayName() }}
                    </span>
                    <span v-else> Not signed in </span>
                  </span>
                  <img
                    class="img-profile rounded-circle"
                    src="img/undraw_profile.svg"
                  />
                </a>
                <!-- Dropdown - User Information -->

                <div
                  class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                  aria-labelledby="userDropdown"
                >
                  <div v-if="loginChecker()">
                    <router-link
                      class="dropdown-item"
                      :to="{ path: `/user/@${getUser()}` }"
                    >
                      <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                      Profile
                    </router-link>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#" @click="signOut()">
                      <i
                        class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"
                      ></i>
                      Logout
                    </a>
                  </div>
                  <div v-else>
                    <router-link
                      class="dropdown-item"
                      :to="{ path: '/loginpro' }"
                    >
                      <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                      Login
                    </router-link>
                    <div class="dropdown-divider"></div>
                    <router-link
                      class="dropdown-item"
                      :to="{ path: '/register' }"
                    >
                      <i
                        class="fas fa-sign-in-alt fa-sm fa-fw mr-2 text-gray-400"
                      ></i>
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
            <div
              class="d-sm-flex align-items-center justify-content-between mb-4"
            >
              <h1 class="h3 mb-0 text-gray-800" v-if="user.username != undefined">{{ `${user.fname} ${user.lname} (@${user.username})'s Profile` }}</h1>
              <h1 class="h3 mb-0 text-gray-800" v-else>User not found :(</h1>
            </div>
            <!-- Content Row -->
            <div class="row" v-if="user.username != undefined">
              <div class="col-lg-6 mb-4">
                <!-- Illustrations -->
                <div class="card shadow mb-4">
                  <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">
                      Contact information
                    </h6>
                  </div>
                  <div class="card-body">
                    <p>
                        {{ getUserProfile(user.username).contact }}
                    </p>
                  </div>
                </div>

                <div class="card shadow mb-4">
                  <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">
                      Bio
                    </h6>
                  </div>
                  <div class="card-body">
                    <p>
                        {{ getUserProfile(user.username).bio }}
                    </p>
                  </div>
                </div>

                <div class="card shadow mb-4">
                  <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">
                      Tags
                    </h6>
                  </div>
                  <div class="card-body">
                    <p>
                        <kbd>{{ getUserProfile(user.username).tags }}</kbd>
                    </p>
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
              <span>Copyright &copy; Connecteach 2020</span>
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
import * as api from "./apiCalls";

export default {
  name: "UserPage",
  data() {
      return {
          user: api.getUserByUsername(this.$route.params.username)
      }
  },
  methods: {
    ...api,
  },
};
</script>