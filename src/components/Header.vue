<template>

  <div class="Header">

      <div id="Logo">
          <img id="logoimg" src="../assets/logo.png">
      </div>

      <div id="Avatar">
        <div id="userName" v-on:click="openLogoutLink">{{UserName}}</div>
        <img id="avatar" src="../assets/avatar.png" v-on:click="openLogoutLink">
      </div>

      <div id="Text">
          <label id="title">Manage your to do list</label>
          <label id="text">Click on checkbox or drag and drop to done</label>
      </div>

      <div id="Logout" v-on:click="logOut" v-if="LogoutActivate">
          <img id="logoutImg" src="../assets/logout.jpg">Log out
      </div>

  </div>

</template>

<script>

import { mapGetters, mapActions } from 'vuex';


export default {
  name: 'Header',

  data() {
    return {
        LogoutActivate:false,
    }
  },
  computed: mapGetters(
      ['UserName']
  ),
  methods:{
    ...mapActions(
      [
        'fetchEmailAddress',
        'fetchUserName',
        'fetchRememberUser',
        'fetchLogedIn'
      ]
    ),
      openLogoutLink() {
          this.LogoutActivate = !this.LogoutActivate;
      },

      logOut() {
      this.fetchEmailAddress('');
      this.fetchUserName(''); 
      this.fetchRememberUser(false);
      this.fetchLogedIn(false);
      this.$router.push('/');
      }
  }
};

</script>

<style scoped>
.Header {
    width: 100%;
    height: 20%;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 50% 50%;
}

#Logo {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
}

#Avatar {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-rows: 100%;
}

#Text {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 50% 50%;
}

#Logout {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  font-size: 2vh;
  font-weight: bolder;
  animation: scale-in-ver-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@keyframes scale-in-ver-top {
  0% {
    -webkit-transform: scaleY(0);
            transform: scaleY(0);
    -webkit-transform-origin: 100% 0%;
            transform-origin: 100% 0%;
    opacity: 1;
  }
  100% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
    -webkit-transform-origin: 100% 0%;
            transform-origin: 100% 0%;
    opacity: 1;
  }
}

#Logout:hover {
    cursor: pointer;
}

#logoimg {
    width: 20vh;
    height: 5vh;
    margin-left: 40%;
    margin-top: 2%;
}

#userName {
  font-size: 2.3vh;
  margin:auto;
  margin-right: 0%;
  margin-top: 10%;
  font-weight: bolder;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
}

#userName:hover {
    cursor: pointer;
}

#avatar {
    width: 4vh;
    height: 4.8vh;
    margin-left: 3%;
    border-radius: 50%;
    border: 0.1px solid rgb(221, 221, 221);
    background-color: rgb(240, 240, 240);
    margin-top: 3%;
    grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;

}

#avatar:hover {
    cursor: pointer;
}

#logoutImg {
    width: 3vh;
    height: 3vh;
    border: 1px solid rgb(206, 206, 206);
    border-radius: 5%;
    margin-left: 30%;  
}

#title {
    margin-left: 40%;
    font-size: 2vh;
    font-weight: bolder;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
}

#text {
    margin-left: 40%;
    font-size: 1.7vh;
    color:grey;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
}

</style>