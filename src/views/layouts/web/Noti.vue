<script setup>
// import {
//   languagePack,
//   setLanguage,
//   LangList,
//   localtionsLang,
// } from "../../../../languages/index";
import { ref, onMounted } from "vue";

</script>
<template>
   <div class="notification">
        <div class="notification-content">
            <h5 class="title">
                <i class='bx bx-right-arrow-alt'></i> Thông báo <i class='bx bx-left-arrow-alt'></i>
            </h5>
            <div class="content">
                Xin chào
                Xin chào
                Xin chào
                Xin chào
                Xin chào
                Xin chào
                Xin chào
                Xin chào
                Xin chào
                Xin chào
                Xin chào
                Xin chào
                Xin chào
                Xin chàoXin chào
                Xin chào
                Xin chào
                Xin chào
                Xin chào
                Xin chào
            </div>
        </div>
   </div>
</template>
<style scoped>
.notification{
    padding: 5px;
    position: fixed;
    top: 10%;
    z-index: 99999;
    width: 100%;
}
.notification-content{
    background-color: aliceblue;
    width: 400px;
    margin: auto;
    padding: 10px;
    text-align: center;
    border-radius: 10px;
    box-shadow: 3px 3px 3px 2px rgba(128, 128, 128, 0.332);
}
.content{
    font-size: 13px;
    /* text-align: start; */
}
</style>