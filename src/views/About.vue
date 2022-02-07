<template>
  <div id="main-wrapper">
    <!--=== Home Section ===-->
    <section id="about-home" class="external-page-banners">
      <div class="row full-height">
        <div class="container full-height">
          <div class="home-title-wrapper">
            <div class="home-title-block">
              <h1 class="page-title">About Japtini Logisitcs</h1>
            </div>
            <img src="../assets/images/orange-red-icon-sqaure.svg" alt="icon" class="header-square-icon">

            <TrackShipment />
            <BookATruck />
            <div class="s-modal-component-overlay smco-track-shipment"></div>
            <div class="s-modal-component-overlay smco-book-truck"></div>
          </div>
        </div>
      </div>
    </section>
    <!--=== end of Home Section ===-->

    <!--=== Who-We-Are Section ===-->
    <section id="who-we-are" class="scrollspy">
      <div class="row">
        <div class="container">
          <div class="wwa-wrapper">
            <div class="wwa-img-side"></div>
            <div class="wwa-txt-side">
              <div class="section-title">WHO WE ARE</div>
              <p class="section-desc">
                Providing the primary solution for the optimization of logistical challenges in the supply chain, 
                and delivering the perfect product to end consumers.
              </p>
              <h2 class="section-header">We are more than a logistics company</h2>
              <p class="section-desc">
                We believe everyone should be able to enjoy ease of transporting items, without regard for location 
                boundaries, or even company status. Using reverse logistics and cutting-edge technology, with the end goal 
                of reducing the cost of goods and services by over 30%, we also created an ecosystem to search, compare 
                and book warehouse space.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--=== end of Who-We-Are Section ===-->

    <!--=== Vision-Mission Section ===-->
    <section id="vision-mission">
        <div class="row">
            <div class="container">
                <div class="vision-mission-wrapper">
                  <div class="vision-mission-block">
                      <div class="section-title">OUR VISION</div>
                      <p class="section-desc">
                          To be positioned as the primary solution for addressing logistical challenges in the supply chain 
                          while ensuring the delivery of the product to the end consumers.
                      </p>
                  </div>
                  <div class="vision-mission-block">
                      <div class="section-title">OUR MISSION</div>
                      <p class="section-desc">
                          Using tech-solution to reduce logistical inefficiencies in the supply chain while creating an 
                          ecosystem that provides the most efficient delivery of products to any part of the world.
                      </p>
                  </div>
                </div>
            </div>
        </div>
    </section>
    <!--=== end of Vision-Mission Section ===-->

    <!--=== Why-We-Do Section ===-->
    <section id="why-we-do">
      <div class="row">
        <div class="container">
          <div class="wwd-top-side">
            <div class="section-title">WHY WE DO WHAT WE DO</div>
            <p class="section-desc">
              In recent years, the demand for domestic foodstuffs by consumers has grown significantly  with an estimated
            </p>
          </div>
          <div class="wwd-bottom-side">
            <div class="money-figure-wrapper">
              <img src="../assets/images/money-figure.svg" alt="22 trillion naira" class="money-figure light-mode-item">
              <img src="../assets/images/money-figure-white.svg" alt="22 trillion naira" class="money-figure dark-mode-item">
            </div>
            <div class="wwd-quote-block flex-div">
              <div class="vertical-border"></div>
              <p class="section-desc">
                In essence, Nigerians depend on produce from local farms for their daily meal and more than 80% of Nigerians 
                prefer to buy their farm produce from a local market. As such, there is a gap in logistics, warehousing, leasing 
                and haulage services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--=== end of Why-We-Do Section ===-->

    <!--=== Miling-Machine-Image Section ===-->
    <section id="milling-machine-img-section">
      <div class="row">
        <div class="container">
          <img src="../assets/images/milling-machine.png" alt="milling machine" class="milling-machine-img">
        </div>
      </div>
    </section>
    <!--=== end of Miling-Machine-Image Section ===-->

    <!--=== Core-Values Section ===-->
    <section id="core-values">
      <div class="row">
        <div class="container">
          <div class="cv-wrapper">
            <div class="cv-img-side"></div>
            <div class="cv-txt-side">
              <h2 class="section-header">Using a wide range of digital technologies</h2>
              <p class="section-desc">
                Therefore, we provide greater links between producers and consumers, including but not limited to: delivery 
                apps; warehouse, management software; tracking systems; ERPs and route optimization algorithms. We are the 
                perfect logistics solution for agents, users and investors.
              </p>
              <div class="section-title st-2">OUR CORE VALUES</div>
              <p class="section-desc">
                We combine expertise, commitment and technology to strategically position goods for swift and effective distribution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--=== end of Core-Values Section ===-->
  </div>
</template>

<script>
import TrackShipment from '../components/TrackShipmentModal.vue'
import BookATruck from '../components/BookATruckModal.vue'

import M from 'materialize-css'
export default {
  name: 'About',
  components: {
    TrackShipment, BookATruck
  },
  mounted() {
    var elemsScrollspy = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(elemsScrollspy);
  }
}
</script>

<style src="../assets/css/about.css" scoped></style>

<style scoped>
.home-title-wrapper::before {
  background-image: url(../assets/images/about-page-bg.png);
}
</style>