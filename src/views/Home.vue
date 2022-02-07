<template>
  <div id="main-wrapper">
    <!--=== Home Section ===-->
    <section id="home">
      <div class="row full-height">
        <div class="container full-height">
          <div class="home-title-wrapper">
            <div class="home-title-block">
              <h1 class="home-title">
                Using digital technology to solve logistical inefficiencies for businesses
              </h1>
              <div class="flex-div get-started-wrapper">
                <button class="pry-btn btn home-btn modal-trigger" data-target="book-a-truck">
                  <span class="rel">Get Started</span>
                </button>
                <!-- <button class="plain-txt-btn">Learn More</button> -->
              </div>
            </div>

            <div class="square-boxes-grid">
              <div class="sqaure-box transp-box"></div>
              <div class="sqaure-box orange-box"></div>
              <div class="sqaure-box orange-red-box"></div>
              <div class="sqaure-box transp-box"></div>
              <div class="sqaure-box transp-box"></div>
              <div class="sqaure-box black-box rel">
                <img src="../assets/images/arr-down.svg" alt="down arrow" class="arrow-down">
              </div>
            </div>

            <TrackShipment />
            <BookATruck />
            <div class="s-modal-component-overlay smco-track-shipment"></div>
            <div class="s-modal-component-overlay smco-book-truck"></div>
          </div>
        </div>
        <div class="home-sub-img-wrapper"></div>
      </div>
    </section>
    <!--=== end of Home Section ===-->

    <!--=== About Section ===-->
    <section id="about">
      <div class="row">
        <div class="container">
          <div class="center">
            <div class="section-title">ABOUT US</div>
            <h2 class="section-header">We are more than a logistics company</h2>
            <p class="section-desc">
              We believe everyone should be able to enjoy ease of transporting items, without regard for location 
              boundaries, or even company status. 
            </p>
            <p class="section-desc">
              Using <b>reverse logistics</b> and <b>cutting-edge technology</b>, with the end goal of reducing the cost of goods 
              and services by over 30%, we also created an ecosystem to search, compare and book warehouse space.
            </p>
          </div>
        </div>
      </div>
    </section>
    <!--=== end of About Section ===-->

    <!--=== Services Section ===-->
    <section id="services">
      <div class="row">
        <div class="container">
          <div class="services-block-wrapper">
            <div class="services-block">
              <h4 class="services-block-title">Transport Services</h4>
              <p class="services-desc">
                At Japtini Logistics, we believe that providing our customers with results based on their individual 
                expectations is fundamental.
              </p>
            </div>
            <div class="services-block">
              <h4 class="services-block-title">Warehousing and Distribution</h4>
              <p class="services-desc">
                We have the facilities, needed expertise and ample knowledge and we use all these to help you find 
                different logistics and distribution solutions with us.
              </p>
            </div>
            <div class="services-block">
              <h4 class="services-block-title">Technology</h4>
              <p class="services-desc">
                At Japtini Logistics we are continuously investing in the very latest technologies to optimise the 
                numerous services we provide. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--=== end of Services Section ===-->

    <!--=== Logistics-Routes Section ===-->
    <section id="logistics-routes">
      <div class="row">
        <div class="container">
          <div class="col s12 m6 logisitcs-routes-img">
            <div class="lorries-img-div">
              <img src="../assets/images/lorries.png" alt="lorries" class="lorries-img full-width light-mode-item">
              <img src="../assets/images/lorries-dark.png" alt="lorries" class="lorries-img full-width dark-mode-item">
            </div>
          </div>
          <div class="col s12 m6 logisitcs-routes-txt">
            <h2 class="section-header">Our Logistics Routes Include</h2>
            <ul class="custom-list">
              <li class="flex-div">
                <img src="../assets/images/tick-icon.svg" alt="tick" class="tick-icon">
                <span>24 hour Nationwide delivery</span>
              </li>
              <li class="flex-div">
                <img src="../assets/images/tick-icon.svg" alt="tick" class="tick-icon">
                <span>Overnight transportation for onward delivery</span>
              </li>
              <li class="flex-div">
                <img src="../assets/images/tick-icon.svg" alt="tick" class="tick-icon">
                <span>Full load/part load nationwide</span>
              </li>
              <li class="flex-div">
                <img src="../assets/images/tick-icon.svg" alt="tick" class="tick-icon">
                <span>Full Haulage services</span>
              </li>
              <li class="flex-div">
                <img src="../assets/images/tick-icon.svg" alt="tick" class="tick-icon">
                <span>Full scale leasing services</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <!--=== end of Logistics-Routes Section ===-->

    <!--=== Become-A-Partner Section ===-->
    <section id="become-a-partner">
      <div class="row">
        <div class="container">
          <div class="center">
            <div class="section-title">WHY PARTNER WITH US</div>
            <h2 class="section-header"> Benefiting from the enormous appeal of logistics</h2>
            <p class="section-desc">
              We believe everyone should be able to enjoy ease of transporting items, without regard for location 
              boundaries, or even company status. 
            </p>
            <div class="partner-btn-wrapper">
              <router-link to="/partner" @click="scrollToTop()">
                <button class="btn pry-btn partner-btn">
                  <span class="rel">Become a Partner</span>
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--=== end of Become-A-Partner Section ===-->

    <!--=== Customer-Reviews Section ===-->
    <section id="customer-reviews" hidden>
      <div class="row">
        <div class="container">
          <div class="">
            <h2 class="section-header">What Customer Say About Us.</h2>
          </div>
          <ul class="collapsible">
            <li class="active orange-li-bg">
              <div class="collapsible-header">
                <small class="testimony-num">01</small>
                Customer <br> Satisfaction
              </div>
              <div class="collapsible-body">
                <div class="testimony-details">
                  <div class="testimony-txt">
                    Navigating the complex world of manufacturing can be cumbersome and overwhelming. Let’s save you time, 
                    money, and stress by easing that burden 
                  </div>
                  <div class="testifier-details flex-div">
                    <div class="testifier-avatar">
                      <img src="../assets/images/customer-1.png" alt="customer" class="customer-img">
                    </div>
                    <div class="testifier-name-n-role">
                      <div class="testifier-name">Adamu Garba</div>
                      <span class="testifier-role">Farmer/Entrepreneur</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="orange-red-li-bg">
              <div class="collapsible-header">
                <small class="testimony-num">02</small>
                Realtime <br> Update
              </div>
              <div class="collapsible-body">
                <div class="testimony-details">
                  <div class="testimony-txt">
                    Navigating the complex world of manufacturing can be cumbersome and overwhelming. Let’s save you 
                    time, money, and stress by easing that burden 
                  </div>
                  <div class="testifier-details flex-div">
                    <div class="testifier-avatar">
                      <img src="../assets/images/customer-2.png" alt="customer" class="customer-img">
                    </div>
                    <div class="testifier-name-n-role">
                      <div class="testifier-name">Vivian Mensah</div>
                      <span class="testifier-role">Marketer</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="black-li-bg">
              <div class="collapsible-header">
                <small class="testimony-num">03</small>
                Good <br> Management
              </div>
              <div class="collapsible-body">
                <div class="testimony-details">
                  <div class="testimony-txt">
                    Navigating the complex world of manufacturing can be cumbersome and overwhelming. 
                    Let’s save you time, money, and stress by easing that burden 
                  </div>
                  <div class="testifier-details flex-div">
                    <div class="testifier-avatar">
                      <img src="../assets/images/customer-3.png" alt="customer" class="customer-img">
                    </div>
                    <div class="testifier-name-n-role">
                      <div class="testifier-name">Abel Wadomi</div>
                      <span class="testifier-role">Truck Driver</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <!--=== end of Customer-Reviews Section ===-->

     <!--=== FAQ Section ===-->
    <section id="faq">
      <div class="row">
        <div class="container">
          <div class="">
            <h2 class="section-header center">Got Questions? <br> We have answers.</h2>
          </div>
          <ul class="collapsible">
            <li class="active">
              <div class="collapsible-header">
                <div class="flex-div faq-question">
                  <span>Why should I use Japtini Logistics?</span>
                  <div class="light-mode-item">
                    <img src="../assets/images/accordion-open.svg" alt="open-icon" class="accordion-open open-close-icon">
                    <img src="../assets/images/accordion-close.svg" alt="close-icon" class="accordion-close open-close-icon">
                  </div>
                  <div class="dark-mode-item">
                    <img src="../assets/images/accordion-open-white.svg" alt="open-icon" class="accordion-open open-close-icon">
                    <img src="../assets/images/accordion-close-white.svg" alt="close-icon" class="accordion-close open-close-icon">
                  </div>
                </div>
              </div>
              <div class="collapsible-body">
                <p class="faq-answer">
                  <b>Japtini Logistics is suitable for anyone who:</b>
                  Wants enjoy ease of transporting items, without regard for location boundaries, or even social status. 
                  Who is need of a haulage service that is swift and effective.  Who regularly needs warehouses for safe storage space.
                </p>
              </div>
            </li>
            <li class="">
              <div class="collapsible-header">
                <div class="flex-div faq-question">
                  <span>Can you track your agents or riders?</span>
                  <div class="light-mode-item">
                    <img src="../assets/images/accordion-open.svg" alt="open-icon" class="accordion-open open-close-icon">
                    <img src="../assets/images/accordion-close.svg" alt="close-icon" class="accordion-close open-close-icon">
                  </div>
                  <div class="dark-mode-item">
                    <img src="../assets/images/accordion-open-white.svg" alt="open-icon" class="accordion-open open-close-icon">
                    <img src="../assets/images/accordion-close-white.svg" alt="close-icon" class="accordion-close open-close-icon">
                  </div>
                </div>
              </div>
              <div class="collapsible-body">
                <p class="faq-answer">
                  Yes, we can and we do. With our warehouse management software, we can track both agents and the quantity 
                  of products in their possession. We are also able to strategically position goods for optimal distribution. 
                  Products are tracked every step of the way. The driver also has a delivery app, pickup app, scheduling 
                  software, Delivery Tracking, Route-Optimization, proof of delivery, and Analytics. If the drop-off point is 
                  updated, the driver is notified by SMS.
                </p>
              </div>
            </li>
            <li class="">
              <div class="collapsible-header">
                <div class="flex-div faq-question">
                  <span>Who are your main customers for leasing vehicles?</span>
                  <div class="light-mode-item">
                    <img src="../assets/images/accordion-open.svg" alt="open-icon" class="accordion-open open-close-icon">
                    <img src="../assets/images/accordion-close.svg" alt="close-icon" class="accordion-close open-close-icon">
                  </div>
                  <div class="dark-mode-item">
                    <img src="../assets/images/accordion-open-white.svg" alt="open-icon" class="accordion-open open-close-icon">
                    <img src="../assets/images/accordion-close-white.svg" alt="close-icon" class="accordion-close open-close-icon">
                  </div>
                </div>
              </div>
              <div class="collapsible-body">
                <p class="faq-answer">
                  Japtini Logistics provides interested firms, ventures and individuals access to lease vehicles and haulage 
                  trucks for an agreed market rate and time period.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <!--=== end of FAQ Section ===-->

    <!--=== Contact-Support Section ===-->
    <section id="contact-support">
      <div class="row">
        <div class="container">
          <div class="center">
            <div class="section-title">CAN’T FIND ANSWER(S)? </div>
            <h2 class="section-header"> We are always here for you.</h2>
            <form action="#" id="contact-support-form">
              <div class="flex-div input-field">
                <input type="email" id="email" name="email" placeholder="Your mail…" />
                <button class="submit-btn btn pry-btn">
                  <span class="rel">Contact Support</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <!--=== end of Contact-Support Section ===-->

  </div>
</template>

<script>
import TrackShipment from '../components/TrackShipmentModal.vue'
import BookATruck from '../components/BookATruckModal.vue'

import M from 'materialize-css'
export default {
  name: "Home",
  components: {
    TrackShipment, BookATruck
  },
  mounted() {
    var elemsCollapsible = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elemsCollapsible)
  },
  methods:{
    scrollToTop() {
        window.scrollTo(0, 0);
    }
  }
}
</script>

<style src="../assets/css/home.css"></style>