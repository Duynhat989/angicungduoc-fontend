<script setup>
import {
    languagePack,
    setLanguage,
    LangList,
    localtionsLang,
} from "../../../../languages/index";
import { ref, onMounted,watch  } from "vue";
import { useRouter } from 'vue-router';
const router = useRouter();
const carouselKey = ref(0);
function loadOwl(){
    $('.simple .owl-carousel').owlCarousel({
    loop: true,
    nav: false,
    dots:false,
    autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:false,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 6
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
    <section class="section simple">
        <div class="title">
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
                                <h5>GMAIL</h5>
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
                            src="https://static.vecteezy.com/system/resources/previews/022/484/516/original/google-mail-gmail-icon-logo-symbol-free-png.png">
                    </div>
                    <div class="content">
                        <div class="detail">
                            <div class="title">
                                <h5>GMAIL</h5>
                            </div>
                        </div>
                    </div>
                    <div class="status">
                        <h6><i class='bx bx-check-circle' ></i> Hết hàng</h6>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>

.status{
    position: absolute;
    z-index: 9999;
    top: 0;
    right: 0;
    padding: 5px;
    background-color: red;
    border-radius:0 10px 0 10px;
}
.success{
    background-color: rgb(0, 161, 22);
}
.status h6{
    font-size: 8px;
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
    padding: 10px;
}
.top {
    width: 100%;
}

img {
    width: 100%;
    border-radius: 15px;
    aspect-ratio: 3/2;
    object-fit: cover;
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
    box-shadow: rgba(82, 82, 82, 0.233) 1.95px 1.95px 2.6px;
    border-radius: 10px;
    transition: all 0.5s;
    position: relative;
    border: 1px solid rgba(128, 128, 128, 0.164);
}
.slide:hover{
    transform: scale(1.05);
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
</style>