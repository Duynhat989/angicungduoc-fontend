<script setup>
import {
  languagePack,
  setLanguage,
  LangList,
  localtionsLang,
} from "../../../../languages/index"
import { ref, onMounted,defineProps } from "vue"
const { img,title,dsec } = defineProps(['img','title','dsec']);

</script>
<template>
   <div class="course" data-id="Có trời mới biết">
        <div class="course-content">
            <div class="top">
                <RouterLink :to="'oh No'">
                    <img :src="img" width="100">
                </RouterLink>
            </div>
            <div class="title">
                <h5>{{ title }}</h5>
            </div>
            <div class="bottom">
                <h5>{{ title }}</h5>
                <p class="dsec">{{ dsec }}</p>
                <RouterLink :to="'oh No'">
                    <button class="btn buy">Xem khóa học</button>
                </RouterLink>
            </div>
        </div>
   </div>
</template>
<style scoped>

    h5{
        background-color: #d4fc79;
        margin-bottom: 0;
        width: calc(100% - 2px);
        text-transform: uppercase;
    }
    .dsec{
        font-size: 13px;
    }
    img{
        border-radius: 15px; 
        object-fit: contain;
        aspect-ratio: 3/2;
    }
    .detail{
        background-color: antiquewhite;
        background-color: grey;
    }
    .buy{
        background-color: #1d1233;
        margin-left: 5px;
        color: white;
    }
    .btn{
        width: calc((100% - 40px)/2);
        transition: all 0.5s;
    }
    .btn:hover{
        background-color: rgba(211, 211, 211, 0.603);
        color: #000;
    }
    .course{
        width: calc(100% / 4);
        padding: 10px;
    }
    .course-content{
        width: 100%;
        aspect-ratio: 3/2;
        background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
        padding: 1px;
        border-radius: 15px;
        transition: all 0.5s;
        cursor: pointer;
        position: relative;
        transition: all 1s;
    }
    .course-content:hover{
        transform: scale(1.05);

    }
    .course-content:hover .bottom{
        visibility: visible;
        opacity: 1;
    }
    .course-content:hover img{
        opacity: 0.3;
    }
    .course-content:hover .bottom{
        top: 5%;
        z-index: 999;
    }
    .course-content:hover .title{
        visibility: hidden;
        opacity: 0;
    }
    .course-content:hover h5{
        background:none;
    }
    .bottom{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 70%;
        text-align: center;
        margin-top: 10%;
        visibility: hidden;
        opacity: 0;
    }
    .title{ 
        position: absolute;
        width: 100%;
        height: 100%;
        top: 70%;
        text-align: center;
    }
    .top img{
        width: 100%;
        object-fit: cover;
    }
    .top img::after {
        width: 100%;
    }
    @media only screen and (max-width: 1200px) {
        .course{
            width: calc(100% / 3);
            padding: 5px;
        }
    }
    @media only screen and (max-width: 1000px) {
        .course{
            width: calc(100% / 2);
            padding: 5px;
        }
    }
    @media only screen and (max-width: 600px) {
        .course{
            width: 100%;
            padding: 5px;
        }
    }
</style>