<template>
  <div>
    <h1>Login</h1>

    <form @submit.prevent="signIn">
      <input placeholder="email" v-model="email" /><br />

      <input placeholder="password" v-model="password" /><br />

      <button type="submit">Login</button>
      
    </form>
  
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

<style>

* {
  margin: 0;
  padding: 0;
}

input{
  margin: 1rem;
  background-color: rgba(128, 128, 128, 0.164);
  align-items: center;
  align-content: center;
  text-align: start;
  width: 75%;
  height: 2rem;
  padding: 0.4rem;
  margin: 0.8rem;
  border-style: none;
  position: relative;
  bottom: 1rem;
}






</style>
