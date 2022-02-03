<template>
  <div id="main-wrapper">
    <!--=== Home Section ===-->
    <section id="about-home" class="external-page-banners">
      <div class="row full-height">
        <div class="container full-height">
          <div class="home-title-wrapper">
            <div class="home-title-block">
              <h1 class="page-title">Japtini Partners</h1>
            </div>
            <img src="../assets/images/orange-icon-square.svg" alt="icon" class="header-square-icon">
          </div>
        </div>
      </div>
    </section>
    <!--=== end of Home Section ===-->

    <!--=== Intro-Text Section ===-->
    <section id="intro-text">
        <div class="row">
            <div class="container">
                <div class="col s12 pad0">
                    <p class="section-desc">
                        Japtini Logistics works with companies, governments, nonprofits and other organizations to address 
                        logistical challenges on a worldwide scale. Our partners contribute more than money. Their ideas, 
                        volunteer power, in-kind support and more are helping build stronger businesses. Japtini Logistics 
                        Partnerships enable diverse companies to benefit from the enormous appeal of logistics and also 
                        raise awareness and revenue for logistics programs.  Are you interested in supporting Japtini 
                        Logistics? Or would you like to submit a proposal for a large-scale logistics partnership on a 
                        national level? Email us 
                        <a href="mailto:partners@Japtinilogistics.com" class="sec-color">partners@Japtinilogistics.com</a> 
                        or <a href="#partnership-form-section" class="sec-color">fill these form</a>.
                    </p>
                </div>
            </div>
        </div>
    </section>
    <!--=== end of Intro-Text Section ===-->

    <!--=== Intro-Block-Text Section ===-->
    <section id="intro-block-text">
        <div class="row">
            <div class="container">
                <div class="intro-txt-block">
                    <div class="section-title">OUR VISION FOR PARTNERS</div>
                    <p class="section-desc">
                        With our database of over 500k asset owners, we connect them to daily businesses in need of haulage 
                        services, and help them generate N5M weekly in revenue and expansion of their fleet through asset 
                        financing. 
                    </p>
                </div>
            </div>
        </div>
    </section>
    <!--=== end of Intro-Block-Text Section ===-->

    <!--=== Vehicle-Owners-Partners Section ===-->
    <section id="vehicle-owners-partners">
        <div class="row">
            <div class="container">
                <div class="col s12 pad0">
                    <div class="col s12 m8 l6 img-side pad0-xs">
                        <img src="../assets/images/truck-driver.png" alt="truck-driver" class="truck-driver-img">
                    </div>
                    <div class="col s12 l6 txt-side pad0-xs">
                        <h2 class="section-header">Large and Medium Vehicle Owners Partners</h2>
                        <p class="section-desc">
                            These customer bases are the bedrock of the business, they are  people in need of daily 
                            haulage services to grow and expand their fleet. Japtini logistics will solve this problem 
                            by onboarding our partners and providing them with haulage businesses, and also grow 
                            their fleet by  providing asset financing.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--=== end of Vehicle-Owners-Partners Section ===-->

    <!--=== Partnership-Form Section ===-->
    <section id="partnership-form-section" class="scrollspy">
        <div class="row">
            <div class="container">
                <div class="section-header-wrapper center">
                    <h2 class="section-header">Interested in parternership Japtini Logistics?</h2>
                    <span class="section-header-desc">Fill out the contact form and we will be sure to get back to you.</span>
                </div>

                <form action="#" id="form-block" class="gray-bg-form">
                    <div class="input-field">
                        <input type="text" name="name" id="name" placeholder="Full Name" required />
                    </div>
                    <div class="input-field">
                        <input type="text" name="company_name" id="company_name" placeholder="Company Name (Optional)" />
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
                        <input type="email" name="email" id="email" placeholder="Email Address" required />
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
                        <div class="submit-form-btn btn pry-btn">Become a Partner</div>
                    </div>
                </form>
            </div>
        </div>
    </section>
    <!--=== end of Partnership-Form Section ===-->
  </div>
</template>

<script>
import M from 'materialize-css'
export default {
  name: 'Partner',
  mounted() {
    var elemsSelect = document.querySelector('select');
    M.FormSelect.init(elemsSelect);

    var elemsScrollspy = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(elemsScrollspy);
  }
}
</script>

<style src="../assets/css/about.css" scoped></style>
<style src="../assets/css/partner.css" scoped></style>

<style scoped>
.home-title-wrapper::before {
  background-image: url(../assets/images/partner-page-bg.png);
}
</style>

<style>
form#form-block input {
    background: #FFFFFF;
    border: 1px solid rgba(119, 119, 119, 0.2);
    box-sizing: border-box;
    border-radius: 10px;
    height: 57px;
    margin: 0;
    padding: 0 15px;
    box-shadow: none;
}
.dropdown-content li>a, .dropdown-content li>span {
    color: var(--pry-color) !important;
}
</style>