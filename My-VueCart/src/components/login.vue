<template>
  <div>
    <h1>Login</h1>

    <form @submit.prevent="signIn">
      <input placeholder="email" v-model="email" /><br />

      <input placeholder="password" v-model="password" /><br />

      <button type="submit">Sign In</button>
      
    </form>
    <button v-on:click="logOut">Log Out</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["login"],
  data: () => {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    async signIn() {
      await axios
        .post("http://localhost:5000/login", {
          email:this.email,
          password:this.password,
        })
        .then((result) => {
        
          localStorage.setItem("token", result.data.token);
          localStorage.setItem("userID", result.data.result[0].UserID);
        });
    },
  
  },
};
</script>

<style></style>
