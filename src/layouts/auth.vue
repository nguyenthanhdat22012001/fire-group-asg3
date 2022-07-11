<template>
  <div class="login-register">
    <div class="login-register__logo">
      <img src="@/assets/images/icons/Logo.svg" alt="" />
    </div>
    <div class="login-register__bgr">
      <img src="@/assets/images/bg.png" alt="" />
    </div>
    <div class="login-register__bgr-img">
      <img src="@/assets/images/art_work.png" alt="" />
    </div>
    <div class="login-register__contain">
      <h2 class="login-register__title">Hi, Welcome Back!</h2>
      <div class="login-register__body">
        <!-- router  -->
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "layout-default",
};
</script>
