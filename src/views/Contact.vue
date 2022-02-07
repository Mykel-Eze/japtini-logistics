<template>
  <div id="main-wrapper">
    <!--=== Home Section ===-->
    <section id="about-home" class="external-page-banners">
      <div class="row full-height">
        <div class="container full-height">
          <div class="home-title-wrapper">
            <div class="home-title-block">
              <h1 class="page-title">Contact US</h1>
            </div>
            <img src="../assets/images/black-icon-square.svg" alt="icon" class="header-square-icon">

            <TrackShipment />
            <BookATruck />
            <div class="s-modal-component-overlay smco-track-shipment"></div>
            <div class="s-modal-component-overlay smco-book-truck"></div>
          </div>
        </div>
      </div>
    </section>
    <!--=== end of Home Section ===-->

    <!--=== Contact Section ===-->
    <section id="contact-section">
        <div class="row">
            <div class="container">
                <div class="contact-sides-wrapper">
                    <div class="contact-details-side">
                        <h2 class="section-header">We are always here for you.</h2>
                        <p class="section-desc">
                            Always ready to provide optimized Safe and reliable transportation solutions to your business
                        </p>
                        <div class="general-contact">
                            <h4 class="gc-title">General Contact</h4>
                            <div class="gc-block-wrapper">
                                <div class="gc-block">
                                    <ul class="gc-list">
                                        <li>
                                            <b>Japtini Logistics</b>
                                        </li>
                                        <li>
                                            <span>Tel: <a href="tel:09023443323" class="gc-link">0902 344 3323</a></span>
                                        </li>
                                        <li>
                                            <span>Whatsapp: <a href="https://api.whatsapp.com/send?phone=+23481423221123" class="gc-link">08142 322 1123</a></span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="gc-block gc-2">
                                    <div class="flex-div">
                                        <img src="../assets/images/envelope.svg" alt="mail" class="gc-icon">
                                        <a href="mailto:enquiry@japtinilogistics.com" class="gc-link">enquiry@JaptiniLogistics.com</a>
                                    </div>
                                    <div class="flex-div">
                                        <img src="../assets/images/clock.svg" alt="time" class="gc-icon">
                                        <span class="">8AM-6PM Everyday</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="contact-form-side">
                        <form action="#" id="form-block" class="gray-bg-form">
                            <div class="input-field grid-field-2">
                                <input type="text" name="first_name" id="first_name" placeholder="First Name" required />
                                <input type="text" name="last_name" id="last_name" placeholder="Last Name" required />
                            </div>
                            <div class="input-field">
                                <input type="text" name="company_name" id="company_name" placeholder="Company Name (Optional)" />
                            </div>
                            <div class="input-field">
                                <input type="email" name="email" id="email" placeholder="Email Address" required />
                            </div>
                            <div class="input-field">
                                <div class="rel">
                                    <select name="country_code" id="country_code">
                                        <option value="Nigeria (+234)">Nigeria (+234)</option>
                                        <option value="Ghana (+233)">Ghana (+233)</option>
                                        <option value="USA (+1)">USA (+1)</option>
                                    </select>
                                    <img src="../assets/images/caret.svg" alt="caret" class="caret-icon">
                                </div>
                                <input type="tel" name="phone" id="phone" placeholder="Phone number" required />
                            </div>
                            <div class="input-field">
                                <textarea id="message" class="materialize-textarea" placeholder="Message" required></textarea>
                            </div>
                            <div class="input-field">
                                <label class="rel" id="checkbox-wrapper">
                                    <input type="checkbox" class="filled-in" checked="checked" id="agree-to-terms" />
                                    <span>
                                        By checking the box and clicking the button below, you are agreeing to our 
                                        <router-link to="#" class="black-txt">privacy policy</router-link> and 
                                        <router-link to="#" class="black-txt">terms and condition</router-link>.
                                    </span>
                                </label>
                            </div>
                            <div class="submit-btn-wrapper">
                                <button class="submit-form-btn btn pry-btn">
                                    <span class="rel">Send Message</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--=== end of Contact Section ===-->
  </div>
</template>

<script>
import M from 'materialize-css'

import TrackShipment from '../components/TrackShipmentModal.vue'
import BookATruck from '../components/BookATruckModal.vue'
export default {
  name: 'Contact',
  components: {
    TrackShipment, BookATruck
  },
  mounted() {
      var elemsSelect = document.querySelectorAll('select');
        M.FormSelect.init(elemsSelect);
  }
}
</script>

<style src="../assets/css/about.css" scoped></style>
<style src="../assets/css/partner.css" scoped></style>
<style src="../assets/css/contact.css" scoped></style>

<style scoped>
.home-title-wrapper::before {
  background-image: url(../assets/images/contact-page-bg.png);
}
</style>