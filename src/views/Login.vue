<template>
  <div class="loginForm">
    <img id="logo" src="../assets/logo.png" />

    <div id="emailForm">
      <md-field>
        <label id="emailLabel">Email</label>
        <md-input v-model="EmailAddress" id="emailField"></md-input>
        <span id="validEmail" v-if="validEmail === false"
          >Email is required</span
        >
        <span id="validEmail" v-if="validEmail === true"
          >Email adress is not valid</span
        >
      </md-field>
    </div>

    <div id="passwordForm">
      <md-field>
        <label id="passwordLabel">Password</label>
        <md-input
          type="password"
          v-model="Password"
          id="passwordField"
        ></md-input>
        <span id="validPassword" v-if="validPassword === false"
          >Password is required</span
        >
        <span id="validPassword" v-if="validPassword === true"
          >Password is not valid</span
        >
      </md-field>
    </div>

    <div id="rememberUser">
      <input id="checkBoxRemember" type="checkbox" v-model="rememberUser" />
      <label
        id="checkRemember"
        for="checkRemember"
        v-on:click="checkRememberUser"
        >Remember me</label
      >
    </div>

    <label id="forgotPassword"><a id="textFP">Forgot password ?</a> </label>

    <div id="loginFooter">
      <div id="loginButton" v-on:click="signIn(EmailAddress, Password)">
        Sign in
      </div>
    </div>
  </div>
</template>

<script>
import checkFunctions from "../components/Functions/checkFunctions";
import generateFunctions from "../components/Functions/generateFunctions";

import { mapActions } from "vuex";

export default {
  name: "Login",

  data() {
    return {
      EmailAddress: "",
      Password: "",
      validEmail: 0,
      validPassword: 0,
      rememberUser: false,
    };
  },
  methods: {
    ...mapActions([
      "fetchEmailAddress",
      "fetchUserName",
      "fetchRememberUser",
      "fetchLogedIn",
    ]),

    checkRememberUser() {
      this.rememberUser = !this.rememberUser;
    },

    signIn(email, password) {
      this.validEmail = checkFunctions.checkEmail(email);
      this.validPassword = checkFunctions.checkPassword(password);
      if (this.validEmail === 0 && this.validPassword === 0) {
        this.fetchEmailAddress(email);
        this.fetchUserName(generateFunctions.generateUserName(email)); // Username will be all characters before @
        this.fetchRememberUser(this.rememberUser);
        this.fetchLogedIn(true); // Alert that user is loged in. Clicking to reload page will be automatically loged out..
        this.$router.push("/Workspace");
      }
    },
  },
};
</script>

<style scoped>
.loginForm {
  width: 50vh;
  height: 50vh;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 25% 15% 5% 15% 10% 10% 20%;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
}

#logo {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

#emailForm {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
}

#emailField {
  cursor: pointer;
}

#validEmail {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 4;
  font-size: 1.5vh;
  color: red;
}

#passwordForm {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 4;
  grid-row-end: 5;
}

#passwordField {
  cursor: pointer;
}

#validPassword {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 5;
  grid-row-end: 6;
  font-size: 1.5vh;
  margin-right: 5%;
  color: red;
}

#rememberUser {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 6;
  grid-row-end: 7;
}

#checkRemember {
  font-size: 2vh;
  margin-left: 1%;
  color: grey;
  line-height: 250%;
}

#checkRemember:hover {
  cursor: pointer;
}

#checkBoxRemember {
  width: 2vh;
  height: 2vh;
}

#checkBoxRemember:hover {
  cursor: pointer;
}

#forgotPassword {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 6;
  grid-row-end: 7;
  font-size: 2vh;
  color: grey;
  height: 100%;
  text-align: right;
}

#forgotPassword:hover {
  cursor: pointer;
}

#loginFooter {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 7;
  grid-row-end: 8;
}

#loginButton {
  width: 100%;
  height: 7vh;
  background-color: rgb(57, 57, 231);
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-radius: 2%;
  color: white;
  font-size: 2.5vh;
  text-align: center;
  line-height: 250%;
  box-shadow: 0px 15px 20px 0px rgb(199, 199, 255);
}

#loginButton:hover {
  background-color: rgb(93, 93, 228);
  cursor: pointer;
}

#emailLabel {
  font-size: 2vh;
}

#passwordLabel {
  font-size: 2vh;
}

#textFP {
  line-height: 250%;
}

@media screen and (max-width: 600px) and (orientation: portrait) {
  .loginForm {
    width: 80vw;
    height: 80vw;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 25% 15% 5% 15% 10% 10% 20%;
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
  }

  #logo {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  #emailForm {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
  }

  #validEmail {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 4;
    font-size: 2.1vw;
    color: red;
  }

  #passwordForm {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 4;
    grid-row-end: 5;
  }

  #passwordField {
    cursor: pointer;
  }

  #validPassword {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 5;
    grid-row-end: 6;
    font-size: 2.1vw;
    margin-right: 5%;
    color: red;
  }

  #rememberUser {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 6;
    grid-row-end: 7;
  }

  #checkRemember {
    font-size: 3vw;
    margin-left: 1%;
    color: grey;
    line-height: 350%;
  }

  #checkBoxRemember {
    width: 3vw;
    height: 3vw;
  }

  #forgotPassword {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 6;
    grid-row-end: 7;
    font-size: 3vw;
    color: grey;
    text-align: right;
    height: 100%;
  }

  #loginFooter {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 7;
    grid-row-end: 8;
  }

  #loginButton {
    width: 100%;
    height: 7vw;
    background-color: rgb(57, 57, 231);
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 2%;
    color: white;
    font-size: 3vw;
    text-align: center;
    line-height: 250%;
    box-shadow: 0px 5px 8px 0px rgb(199, 199, 255);
  }

  #emailLabel {
    font-size: 2.2vw;
  }

  #passwordLabel {
    font-size: 2.2vw;
  }

  #textFP {
    line-height: 350%;
  }
}
</style>