<template>
    <div id="s-modal-component" class="ts-smc">
        <div id="track-shipment" class="s-modal">
            <div class="s-modal-content">
                <div class="close-btn-wrapper right-align">
                    <img src="../assets/images/modal-close.svg" alt="s-modal-close" class="close-ts-smc">
                </div>
                <div class="mc-wrapper">
                    <div class="modal-title-wrapper">
                        <h3 class="modal-title center">Track your shipment</h3>
                    </div>
                    <form action="#" id="track-modal-form">
                        <div class="flex-div flex-inp-wrapper">
                            <input type="text" id="tracking-number" name="tracking-number" required placeholder="Enter your tracking number" />
                            <button class="submit-tracking-btn btn pry-btn">
                                <span class="rel">Track Package</span>
                            </button>
                        </div>
                    </form>

                    <div class="tracking-path-wrapper">
                        <ul class="tracking-path">
                            <li class="active-point">
                                <small class="tracking-time">10:10 PM</small>
                                <span class="t-node"></span>
                                <div class="tracking-location">
                                    <span class="t-state">Lagos</span>
                                    <img src="../assets/images/dotted-link.svg" alt="dotted-line" class="dotted-l-line" />
                                    <span class="t-area">Apapa</span>
                                    <span class="tracking-date">Thursday, 12th 2022</span>
                                </div>
                            </li>
                            <li class="active-point">
                                <small class="tracking-time"> 1:10 AM</small>
                                <span class="t-node"></span>
                                <div class="tracking-location">
                                    <span class="t-state">Ondo</span>
                                    <img src="../assets/images/dotted-link.svg" alt="dotted-line" class="dotted-l-line" />
                                    <span class="t-area">Alagbaka</span>
                                    <span class="tracking-date">Saturday, 15th 2022</span>
                                </div>
                            </li>
                            <li class="">
                                <small class="tracking-time">  4:10 PM</small>
                                <span class="t-node"></span>
                                <div class="tracking-location">
                                    <span class="t-state">Kogi</span>
                                    <img src="../assets/images/dotted-link.svg" alt="dotted-line" class="dotted-l-line" />
                                    <span class="t-area">Lokoja</span>
                                    <span class="tracking-date">Saturday, 15th 2022</span>
                                </div>
                            </li>
                            <li class="final-point">
                                <small class="tracking-time">  5:10 PM</small>
                                <span class="t-node"></span>
                                <div class="tracking-location">
                                    <span class="t-state">Abuja</span>
                                    <img src="../assets/images/dotted-link.svg" alt="dotted-line" class="dotted-l-line" />
                                    <span class="t-area">Wuse II</span>
                                    <span class="tracking-date">Monday, 18th 2022</span>
                                </div>
                            </li>
                            <div class="progress-wrapper">
                                <div class="progress-line" style="width: 50%"></div>
                            </div>
                        </ul>
                    </div>

                    <div class="updates-signup-wrapper">
                        <div class="flex-div">
                            <div class="flex-div for-updates-txt">
                                <span>For realtime updates and notifications</span>
                                <img src="../assets/images/notification.svg" alt="notification" class="notification-img" />
                            </div>
                            <div class="for-updates-btn">
                                <button class="pry-btn btn s-u-btn">
                                    <span class="rel">Sign Up</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import M from 'materialize-css'
import $ from 'jquery'
export default {
    name: "TrackShipment",
    mounted() {
        // var elemsModal = document.querySelectorAll('.modal');
        // M.Modal.init(elemsModal, {
        //     onOpenStart: ()=> {
        //         $('html').addClass("modal-opened");
        //     },
        //     onCloseStart: ()=> {
        //         $('html').removeClass("modal-opened");
        //     },
        // });
        $(".submit-tracking-btn").click(function(){
            event.preventDefault();
            if($("#tracking-number").val().length > 0) {
                $(".tracking-path-wrapper, .updates-signup-wrapper").show();
            } else {
                alert("Input a tracking number")
            }
        });

        $(".t-p-trigger").click(function(){
            $("html").addClass("smc-opened");
            $("#s-modal-component.ts-smc, .smco-track-shipment").addClass("opened-smc");
            window.scrollTo(0, 0);
        });
        $(".close-ts-smc").click(function(){
            $("html").removeClass("smc-opened");
            $("#s-modal-component.ts-smc, .smco-track-shipment").removeClass("opened-smc");
        })
    }
}
</script>

<style src="../assets/css/modal.css" scoped></style>

<style scoped>
h3.modal-title {
    font-size: 72px;
    line-height: 50px;
    letter-spacing: 0.02em;
    font-weight: bold;
}
.mc-wrapper {
    width: 60%;
}
</style>