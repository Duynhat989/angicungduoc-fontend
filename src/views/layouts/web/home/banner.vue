<style scoped>
.slide img {
    height: 300px;
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.377) 1.95px 1.95px 2.6px;
}

.slide {
    padding-top: 10px;
    width: 100%;
    cursor: pointer;
}

.banner {
    border-radius: 15px;
    text-align: center;
    transition: all 0.5s;
}
.banner:hover{
    transform: scale(1.03);
    cursor: pointer;
}
.slide{
    position: relative;
    border-radius: 10px;
    padding: 5px;
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
    padding: 10px;
    width: 70%;
    border-radius: 10px;
}
button{
    color: aliceblue;
    padding-left: 40px;
    padding-right: 40px;
}
</style>
<template>
    <div class="banner">
        <div class="owl-carousel owl-theme" :key="carouselKey">
            <div class="slide">
                <div class="backgroud">
                    <img src="https://kynguyenlamdep.com/wp-content/uploads/2020/04/hinh-anh-trang-dep.jpg" alt="ảnh bìa">
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
                            <button class="btn btn-info">Tham gia ngay</button>
                        </div>
                    </div>
                </div>
            </div>    
            <div class="slide">
                <div class="backgroud">
                    <img src="https://i.imgur.com/NLKGnc4.jpg" alt="ảnh bìa">
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
                            <button class="btn btn-info">Tham gia ngay</button>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    </div>
</template>
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
    console.log("______________")
    $('.banner .owl-carousel').owlCarousel({
        loop: true,
        dots:false,
        margin:10,
        animateOut: 'fadeOut',
        //default settings:
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
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