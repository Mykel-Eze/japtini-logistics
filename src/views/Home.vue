<template>
  <div id="main-wrapper">
    <!--=== Home Section ===-->
    <section id="home">
      <div class="row full-height">
        <div class="container full-height">
          <div class="home-title-wrapper">
            <div class="home-title-block">
              <h1 class="home-title">
                More than logistics...
              </h1>
              <div class="home-title-desc">
                Japtini Logistics offers the best warehousing and transportation services using digitized
                inventory management tools to carry out seamlessly automated deliveries across haulage
                channels within Africa.
              </div>
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
          <div class="center col s12 l10 offset-l1 pad0">
            <!-- <div class="section-title">ABOUT US</div> -->
            <h2 class="section-header">About Japtini logistics</h2>
            <p class="section-desc">
              We believe everyone should enjoy the ease of transporting goods or services, without regard to location boundaries
              or company status. Using reverse logistics and cutting-edge technology, we have developed digital platforms that
              match supply with demand, be it haulage, warehousing, etc. Thereby reducing the cost of goods and services by over 30%.
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
          <div class="center col s12 l10 offset-l1 pad0">
            <h2 class="section-header">The gap we fill</h2>
            <p class="section-desc">
              With a significant number of the African population disconnected from chain supply, bridging this gap not just
              in Nigeria but across Africa, is a key focus for Japtini logistics. 
            </p>
          </div>
          <div class="line-divider-wrapper col s12 m8 offset-m2 pad0">
            <hr class="fancy-line" />
            <div class="section-title">OUR OFFERINGS</div>
            <hr class="fancy-line" />
          </div>
          <div class="services-block-wrapper col s12 pad0">
            <div class="services-block">
              <h4 class="services-block-title">Transportation </h4>
              <p class="services-desc">
                Logistics and Transportation are key to economic growth and directly impact the development of other
                sectors. It is for this reason that Japtini Logistics, leveraging the opportunities provided by technology,
                has developed an innovative system for meeting the logistics and distribution needs of its customers.
              </p>
            </div>
            <div class="services-block">
              <h4 class="services-block-title">Warehousing and Distribution</h4>
              <p class="services-desc">
                Our facilities, expertise and ample knowledge of the industry aid our decision-making on the best way
                to serve your storage and distribution needs. We have facilities, expertise, and requisite knowledge to
                provide solutions to any logistics and distribution challenges.
              </p>
            </div>
            <div class="services-block">
              <h4 class="services-block-title">Technology</h4>
              <p class="services-desc">
                At Japtini Logistics we are continuously investing in modern technology to optimize the numerous services
                we provide. Using a wide range of digital technologies for haulage and delivery.
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
            <img src="../assets/images/dashboard-screenshot-3.png" alt="dashbaord-screenshot" class="dashboard-screenshot-img">
          </div>
          <div class="col s12 m6 logisitcs-routes-txt">
            <div class="section-title">OUR PROCESS</div>
            <h2 class="section-header">Satisfying and efficient</h2>
            <p class="section-desc">
              With a duty to satisfy our customers, we offer optimized storage system, providing efficient warehousing
              and transportation services with the use of digitized inventory management tools, reverse logistics, and
              cutting-edge technology for route mapping and optimized delivery.
            </p>
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
    <section id="customer-reviews">
      <div class="row">
        <div class="container">
          <div class="">
            <h2 class="section-header">What Our Customers Say About Us.</h2>
          </div>
          <ul class="s-collapsible">
            <li class="active-collapsible orange-li-bg">
              <div class="s-collapsible-header">
                <small class="testimony-num">01</small>
                Customer <br> Satisfaction
              </div>
              <div class="s-collapsible-body">
                <div class="testimony-details">
                  <div class="testimony-txt">
                    Use One thing Japtini Logistics has added to my business is credibility. My customers are more loyal 
                    because they trust that packages will get to them in good time. Nothing beats this!
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
              <div class="s-collapsible-header">
                <small class="testimony-num">02</small>
                Realtime <br> Update
              </div>
              <div class="s-collapsible-body">
                <div class="testimony-details">
                  <div class="testimony-txt">
                    I needed a storage warehousing facility with ample floor space and flexible operations. 
                    I found all of this and more with Japtini Logistics.
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
              <div class="s-collapsible-header">
                <small class="testimony-num">03</small>
                Good <br> Management
              </div>
              <div class="s-collapsible-body">
                <div class="testimony-details">
                  <div class="testimony-txt">
                    Fast, low-cost delivery and the full availability of options is something I knew could scale my business 
                    significantly. Japtini Logistics even offers a haulage service that is swift and effective.
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
import $ from 'jquery'
export default {
  name: "Home",
  components: {
    TrackShipment, BookATruck
  },
  mounted() {
    var elemsCollapsible = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elemsCollapsible);

    $(".s-collapsible-header").hover(function(){
      $(".s-collapsible-header").parent().removeClass("active-collapsible");
      $(this).parent().addClass("active-collapsible");
    });

    if (window.matchMedia("(min-width: 993px)").matches) {
      var active_height = $(".active-collapsible .s-collapsible-header").height();
      $(".s-collapsible-body:not('.active-collapsible') .testimony-details").height(active_height + 20);
    }
  },
  methods:{
    scrollToTop() {
        window.scrollTo(0, 0);
    }
  }
}
</script>

<style src="../assets/css/home.css"></style>