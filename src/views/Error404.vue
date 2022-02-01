<template>
    <div id="main-wrapper">
        <section class="error-container">
            <div class="row full-height">
                <div class="container full-height">
                    <div class="error-block center">
                        <img src="../assets/images/404.svg" alt="error 404" class="error-code-img">
                        <p class="error-description">Page not found</p>
                        <div class="error-action-btn-wrapper">
                            <router-link to="/" custom v-slot="{ navigate }">
                                <button class="error-action-btn hover-scale" @click="navigate" role="link">
                                    Take me back home
                                    <img src="../assets/images/right-chevron.svg" alt="right" class="right-chevron">
                                </button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: "Error404"
}
</script>

<style scoped>
.error-block {
    padding: 15px;
}
h1.error-page-title {
    letter-spacing: -1px;
}
img.error-code-img {
    margin: 20px 0;
}
p.error-description {
    font-size: 18px;
    line-height: 19px;
    text-align: center;
    color: #6E7883;
}
.error-action-btn-wrapper {
    margin: 30px 0;
}
button.error-action-btn {
    background: var(--pry-color);
    border-radius: 8px;
    border: none;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: white;
    height: 50px;
    width: 220px;
    cursor: pointer;
}
@media(min-height: 960px) {
    .error-container {
        min-height: 1330px;
        height: 100%;
    }
    .error-block {
        padding: 15px;
        position: absolute;
        top: 40%;
        transform: translate(-50%, -50%);
        left: 50%;
    }
    /* .error-block {
        position: relative;
        top: 10vh;
    } */
}
</style>