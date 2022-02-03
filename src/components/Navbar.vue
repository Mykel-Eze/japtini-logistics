<template>
  <div>
    <nav class="main-nav">
        <div class="container">
            <div class="nav-wrapper">
                <router-link to="/" class="brand-logo" @click="scrollToTop()">
                    <img src="../assets/images/japtini-log-logo.png" alt="Japtini" class="logo">
                </router-link>

                <ul class="dn-mobile ul-nav" id="nav-mobile-2">
                    <li>
                        <a href="#" data-target="slide-out" class="sidenav-trigger sec-color right">
                            <img src="../assets/images/menu.svg" alt="menu" />
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
                        <router-link to="/blog" class="" @click="scrollToTop()">
                            <span>Blog</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/contact" class="" @click="scrollToTop()">
                            <span>Contact</span>
                        </router-link>
                    </li>
                    <li class="contact-us-li">
                        <button class="sec-btn btn nav-btn modal-trigger" data-target="track-shipment" @click="scrollToTop()">
                            <span>Track Package</span>
                        </button>
                        <button class="pry-btn btn nav-btn modal-trigger" data-target="book-a-truck" @click="scrollToTop()">
                            <span>Book a Truck</span>
                        </button>
                    </li>
                </ul>
              </div>
        </div>
    </nav>

    <ul id="slide-out" class="sidenav">
        <div class="sidenav-logo">
            <router-link to="/" class="sidenav-close" @click="scrollToTop()">
                <img src="../assets/images/japtini-log-logo.png" alt="Japtini" class="logo">
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
        <li>
            <router-link to="/blog" class="sidenav-close">
                <span>Blog</span>
            </router-link>
        </li>
        <li>
            <router-link to="/contact" class="sidenav-close">
                <span>Contact</span>
            </router-link>
        </li>
        <li class="contact-us-li">
            <button class="sec-btn btn nav-btn sidenav-close modal-trigger" data-target="track-shipment" @click="scrollToTop()">
                <span>Track Package</span>
            </button>
            <button class="pry-btn btn nav-btn sidenav-close modal-trigger" data-target="book-a-truck" @click="scrollToTop()">
                <span>Book a Truck</span>
            </button>
        </li>
    </ul>
    <BookATruck />
    <TrackShipment />
    <EstimatedQuote />
  </div>
</template>

<script>
import BookATruck from '../components/BookATruckModal.vue'
import TrackShipment from '../components/TrackShipmentModal.vue'
import EstimatedQuote from '../components/EstimatedQuoteModal.vue'

import M from "materialize-css";
// import $ from "jquery"; 
export default {
  name: "Navbar",
  components: {
      BookATruck, TrackShipment, EstimatedQuote
  },
  mounted() {
    document.addEventListener("DOMContentLoaded", function() {
      var elemsSidenav = document.querySelectorAll(".sidenav");
      M.Sidenav.init(elemsSidenav)
    });
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
