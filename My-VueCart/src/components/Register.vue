<template>
  <div id="app">
    <div id="alert" v-if="alert">{{ alert }}</div>

    <form @submit.prevent="signup">
      <label>
        User Name
        <input type="text" v-model="userName" />
      </label>
      <label>
        Phone
        <input type="text" v-model="phone" />
      </label>
      <label>
        Email address
        <input type="email" v-model="email" />
      </label>

      <label>
        Password
        <input type="password" v-model="password" />
      </label>

      <button type="submit">Sign up</button>
    </form>
    <h1>{{massage}}</h1>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["register"],
  data() {
    return {
      userName: "",
      phone: "",

      email: "",
      password: "",
      alert:"",
      massage:""

    };
  },
  methods: {
    signup() {
      axios
        .post("http://localhost:5000/register",{
          userName:this.userName,
          phone:this.phone,
          email:this.email,
          password:this.email,
        })
        .then((result) => {
       
       this.massage=result.data.massage
        })
        .catch((err) => {
          this.alert=err.response.data.massage
         
        });
    },
  },
};
</script>

<style scoped>
button,
input {
  display: block;
  margin-bottom: 10px;
}

#alert {
  color: red;
  margin-bottom: 10px;
}
</style>
