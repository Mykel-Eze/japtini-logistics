<template>
    <div id="modal-component">
        <div id="request-success" class="modal">
            <div class="modal-content">
                <div class="close-btn-wrapper flex-div">
                    <div class="modal-back-wrapper modal-trigger modal-close" data-target="estimated-quote">
                        <img src="../assets/images/back-arr.svg" alt="back" class="back-arrow">
                        <span>Back</span>
                    </div>
                    <img src="../assets/images/modal-close.svg" alt="modal-close" class="modal-close">
                </div>
                <div class="mc-wrapper mc-w-2">
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
