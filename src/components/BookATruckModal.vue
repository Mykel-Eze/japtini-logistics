<template>
    <div id="s-modal-component" class="batm-smc">
        <div id="book-a-truck" class="s-modal">
            <div class="s-modal-content">
                <!-- <div class="close-btn-wrapper right-align">
                    <img src="../assets/images/modal-close.svg" alt="modal-close" class="close-bat-smc">
                </div> -->
                <div class="close-btn-wrapper flex-div">
                    <div class="modal-back-wrapper">
                        <img src="../assets/images/back-arr.svg" alt="back" class="back-arrow">
                        <span>Back</span>
                    </div>
                    <img src="../assets/images/modal-close.svg" alt="modal-close" class="close-bat-smc">
                </div>
                <div id="mc-w-1" class="mc-wrapper mc-wrapper-middle">
                    <div class="modal-title-wrapper">
                        <h3 class="modal-title">Book a Truck</h3>
                        <span class="modal-title-desc">Fill the detail below to get your estimate</span>
                    </div>
                    <form action="#" id="modal-form">
                        <div class="rel modal-double-fields">
                            <div class="input-field double-field-wrapper" id="dfw-1">
                                <div class="rel bb" id="dfw-state-1">
                                    <select name="state_1" id="state_1">
                                        <option value="" disabled selected>Select pick up point (State)</option>
                                        <option value="Lagos">Lagos</option>
                                        <option value="Imo">Imo</option>
                                        <option value="Abuja">Abuja</option>
                                        <option value="Ogun">Ogun</option>
                                        <option value="Bayelsa">Bayelsa</option>
                                    </select>
                                    <img src="../assets/images/caret.svg" alt="caret" class="caret-icon">
                                    <span class="field-node active-node"></span>
                                </div>
                                <div class="rel" id="dfw-area-1" hidden>
                                    <select name="area_1" id="area_1">
                                        <option value="" disabled selected>Pick up location (Area)</option>
                                        <option value="Yaba">Yaba</option>
                                        <option value="Ikeja">Ikeja</option>
                                        <option value="Ajegunle">Ajegunle</option>
                                        <option value="Victoria Island">Victoria Island</option>
                                        <option value="Lekki">Bayelsa</option>
                                    </select>
                                    <img src="../assets/images/caret.svg" alt="caret" class="caret-icon">
                                    <span class="field-node"></span>
                                </div>
                            </div>
                            <div class="input-field double-field-wrapper" id="dfw-2">
                                <div class="rel bb" id="dfw-state-2">
                                    <select name="state_2" id="state_2">
                                        <option value="" disabled selected>Select drop off point (State)</option>
                                        <option value="Lagos">Lagos</option>
                                        <option value="Imo">Imo</option>
                                        <option value="Abuja">Abuja</option>
                                        <option value="Ogun">Ogun</option>
                                        <option value="Bayelsa">Bayelsa</option>
                                    </select>
                                    <img src="../assets/images/caret.svg" alt="caret" class="caret-icon">
                                    <span class="field-node"></span>
                                </div>
                                <div class="rel" id="dfw-area-2" hidden>
                                    <select name="area_2" id="area_2">
                                        <option value="" disabled selected>Drop off location(Area)</option>
                                        <option value="Yaba">Yaba</option>
                                        <option value="Ikeja">Ikeja</option>
                                        <option value="Ajegunle">Ajegunle</option>
                                        <option value="Victoria Island">Victoria Island</option>
                                        <option value="Lekki">Bayelsa</option>
                                    </select>
                                    <img src="../assets/images/caret.svg" alt="caret" class="caret-icon">
                                    <span class="field-node last-node"></span>
                                </div>
                            </div>

                            <div class="node-line"></div>
                        </div>
                        <div class="phone-n-request-wrapper">
                            <div class="input-field flex-div phone-field">
                                <div class="rel">
                                    <select name="phone-code" id="phone-code">
                                        <option value="+234">+234</option>
                                        <option value="+1">+1</option>
                                        <option value="+233">+233</option>
                                    </select>
                                    <img src="../assets/images/caret.svg" alt="caret" class="caret-icon">
                                </div>
                                <input type="tel" id="phone_number" name="phone_number" placeholder="Phone number" />
                            </div>
                            <div class="input-field submit-modal-btn-wrapper">
                                <button class="submit-modal-btn btn sec-btn disabled-btn">
                                    <span class="rel">Request quote</span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                <div id="mc-w-2" class="mc-wrapper mc-wrapper-middle" hidden>
                    <div class="modal-title-wrapper center">
                        <h3 class="modal-title">Estimated quote</h3>
                        <span class="modal-title-desc">Yaba, Lagos — Wuse II, Abuja</span>
                    </div>
                    <div id="eq-block">
                        <div class="eq-range">₦500,000 - ₦550,000 </div>
                        <div class="eq-btn-wrapper flex-div">
                            <button class="signup-btn btn pry-btn">
                                <span class="rel">Sign Up</span>
                            </button>
                            <button class="request-call-btn btn sec-btn">
                                <span class="rel">Request a Call</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div id="mc-w-3" class="mc-wrapper mc-wrapper-middle" hidden>
                    <div class="modal-title-wrapper center">
                        <img src="../assets/images/success-modal-img.svg" alt="success" class="success-icon">
                        <h3 class="modal-title">We got your request</h3>
                    </div>
                    <p class="modal-desc-txt center">
                        One of our agents will reach out to you soon, you also proceed with your order by 
                        clicking the button below
                    </p>
                   <div class="s-u-btn-wrapper center">
                        <button class="signup-btn btn pry-btn modal-close">
                            <span class="rel">Sign Up</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import M from 'materialize-css'
import $ from 'jquery'
export default {
    name: "BookATruck",
    mounted() {
        var elemsSelect = document.querySelectorAll('select');
        M.FormSelect.init(elemsSelect);

        // var elemsModal = document.querySelectorAll('.modal');
        // M.Modal.init(elemsModal, {
        //     onOpenStart: ()=> {
        //         $('html').addClass("modal-opened");
        //     },
        //     onCloseStart: ()=> {
        //         $('html').removeClass("modal-opened");
        //     },
        // });

        $(".batm-trigger").click(function(){
            $("html").addClass("smc-opened");
            $("#s-modal-component.batm-smc, .smco-book-truck").addClass("opened-smc");
            window.scrollTo(0, 0);
        });
        $(".close-bat-smc").click(function(){
            $("html").removeClass("smc-opened");
            $("#s-modal-component.batm-smc, .smco-book-truck").removeClass("opened-smc");
        })

        $("form#modal-form input").on("change", function(){
            if($(this).val() != ""){
                $(".submit-modal-btn").removeClass("sec-btn");
                $(".submit-modal-btn").addClass("pry-btn");
            } else {
                $(".submit-modal-btn").addClass("sec-btn");
                $(".submit-modal-btn").removeClass("pry-btn");
            }
        });

        $("#dfw-state-1 select").on("change", function(){
            $("#dfw-area-1").slideDown();
            $("#dfw-state-1").removeClass("bb")
            $(".node-line").addClass("longer-node-line");
        });
        $("#dfw-state-2 select").on("change", function(){
            $("#dfw-area-2").slideDown();
            $("#dfw-state-2").removeClass("bb");
            $(".node-line").addClass("longer-node-line");
        });

        $(".submit-modal-btn").click(function(){
            event.preventDefault();
            $("#mc-w-1").slideUp();
            $("#mc-w-2").slideDown();
            $(".modal-back-wrapper").attr("id", "back-mc-1");
        });
        $(".request-call-btn").click(function(){
            $("#mc-w-2").slideUp();
            $("#mc-w-3").slideDown();
            $(".modal-back-wrapper").attr("id", "");
        });
        $(".close-btn-wrapper").on("click", "#back-mc-1" , function() {
            $("#mc-w-2").slideUp();
            $("#mc-w-1").slideDown();
            $(".modal-back-wrapper").attr("id", "");
        });
    }
}
</script>

<style src="../assets/css/modal.css" scoped></style>

<style>
#modal-form .double-field-wrapper .select-wrapper input {
    margin-bottom: 0;
    height: 57px;
    border-bottom: 1px solid #777777;
    padding: 0 20px;
    width: calc(100% - 40PX);
}
#modal-form .double-field-wrapper .rel:last-child input, #modal-form .input-field.flex-div.phone-field input {
    border-bottom: none;
}
#modal-form .select-wrapper .caret {
    display: none;
}
#modal-form .input-field.flex-div.phone-field input {
    padding: 0 20px;
    box-shadow: none;
    margin-bottom: 0;
    height: 57px;
    padding-left: 0;
}
#modal-form .input-field.flex-div.phone-field .select-wrapper {
    width: 105px;
}
#modal-form .input-field.flex-div.phone-field .select-wrapper input {
    padding-right: 0;
    padding-left: 20px;
}
li.disabled.selected > span {
    color: darkgray !important;
}

div#dfw-state-1.bb input, div#dfw-state-2.bb input {
    border-bottom: none !important;
}
</style>