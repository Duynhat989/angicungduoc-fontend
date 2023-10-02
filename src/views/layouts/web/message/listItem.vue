<script setup>
import {
  languagePack,
  setLanguage,
  LangList,
  localtionsLang,
} from "../../../../languages/index";
import { ref, onMounted } from "vue";

</script>
<template>
   <div class="message">
        <div class="left">
            <img class="logo" src="https://cdn.vox-cdn.com/thumbor/kKaJ2XLAN5jFmz_vm3M2ExQm4bY=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23437452/The_Spy_x_Family_Anime_Succeeds_Because_of_Its_Characters_.jpg" alt="" srcset="">
        </div>
        <div class="right">
            <div class="message-title">
            NGUYEN VIET TIEN
            </div>
            <div class="message-content">
                Bạn: Hiện tại không có ai nhắn cả
            </div>
        </div>
   </div>
</template>
<style scoped>
.message{
    height: 60px;
    padding: 5px;
    padding-left: 10px;
    display: flex;
    font-size: 13px;
    background-color: aliceblue;
    cursor: pointer;
    margin-top: 5px;
}
.message:hover{
    background-color: rgb(255, 179, 124);
}
.left{
    display: flex;
    align-items: center;
}
.right{
    padding-left: 15px;
    padding-top: 5px;
}
.logo{
    height: 40px;
}
</style>