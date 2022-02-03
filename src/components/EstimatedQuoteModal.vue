<template>
    <div id="modal-component">
        <div id="estimated-quote" class="modal">
            <div class="modal-content">
                <div class="close-btn-wrapper flex-div">
                    <div class="modal-back-wrapper">
                        <img src="../assets/images/back-arr.svg" alt="back" class="back-arrow">
                        <span>Back</span>
                    </div>
                    <img src="../assets/images/modal-close.svg" alt="modal-close" class="modal-close">
                </div>
                <div class="mc-wrapper mc-w-2">
                    <div class="modal-title-wrapper center">
                        <h3 class="modal-title">Estimated quote</h3>
                        <span class="modal-title-desc">Yaba, Lagos — Wuse II, Abuja</span>
                    </div>
                    <div id="eq-block">
                        <div class="eq-range">₦500,000 - ₦550,000 </div>
                        <div class="eq-btn-wrapper flex-div">
                            <button class="signup-btn btn pry-btn"><span>Sign Up</span></button>
                            <button class="request-call-btn btn sec-btn"><span class="rel">Request a Call</span></button>
                        </div>
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

        var elemsModal = document.querySelectorAll('.modal');
        M.Modal.init(elemsModal, {
            onOpenStart: ()=> {
                $('html').addClass("modal-opened");
            },
            onCloseStart: ()=> {
                $('html').removeClass("modal-opened");
            },
        });
    }
}
</script>

<style src="../assets/css/modal.css" scoped></style>

<style></style>
