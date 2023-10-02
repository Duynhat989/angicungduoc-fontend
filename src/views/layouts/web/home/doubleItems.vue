<script setup>
import {
    languagePack,
    setLanguage,
    LangList,
    localtionsLang,
} from "../../../../languages/index";
import { ref, onMounted,watch } from "vue";
import { useRouter } from 'vue-router';
const router = useRouter();
const carouselKey = ref(0);

function loadOwl(){
    $('.double .owl-carousel').owlCarousel({
        loop: true,
        nav: false,
        dots:false,
        autoplay:false,
        autoplayTimeout:3000,
        autoplayHoverPause:false,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    })
}

watch(
  () => router.currentRoute,
  () => {
    carouselKey.value += 1;
  }
);
onMounted(() => {
    loadOwl()
})
</script>
<template>
    <section class="section double">
        <div class="title_section">
            <h5>Danh sách sản phẩm</h5>
        </div>
        <div class="items owl-carousel owl-theme" :key="carouselKey">
            <div class="item">
                <div class="slide">
                    <div class="top">
                        <img class="top-img"
                            src="https://static.vecteezy.com/system/resources/previews/022/484/516/original/google-mail-gmail-icon-logo-symbol-free-png.png">
                    </div>
                    <div class="content">
                        <div class="detail">
                            <div class="title">
                                <h5>Khám phá TP Worker</h5>
                            </div>
                            <div class="desciption">
                                <p>Nhận ngay ưu đãi khi nạp lần đầu tiên !</p>
                            </div>
                            <div class="accept">
                                <button class="btn btn-info">Mua ngay</button>
                            </div>
                        </div>
                    </div>
                    <div class="status success">
                        <h6><i class='bx bx-check-circle' ></i> Còn hàng</h6>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="slide">
                    <div class="top">
                        <img class="top-img"
                            src="https://www.logo.wine/a/logo/Outlook.com/Outlook.com-Logo.wine.svg">
                    </div>
                    <div class="content">
                        <div class="detail">
                            <div class="title">
                                <h5>Khám phá TP Worker</h5>
                            </div>
                            <div class="desciption">
                                <p>Nhận ngay ưu đãi khi nạp lần đầu tiên !</p>
                            </div>
                            <div class="accept">
                                <button class="btn btn-info">Mua ngay</button>
                            </div>
                        </div>
                    </div>
                    <div class="status success">
                        <h6><i class='bx bx-check-circle' ></i> Còn hàng</h6>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="slide">
                    <div class="top">
                        <img class="top-img"
                            src="https://staticg.sportskeeda.com/editor/2022/08/0ac40-16614283819408-1920.jpg">
                    </div>
                    <div class="content">
                        <div class="detail">
                            <div class="title">
                                <h6>Khám phá TP Worker</h6>
                            </div>
                            <div class="desciption">
                                <p>Nhận ngay ưu đãi khi nạp lần đầu tiên !</p>
                            </div>
                            <div class="accept">
                                <button class="btn btn-info">Mua ngay</button>
                            </div>
                        </div>
                    </div>
                    <div class="status">
                        <h6><i class='bx bx-check-circle' ></i> Hết hàng</h6>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="slide">
                    <div class="top">
                        <img class="top-img"
                            src="../../../../assets/facebook.png">
                    </div>
                    <div class="content">
                        <div class="detail">
                            <div class="title">
                                <h6>Khám phá TP Worker</h6>
                            </div>
                            <div class="desciption">
                                <p>Nhận ngay ưu đãi khi nạp lần đầu tiên !</p>
                            </div>
                            <div class="accept">
                                <button class="btn btn-info">Mua ngay</button>
                            </div>
                        </div>
                    </div>
                    <div class="status success">
                        <h6><i class='bx bx-check-circle' ></i> Còn hàng</h6>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.title_section{
    padding-top: 10px;
    padding-left: 10px;
}
.status{
    position: absolute;
    z-index: 9999;
    top: 0;
    right: 0;
    padding: 10px;
    background-color: red;
    border-radius:0 10px 0 10px;
}
.success{
    background-color: rgb(0, 161, 22);
}
.status h6{
    font-size: 11px;
    margin: 0;
    color: aliceblue;
}
.status h6 i{
    color: aliceblue;
}
h5{
    margin: 0;
}
.section{
    padding: 0 10px;
}
.top {
    width: 100%;
}

img {
    width: 100%;
    border-radius: 10px;
    aspect-ratio: 3/2;
    object-fit: cover;
    opacity: 0.9;
}

h4 {
    color: #676767;
}

.items {
    padding: 10px 0px;
}

.item {
    padding: 5px;
}
.slide{
    box-shadow: rgba(0, 0, 0, 0.158) 1.95px 1.95px 2.6px;
    border-radius: 10px;
    transition: all 0.5s;
    position: relative;
    border: 1px solid rgba(128, 128, 128, 0.24);
}
.slide:hover{
    transform: scale(1.02);
    cursor: pointer;
}
.content{
    position: absolute;
    z-index: 999;
    width: 100%;
    top: 0;
    text-align: center;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.detail{
    visibility: hidden;
    opacity: 0;
    transition: all 0.5s;
    padding: 10px;
    border-radius: 10px;
}
.content:hover{
    background-color: rgba(77, 77, 77, 0.753);
    border-radius: 10px;
}
.content:hover .detail{
    visibility: visible;
    opacity: 1;
}
.detail *{
    color: aliceblue;
}
.detail h5{
    font-size: 1.1em;
}
.detail p{
    font-size: 0.8em;
}
.btn{
    padding-left: 40px;
    padding-right: 40px;
}
</style>