<template>
    <div class="banner w-100">
        <div class="owl-carousel owl-theme" :key="carouselKey">
            <div class="banner-slide">
                <div class="banner-slide__backgroud">
                    <img src="@/assets/images/mon-ngon-moi-ngay.jpg" alt="ảnh bìa">
                </div>
                <div class="banner-slide__content">
                    <div class="detail">
                        <div class="detail-title">
                            <h5>Khám phá TP Worker</h5>
                        </div>
                        <div class="detail-desciption">
                            <p>Chào mừng bạn !!!</p>
                        </div>
                        <div class="detail-accept">
                            <button class="button large danger">Tham gia ngay</button>
                        </div>
                    </div>
                </div>
            </div>    
            <div class="banner-slide">
                <div class="banner-slide__backgroud">
                    <img src="@/assets/images/thuc-don-giam-can.jpg" alt="ảnh bìa">
                </div>
                <div class="banner-slide__content">
                    <div class="detail">
                        <div class="detail-title">
                            <h5>Khám phá TP Worker</h5>
                        </div>
                        <div class="detail-desciption">
                            <p>Nhận ngay ưu đãi khi nạp lần đầu tiên !</p>
                        </div>
                        <div class="detail-accept">
                            <button class="button large danger">Tham gia ngay</button>
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