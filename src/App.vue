<template>
  <div id="app">
    <div class="wrapper">
      <div class="container">
        <vue-extend-layouts />
      </div>
    </div>
    <notifications group="auth" position="top center" />
  </div>
</template>

<script>
import VueExtendLayouts from "vue-extend-layout";
import "./assets/css/reset.css";
import "./styles/main.scss";

export default {
  name: "App",
  components: { VueExtendLayouts },
};
</script>
