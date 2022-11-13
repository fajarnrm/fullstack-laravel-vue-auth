<template>
  <div class="container">
    <div class="row justify-content-center mt-5">
      <div class="col-md-5">
        <div class="card rounded shadow">
          <div class="card-header text-center">
            <h4>Login</h4>
          </div>
          <div class="card-body">
            <form @submit="login">
              <div class="form-outline mb-4 mt-2">
                <label>Email address</label>
                <input type="email" class="form-control" v-model="user.email" />
              </div>
              <div class="form-outline mb-4">
                <label class="form-label" for="form2Example2">Password</label>
                <input
                  type="password"
                  class="form-control"
                  v-model="user.password"
                />
              </div>

              <div class="row mb-4">
                <div class="col d-flex justify-content-start">
                  <!-- Checkbox -->
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="form2Example31"
                      checked
                      v-model="user.remember"
                    />
                    <label class="form-check-label" for="form2Example31">
                      Remember me
                    </label>
                  </div>
                </div>
              </div>

              <!-- Submit button -->
              <button
                type="submit"
                class="form-control btn btn-outline-primary btn-block mb-3"
              >
                Sign in
              </button>
              <div class="text-center mt-3">
                <p>No Have Account?</p>
              </div>
              <router-link
                :to="{ name: 'register' }"
                class="form-control btn btn-outline-success btn-block btn-sm mb-4"
              >
                Sign Up
              </router-link>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
import store from "../store";

const router = useRouter();

const user = {
  email: "",
  password: "",
  remember: false,
};

function login(ev) {
  ev.preventDefault();
  store.dispatch("login", user).then(() => {
    router.push({ name: "dashboard" });
  });
}
</script>
