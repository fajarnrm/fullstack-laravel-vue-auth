<template>
  <div class="container">
    <div class="row justify-content mt-2">
      <div class="col md-12">
        <nav class="navbar navbar-expand-lg" style="background-color: #e3f2fd">
          <div class="container-fluid">
            <h3 class="navbar-brand" href="#">Dashboard</h3>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#"
                    >Home</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div class="card mt-3">
          <div class="card-header text-center">
            <h3>Hello</h3>
          </div>
          <div class="card-body">
            <div class="d-flex justify-content-end">
              <a @click="logout"> Logout </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    function logout() {
      store.commit("logout");
      router.push({
        name: "login",
      });
    }
    return {
      user: computed(() => store.state.user.data),
      logout,
    };
  },
};
</script>
