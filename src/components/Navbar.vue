<template>
  <div>
    <nav class="main-nav">
        <div class="container">
            <div class="nav-wrapper">
                <router-link to="/" class="brand-logo" @click="scrollToTop()">
                    <img src="../assets/images/japtini-log-logo.png" alt="Japtini" class="logo light-mode-item">
                    <img src="../assets/images/japtini-log-logo-white.png" alt="Japtini" class="logo dark-mode-item">
                </router-link>

                <ul class="dn-mobile ul-nav" id="nav-mobile-2">
                    <li>
                        <a href="#" data-target="slide-out" class="sidenav-trigger sec-color right">
                            <img src="../assets/images/menu.svg" alt="menu" class="light-mode-item" />
                            <img src="../assets/images/menu-white.svg" alt="menu" class="dark-mode-item" />
                        </a>
                    </li>
                </ul>

                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <!-- <li>
                        <router-link to="/" class="" @click="scrollToTop()">
                            <span>Home</span>
                        </router-link>
                    </li> -->
                    <li>
                        <router-link to="/about" class="" @click="scrollToTop()">
                            <span>About Us</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/partner" class="" @click="scrollToTop()">
                            <span>Become a Partner</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/services" class="" @click="scrollToTop()">
                            <span>Services</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/contact" class="" @click="scrollToTop()">
                            <span>Contact</span>
                        </router-link>
                    </li>
                </ul>
                <ul id="nav-mobile-2" class="right hide-on-med-and-down">
                    <li>
                        <button class="sec-btn btn nav-btn t-p-trigger" data-target="track-shipment" @click="scrollToTop()">
                            <span>Track Package</span>
                        </button>
                    </li>
                    <li>
                        <button class="pry-btn btn nav-btn batm-trigger" data-target="book-a-truck" @click="scrollToTop()">
                            <span>Book a Truck</span>
                        </button>
                    </li>
                    <li>
                        <div class="switch-container">
                            <div
                                aria-label="Enable light theme"
                                aria-pressed="false"
                                type="button"
                                id="theme-light-button"
                                class="theme-button enabled light-mode-btn"
                                onclick="enableTheme('light', true)"
                            >
                                <img src="../assets/images/light-switch.svg" alt="switch" class="mode-switch light-switch" />
                            </div>

                            <div
                                aria-label="Enable dark theme"
                                aria-pressed="false"
                                type="button"
                                id="theme-dark-button"
                                class="theme-button dark-mode-btn"
                                onclick="enableTheme('dark', true)"
                            >
                                <img src="../assets/images/dark-switch.svg" alt="switch" class="mode-switch dark-switch" />
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <div class="progress-container">
            <div class="progress-bar" id="myBar"></div>
        </div>
    </nav>

    <ul id="slide-out" class="sidenav">
        <div class="sidenav-logo">
            <router-link to="/" class="sidenav-close" @click="scrollToTop()">
                <img src="../assets/images/japtini-log-logo.png" alt="Japtini" class="logo light-mode-item">
                <img src="../assets/images/japtini-log-logo-white.png" alt="Japtini" class="logo dark-mode-item">
            </router-link>
        </div>
        <li>
            <router-link to="/" class="sidenav-close" @click="scrollToTop()">
                <span>Home</span>
            </router-link>
        </li>
        <li>
            <router-link to="/about" class="sidenav-close" @click="scrollToTop()">
                <span>About Us</span>
            </router-link>
        </li>
        <li>
            <router-link to="/partner" class="sidenav-close">
                <span>Become a Partner</span>
            </router-link>
        </li>
        <li>
            <router-link to="/services" class="sidenav-close">
                <span>Services</span>
            </router-link>
        </li>
        <!-- <li>
            <router-link to="/blog" class="sidenav-close">
                <span>Blog</span>
            </router-link>
        </li> -->
        <li>
            <router-link to="/contact" class="sidenav-close">
                <span>Contact</span>
            </router-link>
        </li>
        <li class="contact-us-li">
            <button class="sec-btn btn nav-btn sidenav-close t-p-trigger" @click="scrollToTop()">
                <span>Track Package</span>
            </button>
            <button class="pry-btn btn nav-btn sidenav-close batm-trigger" @click="scrollToTop()">
                <span>Book a Truck</span>
            </button>
        </li>

        <div class="switch-container mobile-switch">
            <div
                aria-label="Enable light theme"
                aria-pressed="false"
                type="button"
                id="theme-light-button-2"
                class="theme-button enabled light-mode-btn"
                onclick="enableTheme('light', true)"
            >
                <img src="../assets/images/light-switch.svg" alt="switch" class="mode-switch light-switch" />
            </div>

            <div
                aria-label="Enable dark theme"
                aria-pressed="false"
                type="button"
                id="theme-dark-button-2"
                class="theme-button dark-mode-btn"
                onclick="enableTheme('dark', true)"
            >
                <img src="../assets/images/dark-switch.svg" alt="switch" class="mode-switch dark-switch" />
            </div>
        </div>
    </ul>
    <!-- <EstimatedQuote />
    <RequestSuccess /> -->
  </div>
</template>

<script>
// import EstimatedQuote from '../components/EstimatedQuoteModal.vue'
// import RequestSuccess from '../components/RequestSuccessModal.vue'

import M from "materialize-css";
// import $ from "jquery"; 
export default {
  name: "Navbar",
  components: {
    //   EstimatedQuote, RequestSuccess
  },
  mounted() {
    document.addEventListener("DOMContentLoaded", function() {
      var elemsSidenav = document.querySelectorAll(".sidenav");
      M.Sidenav.init(elemsSidenav)
    });
    window.onscroll = function(){scrollProgressFunction()};

    function scrollProgressFunction() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
    }
  },
  methods:{
    scrollToTop() {
        window.scrollTo(0, 0);
    }
  }
};
</script>

<style scoped src="..\assets\css\navbar.css"></style>

<style>
.modal-opened #about-home {
    height: 80vh;
}
</style>
