<template>
  <div class="Header">
    <div id="Logo">
      <img id="logoimg" src="../assets/logo.png" />
    </div>

    <div id="Avatar">
      <div id="userName" v-on:click="openLogoutLink">{{ UserName }}</div>
      <img id="avatar" src="../assets/avatar.png" v-on:click="openLogoutLink" />
    </div>

    <div id="Text">
      <label id="title">Manage your to do list</label>
      <label id="text">Click on checkbox or drag and drop to done</label>
    </div>

    <div id="Logout" v-if="LogoutActivate">
      <div id="logoutForm">
        <img id="logoutImg" v-on:click="logOut" src="../assets/logout.jpg" />
        <a id="logOutText" v-on:click="logOut">Log out</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Header",

  data() {
    return {
      LogoutActivate: false,
    };
  },
  computed: mapGetters(["UserName"]),
  methods: {
    ...mapActions([
      "fetchEmailAddress",
      "fetchUserName",
      "fetchRememberUser",
      "fetchLogedIn",
    ]),
    openLogoutLink() {
      this.LogoutActivate = !this.LogoutActivate;
    },

    logOut() {
      this.fetchEmailAddress("");
      this.fetchUserName("");
      this.fetchRememberUser(false);
      this.fetchLogedIn(false);
      this.$router.push("/");
    },
    test() {
      console.log("test");
    },
  },
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
  background-color: rgb(245, 245, 245);
}

#Avatar {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-rows: 100%;
  background-color: rgb(245, 245, 245);
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
  animation: scale-in-ver-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
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

#logoimg {
  width: 20vh;
  height: 5vh;
  margin-left: 20%;
  margin-top: 2%;
}

#userName {
  font-size: 2.3vh;
  margin: auto;
  margin-right: 10%;
  margin-top: 4%;
  font-weight: bolder;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
}

#userName:hover {
  cursor: pointer;
  font-size: 2.5vh;
}

#avatar {
  width: 8vh;
  height: 8vh;
  margin: auto;
  margin-left: -20%;
  border-radius: 50%;
  background-color: rgb(240, 240, 240);
  margin-top: 3%;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}

#avatar:hover {
  cursor: pointer;
  box-shadow: 1px 2px 2px 1px grey;
}

#logoutForm {
  width: 25%;
  height: 50%;
  margin-left: 50%;
  box-shadow: 1px 4px 4px 1px rgb(223, 223, 223);
}

#logoutForm:hover {
  cursor: pointer;
  background-color: rgb(240, 240, 240);
}

#logoutImg {
  width: 3vh;
  height: 3vh;
  margin-top: 5%;
}

#logoutImg:hover {
  cursor: pointer;
}

#logOutText {
  font-size: 2vh;
  margin-left: 5vh;
  margin-top: -3vh;
  display: flex;
}

#logOutText:hover {
  cursor: pointer;
}

#title {
  margin-left: 20%;
  font-size: 2vh;
  font-weight: bolder;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
}

#text {
  margin-left: 20%;
  font-size: 1.7vh;
  color: grey;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
}
</style>