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
        <!-- router  -->
        <router-view /> 
    </div>
  </div>
</template>

<script>
export default {
  name: "layout-default",
};
</script>
