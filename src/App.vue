<template>
  <div id="app-wrapper">
    <Navbar />
    <div id="main-contents-wrapper">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: 'App',
  components: {
    Navbar, Footer
  }
}
</script>

<style src=".\assets\css\fonts.css"></style>
<style src=".\assets\css\styles.css"></style>

<style>
div#nav {
  float: left;
  width: 100%;
  overflow-x: hidden;
  position: relative;
  min-height: 100vh;
}

div#main-contents-wrapper {
  padding-top: 100px;
}
</style>