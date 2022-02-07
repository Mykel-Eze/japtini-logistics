<template>
  <footer>
      <div class="row">
          <div class="container">
              <div class="footer-contents-wrapper">
                  <div class="footer-content-block footer-logo-block">
                      <router-link to="/" @click="scrollToTop()">
                          <img src="../assets/images/japtini-log-icon-2.png" alt="Japtini Logisitics" class="footer-logo">
                      </router-link>
                      <div class="footer-social-wrapper">
                          <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src="../assets/images/facebook.svg" alt="facebook" class="social-icons light-mode-item">
                            <img src="../assets/images/facebook-white.svg" alt="facebook" class="social-icons dark-mode-item">
                          </a>
                          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <img src="../assets/images/twitter.svg" alt="twitter" class="social-icons light-mode-item">
                            <img src="../assets/images/twitter-white.svg" alt="twitter" class="social-icons dark-mode-item">
                          </a>
                          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src="../assets/images/instagram.svg" alt="instagram" class="social-icons light-mode-item">
                            <img src="../assets/images/instagram-white.svg" alt="instagram" class="social-icons dark-mode-item">
                          </a> 
                          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <img src="../assets/images/linkedin.svg" alt="linkedin" class="social-icons light-mode-item">
                            <img src="../assets/images/linkedin-white.svg" alt="linkedin" class="social-icons dark-mode-item">
                          </a>
                          <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
                            <img src="../assets/images/whatsapp.svg" alt="youtube" class="social-icons light-mode-item">
                            <img src="../assets/images/whatsapp-white.svg" alt="youtube" class="social-icons dark-mode-item">
                          </a>
                      </div>
                  </div>
                  <div class="footer-content-block">
                      <h4 class="footer-sec-title">Services</h4>
                      <div class="footer-sec-content">
                          <ul class="inq-list">
                                <li>
                                    <a href="/services#warehousing-and-distribution" class="">Warehousing & Distribution </a>
                                </li>
                                <li>
                                    <a href="/services#transport-services" class="">Transport Services</a>
                                </li>
                                <li>
                                    <a href="/services#technology" class="">Technology</a>
                                </li>
                          </ul>
                      </div>
                  </div>
                  <div class="footer-content-block">
                      <h4 class="footer-sec-title">Company</h4>
                      <div class="footer-sec-content">
                          <ul class="inq-list">
                                <li>
                                    <router-link to="/about" class="" @click="scrollToTop()">About </router-link>
                                </li>
                                <li>
                                    <a href="/#faq" class="">FAQs</a>
                                </li>
                                <li>
                                    <router-link to="/contact" class="" @click="scrollToTop()">Contact</router-link>
                                </li>
                          </ul>
                      </div>
                  </div>
                  <div class="footer-content-block">
                      <h4 class="footer-sec-title">Resources</h4>
                      <div class="footer-sec-content">
                          <ul class="inq-list">
                                <li>
                                    <router-link to="/privacy" class="" @click="scrollToTop()">Privacy </router-link>
                                </li>
                                <li>
                                    <router-link to="/terms" class="" @click="scrollToTop()">Terms and Conditions</router-link>
                                </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
          <div class="footer-credit-wrapper">
              <div class="row">
                  <div class="container">
                      <div class="copyright-div">
                          <p>
                            This website uses <a href="/" target="_blank" rel="noopener noreferrer" class="pry-color">Cookies <span class="pp-font">↗</span></a> 
                            We use cookies to personalise content and ads, to provide social media 
                            features and to analyse our traffic. The content on this website does not constitute a complete description of Japtini Logistics. By using this website, you accept our 
                            <a href="/" target="_blank" rel="noopener noreferrer" class="pry-color">Terms of Use</a> and 
                            <a href="/" target="_blank" rel="noopener noreferrer" class="pry-color">Privacy Policy</a>.
                          </p>
                      </div>
                      <div class="footer-sub-wrapper flex-div">
                          <div>© 2022 Japtini Logisitics. All Rights Reserved.</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </footer>
</template>

<script>
export default {
    name: "footer-section",
    methods:{
        scrollToTop() {
            window.scrollTo(0, 0);
        }
    }
}
</script>

<style scoped src="..\assets\css\footer.css"></style>
