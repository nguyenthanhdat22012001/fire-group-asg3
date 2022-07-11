<template>
  <form class="form" @submit.prevent="onSubmit">
    <div class="form__group mb-20px">
      <svg
        width="13"
        height="15"
        viewBox="0 0 13 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.125 7.75C8.03906 7.75 9.625 6.19141 9.625 4.25C9.625 2.33594 8.03906 0.75 6.125 0.75C4.18359 0.75 2.625 2.33594 2.625 4.25C2.625 6.19141 4.18359 7.75 6.125 7.75ZM8.55859 8.625H8.09375C7.49219 8.92578 6.83594 9.0625 6.125 9.0625C5.41406 9.0625 4.73047 8.92578 4.12891 8.625H3.66406C1.64062 8.625 0 10.293 0 12.3164V13.4375C0 14.1758 0.574219 14.75 1.3125 14.75H10.9375C11.6484 14.75 12.25 14.1758 12.25 13.4375V12.3164C12.25 10.293 10.582 8.625 8.55859 8.625Z"
          fill="#CECECE"
        />
      </svg>
      <input
        type="email"
        class="form__input"
        placeholder="Your email"
        required
        v-model="email"
      />
    </div>
 <inputPassword @input="newValue => password = newValue" />
    <div class="flex-center-between mb-15px">
      <div class="form__group-checkbox">
        <input type="checkbox" id="rememberMe" class="form__input-radio" />
        <label for="rememberMe" class="form__label-radio">Remember Me</label>
      </div>
      <a href="#">Forgot password?</a>
    </div>
    <button type="submit" class="btn btn--full-width btn--blues">Login</button>
    <a href="" class="login-register__redirect">Or login with</a>
    <div class="login-register__list-btn">
      <button class="btn btn--icon-text btn--white">
        <img src="@/assets/images/icons/google.svg" alt="" />
        Google Account
      </button>
      <button class="btn btn--icon-text btn--white">
        <img src="@/assets/images/icons/facebook.svg" alt="" />
        Facebook Account
      </button>
    </div>
    <p>
      Don't have an account?
      <router-link :to="{ name: 'register' }"
        >Create a Free Account
      </router-link>
    </p>
  </form>
</template>
<script>
import { convertDateTimezoneHelper } from "@/helper/dateHelper";
import uerApi from "@/api/userApi";
import { setCookieHelper } from "@/helper/cookieHelper";
import inputPassword from "@/components/inputs/inputPassword.vue";

export default {
  name: "auth-views-login",
    components:{
    inputPassword,
  },
  data: function () {
    return {
      email: "",
      password: "",
      errors: {
        isError: false,
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async onSubmit() {
      let payload = {
        email: this.email,
        password: this.password,
        timezone: convertDateTimezoneHelper(new Date(), "Asia/Bangkok"),
      };
      await this.loginUserAction(payload);
    },
    async loginUserAction(payload) {
      /* eslint-disable */
      try {
        const res = await uerApi.loginUser(payload);
        if (res.status) {
          setCookieHelper("access_token", res.data.token, 1);
          await this.$router.push("product");
        }
      } catch (e) {
        throw e;
      }
    },
    onChangeTypePassword: function () {
      if (this.$refs.password.type == "text") {
        this.$refs.password.type = "password";
      } else {
        this.$refs.password.type = "text";
      }
    },
  },
};
</script>
<style lang="scss" scoped></style>
