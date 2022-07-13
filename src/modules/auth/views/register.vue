<template>
  <form class="form" @submit.prevent="onSubmit" novalidate>
    <div class="mb-20px">
      <div class="form__group">
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
          v-model="form.name"
        />
      </div>
      <div class="form__status-error" v-if="formstate">
        <template v-if="!validation.form.name.required"
          >name is required !</template
        >
      </div>
    </div>
    <div class="mb-20px">
      <div class="form__group">
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
          v-model="form.email"
        />
      </div>
      <div class="form__status-error" v-if="formstate">
        <template v-if="!validation.form.email.required"
          >email is required !</template
        >
      </div>
    </div>
    <div class="mb-15px">
      <inputPassword @input="(newValue) => (form.password = newValue)" />
      <div class="form__status-error" v-if="formstate">
        <template v-if="!validation.form.password.required"
          >Password is required !</template
        >
      </div>
    </div>
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
    <p>
      Already have an account?
      <router-link :to="{ name: 'login' }">Login Now </router-link>
    </p>
  </form>
</template>
<script>
import uerApi from "@/api/userApi";
import { setCookieHelper } from "@/helper/cookieHelper";
import inputPassword from "@/components/inputs/inputPassword.vue";
import {notifyAuth} from "@/helper/notify";

export default {
  name: "auth-views-regiser",
  components: {
    inputPassword,
  },
  data: function () {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        timezone: "Asia/Bangkok",
      },
      formstate: false,
      is_loading: false,
    };
  },
  methods: {
    async onSubmit() {
      this.formstate = true;
      if (this.is_loading || !this.validation.valid) return;
      this.is_loading = true;
      await this.registerUserAction(this.form);
    },
    async registerUserAction(payload) {
      /* eslint-disable */
      try {
        const res = await uerApi.registerUser(payload);
        if (res.status) {
          setCookieHelper("access_token", res.data.token, 1);
          await this.$router.push("product");
          this.is_loading = false;
          notifyAuth('success','register success');
        }
      } catch (e) {
        notifyAuth('error',e.data.message);
        this.is_loading = false;
      }
    },
  },
  computed: {
    validation() {
       const name = {
        required: this.form.name ? true : false,
      };
      const email = {
        required: this.form.email ? true : false,
      };
      const password = {
        required: this.form.password ? true : false,
      };
      return {
        form: {
          name,
          email,
          password,
        },
        valid: name.required && email.required && password.required,
      };
    },
  },
};
</script>
<style></style>
