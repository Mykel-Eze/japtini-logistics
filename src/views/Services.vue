<template>
  <div id="main-wrapper">
    <!--=== Home Section ===-->
    <section id="about-home" class="external-page-banners">
      <div class="row full-height">
        <div class="container full-height">
          <div class="home-title-wrapper">
            <div class="home-title-block">
              <h1 class="page-title">Our Services</h1>
            </div>
            <img src="../assets/images/orange-red-icon-sqaure.svg" alt="icon" class="header-square-icon">
          </div>
        </div>
      </div>
    </section>
    <!--=== end of Home Section ===-->

    <!--=== Transport-Services Section ===-->
    <section id="transport-services" class="gray-bg">
        <div class="row">
            <div class="container">
                <div class="col s12 pad0">
                    <div class="col s12 m8 l6 img-side pad0-xs">
                        <img src="../assets/images/trailer.png" alt="trailer" class="trailer-img">
                    </div>
                    <div class="col s12 l6 txt-side pad0-xs">
                        <h2 class="section-header">Transport <br> Services</h2>
                        <p class="section-desc">
                            At Japtini Logistics, we believe that providing our customers with results based on their individual 
                            expectations is fundamental. We are able to guarantee our clients a smooth and viable solution, which 
                            fully assesses and tackles all aspects and different moments of the shipment process. Shipping routes 
                            can be both interstate or national depending on the specifications of your package.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--=== end of Transport-Services Section ===-->

    <!--=== Warehousing-And-Distribution Section ===-->
    <section id="warehousing-and-distribution" class="gray-bg">
        <div class="row">
            <div class="container">
                <div class="col s12 pad0">
                    <div class="col s12 l6 txt-side pad0-xs">
                        <h2 class="section-header">Warehousing <br> and Distribution</h2>
                        <p class="section-desc">
                            We have the facilities, needed expertise and ample knowledge and we use all these to help you find 
                            different logistics and distribution solutions with us. Whether you need short-term regional storage 
                            services or long-term warehousing - we are experienced in providing functional and productive 
                            outcomes in strategic ways to add value to your business.
                        </p>
                    </div>
                    <div class="col s12 m8 l6 img-side right-align pad0-xs">
                        <img src="../assets/images/fork-lift-2.png" alt="fork-lift" class="forklift-img">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--=== end of Warehousing-And-Distribution Section ===-->

    <!--=== Technology Section ===-->
    <section id="technology" class="gray-bg">
        <div class="row">
            <div class="container">
                <div class="col s12 pad0">
                    <div class="col s12 m8 l6 img-side pad0-xs">
                        <img src="../assets/images/dashboard-screenshot-2.png" alt="dashboard" class="dashboard-img">
                    </div>
                    <div class="col s12 l6 txt-side pad0-xs">
                        <h2 class="section-header">Technology</h2>
                        <p class="section-desc">
                            At Japtini Logistics we are continuously investing in the very latest technologies to optimise the 
                            numerous services we provide. Our secure mapping system offers 24/7 online-access showing real time 
                            location of vehicles and vehicle activity.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--=== end of Technology Section ===-->

    <!--=== Request-Quote Section ===-->
    <section id="request-quote">
        <div class="row">
            <div class="container">
                <div class="rq-wrapper center">
                    <div class="section-title">OPTIMIZED SAFE AND RELIABLE</div>
                    <h2 class="section-header">Request an <br> estimated quote</h2>
                    <div class="partner-btn-wrapper">
                        <button class="btn pry-btn partner-btn">
                            <span class="rel">Book Truck</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--=== end of Request-Quote Section ===-->
  </div>
</template>

<script>
export default {
  name: 'Services',
  mounted() {}
}
</script>

<style src="../assets/css/about.css" scoped></style>

<style scoped>
.home-title-wrapper::before {
  background-image: url(../assets/images/services-page-bg.png);
}

img.dashboard-img {
    width: 90%;
}
section#request-quote {
    margin: 40px 0;
}
section#request-quote .section-title {
    color: #777777;
}

@media(max-width: 600px) {
    section#warehousing-and-distribution h2.section-header {
        margin-top: 0;
    }
    section#warehousing-and-distribution .img-side {
        margin-top: 20px;
    }
}
</style>