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
    <div id="openedLogoutScreenForMobile" v-if="MobileLogout">
      <div id="closeScreen" v-on:click="closeMobileLogoutScreen"></div>
      <div id="content">
        <p id="userNameForMobile">{{ UserName }}</p>
        <div id="logoutButtonForMobile">
          <div id="logoutFormForMobile">
            <img
              id="logoutImgforMobile"
              v-on:click="logOut"
              src="../assets/logout.jpg"
            />
            <a id="logOutTextForMobile" v-on:click="logOut">Log out</a>
          </div>
        </div>
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
      MobileLogout: false,
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

    // For the mobile screen clickng to avatar, right top corner, application will open new screen.
    // For the computer screen, clickig to avatar or username, will be opened pop up button for logout.

    openLogoutLink() {
      const mq = window.matchMedia("(max-width: 600px)");
      if (mq.matches) {
        this.MobileLogout = true;
      } else {
        this.LogoutActivate = !this.LogoutActivate;
      }
    },

    // Clicking to logout button, application will forget everything in vuex store and move user to login page
    logOut() {
      this.fetchEmailAddress("");
      this.fetchUserName("");
      this.fetchRememberUser(false);
      this.fetchLogedIn(false);
      this.$router.push("/");
    },
    // Function works only for mobile screen ( Max- width 600px)
    closeMobileLogoutScreen() {
      this.MobileLogout = false;
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
  background-color: rgb(230, 230, 230);
}

#Avatar {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-rows: 100%;
  background-color: rgb(230, 230, 230);
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
  background-color: rgb(230, 230, 230);
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

#openedLogoutScreenForMobile {
  display: none;
}

@media screen and (max-width: 600px) and (orientation: portrait) {
  .Header {
    width: 100%;
    height: 20%;
    display: grid;
    grid-template-columns: 70% 30%;
    grid-template-rows: 50% 50%;
  }

  #Logo {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
    background-color: rgb(240, 240, 240);
  }

  #Avatar {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
    background-color: rgb(245, 245, 245);
  }

  #Text {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 50% 50%;
  }

  #Logout {
    display: none;
  }

  #logoimg {
    width: 30vw;
    height: 10vw;
    margin-left: 15%;
    margin-top: 2%;
  }

  #userName {
    display: none;
  }

  #avatar {
    width: 15vw;
    height: 12vw;
    margin: auto;
    margin-left: -100%;
    border-radius: 50%;
    background-color: rgb(240, 240, 240);
    margin-top: 3%;
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
  }

  #logoutForm {
    display: none;
  }

  #logoutImg {
    display: none;
  }

  #logOutText {
    font-size: 2vh;
    margin-left: 5vh;
    margin-top: -3vh;
    display: flex;
  }

  #title {
    margin-left: 10%;
    font-size: 5vw;
    font-weight: bolder;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
  }

  #text {
    margin-left: 10%;
    font-size: 4vw;
    color: grey;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
  }
  #openedLogoutScreenForMobile {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    position: absolute;
    display: grid;
    grid-template-columns: 15% 85%;
    grid-template-rows: 100%;
    animation: slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  @keyframes slide-in-right {
    0% {
      -webkit-transform: translateX(1000px);
      transform: translateX(1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  }
  #closeScreen {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
    background-color: grey;
    opacity: 0.9;
  }

  #content {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 20% 80%;
    background-color: white;
  }

  #userNameForMobile {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
    margin: auto;
    color: grey;
    font-size: 5vw;
  }

  #logoutButtonForMobile {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
  }

  #logoutFormForMobile {
    width: 40%;
    height: 7%;
    margin-left: 50%;
    box-shadow: 1px 4px 4px 1px rgb(223, 223, 223);
    margin: auto;
    left: 0;
    right: 0;
    margin-top: 70vh;
  }

  #logoutImgForMobile {
    width: 3vw;
    height: 3vw;
    margin-top: 5%;
  }

  #logOutTextForMobile {
    font-size: 5vw;
    margin-left: 5vw;
    margin-top: -3vw;
  }
}
</style>