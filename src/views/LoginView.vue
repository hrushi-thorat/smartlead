<template>
  <div class="sl--login__wrapper">
    <app-header></app-header>
    <div class="sl--login__main-body-wrapper">
      <div class="sl--login__form-card-wrapper">
        <div class="sl--login__form-card-header">
          <h4 class="sl--login__form-card-heading">Welcome to Smartlead.ai</h4>
          <p class="sl--login__form-card-subheading">Log in to your account</p>
        </div>
        <div class="sl--login__form-card-inputs-wrapper">
          <div class="sl--login__form-input-wrapper">
            <label for="user-email">Email</label>
            <input
              id="user-email"
              type="email"
              class="login-input email-input"
            />
          </div>
          <div class="sl--login__form-input-wrapper">
            <div class="sl--login__form-label-wrapper">
              <label for="user-password">Password</label>
              <span class="forget-password">Forgot Password?</span>
            </div>
            <div class="input-wrapper">
              <input
                id="user-password"
                :type="showPassword ? 'text' : 'password'"
                ref="password"
              />
              <span class="show-button" @click="showHidePassword">{{
                showPassword ? "Hide" : "Show"
              }}</span>
            </div>
          </div>
        </div>
        <button class="sl--login__form-card-submit-button">Sign in</button>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
export default {
  components: {
    AppHeader,
  },
  data() {
    return {
      showPassword: false,
    };
  },
  methods: {
    showHidePassword() {
      this.showPassword =
        this.$refs.password.type === "password" ? true : false;
    },
  },
};
</script>

<style lang="scss">
.sl--login__wrapper {
  .sl--login__main-body-wrapper {
    margin: 114px;
    .sl--login__form-card-wrapper {
      margin: auto;
      padding: 67px 60px;
      border-radius: 3px;
      background: #fff;
      box-shadow: 0px 2px 4px 0px rgba(141, 143, 169, 0.25);
      display: flex;
      flex-direction: column;
      gap: 24px;
      width: 545px;
    }
  }
}
.sl--login__form-card-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: #000115;
  text-align: center;
  font-style: normal;
  line-height: normal;
  .sl--login__form-card-heading {
    font-size: 24px;
    font-weight: 700;
  }
  .sl--login__form-card-subheading {
    font-size: 14px;
    font-weight: 400;
  }
}
.sl--login__form-card-inputs-wrapper {
  display: flex;
  flex-direction: column;
  gap: 16px;
  .sl--login__form-input-wrapper {
    display: flex;
    flex-direction: column;
    label {
      font-weight: 400;
      line-height: 24px;
      color: #7a7d9c;
      font-size: 14px;
    }
    .login-input {
      border-radius: 3px;
      border: 1px solid #c6c7db;
      background: #fff;
      padding: 11px;
      font-weight: 400;
      font-size: 15px;
      color: #000115;
      outline: none !important;
    }
    .sl--login__form-label-wrapper {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      .forget-password {
        font-weight: 500;
        font-size: 14px;
        color: #757ae9;
        cursor: pointer;
        user-select: none;
      }
    }
  }
}
.sl--login__form-card-submit-button {
  width: 100%;
  padding: 7px 14px;
  border-radius: 3px;
  background: #edeef8;
  color: #a9abc1;
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 25px;
  border: none;
  cursor: pointer;
}
.input-wrapper {
  border-radius: 3px;
  border: 1px solid #c6c7db;
  background: #fff;
  padding: 11px;
  font-weight: 400;
  font-size: 15px;
  color: #000115;
  display: flex;
  align-items: center;
  justify-content: space-between;
  input {
    height: 100%;
    width: 100%;
    border: none;
    outline: none !important;
    flex: 1;
  }
  .show-button {
    color: #686b8a;
    font-size: 14px;
    cursor: pointer;
  }
}
</style>