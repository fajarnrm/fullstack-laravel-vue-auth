<template>
  <div class="container">
    <div class="row justify-content-center mt-4">
      <div class="col-md-5">
        <div class="card rounded shadow">
          <div class="card-header text-center">
            <h3>Register</h3>
          </div>
          <div class="card-body">
            <form @submit="register">
              <div class="form-outline mb-4 mt-2">
                <label>Name</label>
                <input type="text" class="form-control" v-model="user.name" />
              </div>
              <div class="form-outline mb-4">
                <label>Email</label>
                <input type="email" class="form-control" v-model="user.email" />
              </div>
              <div class="form-outline mb-4">
                <label>Password</label>
                <input
                  type="password"
                  class="form-control"
                  v-model="user.password"
                />
              </div>
              <div class="form-outline mb-4">
                <label>Confirm Password</label>
                <input
                  type="password"
                  class="form-control"
                  v-model="user.password_confirmation"
                />
              </div>

              <button
                type="submit"
                class="form-control btn btn-outline-primary btn-block mb-3"
              >
                Sign Up
              </button>

              <div class="text-center mt-3">
                <p>You Have Account?</p>
              </div>
            </form>

            <router-link
              :to="{ name: 'login' }"
              class="form-control btn btn-outline-success btn-block btn-sm mb-4"
            >
              Sign Up
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import store from "../store";
import { useRouter } from "vue-router";

const router = useRouter();

const user = {
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
};

function register(ev) {
  ev.preventDefault();
  store.dispatch("register", user).then((res) => {
    router.push({ name: "dashboard" });
  });
}
</script>
