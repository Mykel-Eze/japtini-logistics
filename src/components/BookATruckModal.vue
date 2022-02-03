<template>
    <div id="modal-component">
        <div id="book-a-truck" class="modal">
            <div class="modal-content">
                <div class="close-btn-wrapper right-align">
                    <img src="../assets/images/modal-close.svg" alt="modal-close" class="modal-close">
                </div>
                <div class="mc-wrapper mc-w-2">
                    <div class="modal-title-wrapper">
                        <h3 class="modal-title">Book a Truck</h3>
                        <span class="modal-title-desc">Fill the detail below to get your estimate</span>
                    </div>
                    <form action="#" id="modal-form">
                        <div class="input-field double-field-wrapper">
                            <div class="re">
                                <select name="state_1" id="state_1">
                                    <option value="" disabled selected>State</option>
                                    <option value="Lagos">Lagos</option>
                                    <option value="Imo">Imo</option>
                                    <option value="Abuja">Abuja</option>
                                    <option value="Ogun">Ogun</option>
                                    <option value="Bayelsa">Bayelsa</option>
                                </select>
                                <img src="../assets/images/caret.svg" alt="caret" class="caret-icon">
                            </div>
                            <div class="rel">
                                <select name="area_1" id="area_1">
                                    <option value="" disabled selected>Area (Covered location)</option>
                                    <option value="Yaba">Yaba</option>
                                    <option value="Ikeja">Ikeja</option>
                                    <option value="Ajegunle">Ajegunle</option>
                                    <option value="Victoria Island">Victoria Island</option>
                                    <option value="Lekki">Bayelsa</option>
                                </select>
                                <img src="../assets/images/caret.svg" alt="caret" class="caret-icon">
                            </div>
                        </div>
                        <div class="input-field double-field-wrapper">
                            <div class="rel">
                                <select name="state_2" id="state_2">
                                    <option value="" disabled selected>State</option>
                                    <option value="Lagos">Lagos</option>
                                    <option value="Imo">Imo</option>
                                    <option value="Abuja">Abuja</option>
                                    <option value="Ogun">Ogun</option>
                                    <option value="Bayelsa">Bayelsa</option>
                                </select>
                                <img src="../assets/images/caret.svg" alt="caret" class="caret-icon">
                            </div>
                            <div class="rel">
                                <select name="area_2" id="area_2">
                                    <option value="" disabled selected>Area (Covered location)</option>
                                    <option value="Yaba">Yaba</option>
                                    <option value="Ikeja">Ikeja</option>
                                    <option value="Ajegunle">Ajegunle</option>
                                    <option value="Victoria Island">Victoria Island</option>
                                    <option value="Lekki">Bayelsa</option>
                                </select>
                                <img src="../assets/images/caret.svg" alt="caret" class="caret-icon">
                            </div>
                        </div>
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
                            <button class="submit-modal-btn btn sec-btn disabled-btn modal-trigger modal-close" data-target="estimated-quote">
                                <span class="rel">Request quote</span>
                            </button>
                        </div>
                    </form>
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

        var elemsModal = document.querySelectorAll('.modal');
        M.Modal.init(elemsModal, {
            onOpenStart: ()=> {
                $('html').addClass("modal-opened");
            },
            onCloseStart: ()=> {
                $('html').removeClass("modal-opened");
            },
        });

        $("form#modal-form input").on("change", function(){
            if($(this).val() != ""){
                $(".submit-modal-btn").removeClass("sec-btn");
                $(".submit-modal-btn").addClass("pry-btn");
            } else {
                $(".submit-modal-btn").addClass("sec-btn");
                $(".submit-modal-btn").removeClass("pry-btn");
            }
        });

        $(".submit-modal-btn").click(function(){
            event.preventDefault();
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
</style>