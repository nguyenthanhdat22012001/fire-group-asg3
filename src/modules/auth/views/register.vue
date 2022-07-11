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
        type="text"
        class="form__input"
        placeholder="Full Name"
        required
        v-model="name"
      />
    </div>
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
    <!-- <div class="form__group mb-15px">
      <svg
        width="13"
        height="15"
        viewBox="0 0 13 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.9375 6.875H10.2812V4.90625C10.2812 2.63672 8.39453 0.75 6.125 0.75C3.82812 0.75 1.96875 2.63672 1.96875 4.90625V6.875H1.3125C0.574219 6.875 0 7.47656 0 8.1875V13.4375C0 14.1758 0.574219 14.75 1.3125 14.75H10.9375C11.6484 14.75 12.25 14.1758 12.25 13.4375V8.1875C12.25 7.47656 11.6484 6.875 10.9375 6.875ZM7.21875 11.4688C7.21875 12.0977 6.72656 12.5625 6.125 12.5625C5.49609 12.5625 5.03125 12.0977 5.03125 11.4688V10.1562C5.03125 9.55469 5.49609 9.0625 6.125 9.0625C6.72656 9.0625 7.21875 9.55469 7.21875 10.1562V11.4688ZM8.09375 6.875H4.15625V4.90625C4.15625 3.83984 5.03125 2.9375 6.125 2.9375C7.19141 2.9375 8.09375 3.83984 8.09375 4.90625V6.875Z"
          fill="#CECECE"
        />
      </svg>
      <input
        type="password"
        class="form__input"
        placeholder="Password"
        required
        v-model="password"
      />
      <span class="form__text-absolute">hide</span>
    </div> -->
    <inputPassword @input="newValue => password = newValue" />
    <button type="submit" class="btn btn--full-width btn--blues mb-15px">
      Create Free Account
    </button>
    <p>
      By providing your email, you are agreeing to our
      <a href="">terms of service.</a>
    </p>
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
    <p>Already have an account? <router-link :to="{name: 'login'}">Login Now </router-link></p>
  </form>
</template>
<script>
// import { mapActions } from 'vuex'
import { convertDateTimezoneHelper } from "@/helper/dateHelper";
import uerApi from "@/api/userApi";
import { setCookieHelper } from "@/helper/cookieHelper";
import inputPassword from "@/components/inputs/inputPassword.vue";

export default {
  name: "auth-views-regiser",
  components:{
    inputPassword,
  },
  data: function () {
    return {
      email: "",
      name: "",
      password: "",
    };
  },
  methods: {
    async onSubmit() {
      let payload = {
        email: this.email,
        name: this.name,
        password: this.password,
        timezone: convertDateTimezoneHelper(new Date(), "Asia/Bangkok"),
      };
      await this.registerUserAction(payload);
    },
    async registerUserAction(payload) {
      /* eslint-disable */
      try {
        const res = await uerApi.registerUser(payload);
        if (res.status) {
          setCookieHelper("access_token", res.data.token, 1);
          await this.$router.push("product");
        }
      } catch (e) {
        throw e;
      }
    },
  },
};
</script>
<style></style>
