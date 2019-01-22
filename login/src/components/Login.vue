<template>
  <div class="container" :class="{active: checker.isActive}">
    <div class="row">
      <div class="container" :class="{active: checker.isActive}">
        <div class="card"></div>
        <div class="card">
          <h1 class="title">Login</h1>
          <form>
            <div class="input-container">
              <input
                type="text"
                id="Username"
                required="required"
                v-model="email"
                @blur="checkEmail"
              >
              <label for="Username">Username</label>
              <div class="bar"></div>
            </div>

            <div class="alert alert-danger" v-if="checker.alertEmail" style="margin: 10px 60px">
              <strong>Username</strong> Can't be empty.
            </div>

            <div class="input-container">
              <input
                type="password"
                id="Password"
                required="required"
                v-model="password"
                @blur="checkPassword"
              >
              <label for="Password">Password</label>
              <div class="bar"></div>
            </div>

            <div class="alert alert-danger" v-if="checker.alertPassword" style="margin: 10px 60px">
              <strong>Password</strong> Can't be empty.
            </div>

            <div class="alert alert-danger" v-if="checker.alertLogin" style="margin: 10px 60px">
              <strong>Username or Password</strong> is incorrect.
            </div>

            <div class="input-container">
              <input class="remember" type="checkbox" id="remember" v-model="remember">
              <p class="text-center">Remeber me</p>
            </div>
            <div class="button-container">
              <button @click.prevent="loginBtn">
                <span>Go</span>
              </button>
            </div>
            <div class="footer">
              <a href="#" data-toggle="modal" data-target="#myModal">Forgot your password?</a>
            </div>
          </form>
        </div>

        <div class="card alt">
          <div class="toggle" @click="toggleBtn"></div>
          <h1 class="title">Register
            <div class="close" @click="toggleBtn"></div>
          </h1>
          <form>
            <div class="input-container">
              <input
                type="text"
                id="UsernameReg"
                required="required"
                v-model="usernameReg"
                @blur="checkUsernameReg"
              >
              <label for="UsernameReg">Username</label>
              <div class="bar"></div>
            </div>
            <div class="input-container">
              <input
                type="text"
                id="EmailReg"
                required="required"
                v-model="emailReg"
                @blur="checkEmailReg"
              >
              <label for="EmailReg">Email</label>
              <div class="bar"></div>
            </div>
            <div class="input-container">
              <input type="password" id="PasswordReg" required="required" v-model="passwordReg">
              <label for="PasswordReg">Password</label>
              <div class="bar"></div>
            </div>
            <div class="input-container">
              <input
                type="password"
                id="Repeat PasswordReg"
                required="required"
                v-model="confirmReg"
              >
              <label for="Repeat PasswordReg">Repeat Password</label>
              <div class="bar"></div>
            </div>
            <div class="button-container">
              <button @click.prevent="registerBtn">
                <span>Next</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="modal fade" id="myModal">
      <div class="modal-dialog modal-sm">
        <div class="modal-content">
          <!-- Modal Header -->
          <div class="modal-header">
            <h4 class="modal-title">Reset password</h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Email..."
                v-model="forgetPassword"
              >
              <div class="input-group-append">
                <span class="input-group-text" data-dismiss="modal" @click="forget">Reset</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";

export default {
  data: function() {
    return {
      email: "",
      password: "",
      remember: false,
      forgetPassword: "",
      usernameReg: "",
      emailReg: "",
      passwordReg: "",
      confirmReg: "",
      checker: {
        isActive: false,
        alertEmail: false,
        alertPassword: false,
        alertLogin: false
      }
    };
  },
  methods: {
    loginBtn() {
      let getEmail = this.email;
      let getPassword = this.password;
      let getRemember = this.remember;

      let headers = {
        "Content-Type": "application/json",
        Accept: "application/json"
      };

      let data = {
        email: getEmail,
        password: getPassword,
        optional: {
          token2fa: "",
          remember_me: getRemember
        }
      };

      Axios.post("http://testfe.recruiting.honestmining.org/user/login", data, {
        headers: headers
      })
        .then(res => {
          console.log(res);
          if (getEmail && getPassword !== "") {
            this.$router.push("/confirm-regis");
          }
        })
        .catch(error => {
          this.checker.alertLogin = true;
          this.checker.alertLogin = true;
        });
    },
    checkEmail() {
      let getEmail = this.email;
      if (getEmail === "") {
        this.checker.alertEmail = true;
      } else {
        this.checker.alertEmail = false;
      }
    },
    checkPassword() {
      let getPassword = this.password;
      if (getPassword === "") {
        this.checker.alertPassword = true;
      } else {
        this.checker.alertPassword = false;
      }
    },
    forget() {
      let getEmail = this.forgetPassword;

      let headers = {
        "Content-Type": "application/json",
        Accept: "application/json"
      };

      let data = {
        email: getEmail
      };

      Axios.post("http://testfe.recruiting.honestmining.org/user/check", data, {
        headers: headers
      })
        .then(res => {})
        .catch(error => {
          console.log(error);
        });
    },
    registerBtn() {
      let getUsername = this.usernameReg;
      let getEmail = this.emailReg;
      let getPassword = this.passwordReg;
      let getConfirm = this.confirmReg;

      let headers = {
        "Content-Type": "application/json"
      };

      let data = {
        username: getUsername,
        email: getEmail,
        password: getPassword,
        confirm_password: getConfirm
      };

      Axios.post(
        "http://testfe.recruiting.honestmining.org/user/register",
        data,
        {
          headers: headers
        }
      )
        .then(res => {
          alert("Registered");
        })
        .catch(error => {
          console.log(error);
          alert("Form cannot be empty");
        });
    },
    toggleBtn() {
      this.checker.isActive = !this.checker.isActive;
    },
    checkEmailReg() {
      let getEmailReg = this.emailReg;

      let headers = {
        "Content-Type": "application/json"
      };

      let data = {
        email: getEmailReg
      };

      Axios.post("http://testfe.recruiting.honestmining.org/user/check", data, {
        headers: headers
      })
        .then(res => {
          if (getEmailReg == "") {
            console.log("Email cannot be empty");
          } else {
            console.log("Email is already exist");
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    checkUsernameReg() {
      let getUsername = this.usernameReg;

      let headers = {
        "Content-Type": "application/json"
      };

      let data = {
        username: getUsername
      };

      Axios.post("http://testfe.recruiting.honestmining.org/user/check", data, {
        headers: headers
      })
        .then(res => {
          if (getUsername == "") {
            console.log("Username cannot be empty");
          } else {
            console.log("Username is already exist");
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>


<style scoped>
.remember {
  height: 25px !important;
}
</style>


