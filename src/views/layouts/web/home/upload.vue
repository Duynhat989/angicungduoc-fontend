<script setup>
import {
  languagePack,
  setLanguage,
  LangList,
  localtionsLang,
} from "../../../../languages/index";
import { ref, onMounted } from "vue";
const files = ref()
const file = () => {
    document.getElementsByClassName('saveFile')[0].click()
}
</script>
<template>
   <div class="upload">
        <h3 class="title">
            {{ languagePack["[TITLE_UPLOAD]"] }}
        </h3>
        <div class="content">
            <textarea name="content" id="content" cols="30" rows="5" placeholder="Bạn đang nghĩ gì?"></textarea>
        </div>
        <div class="attach">
            <label class="files" @click="file"> <i class='bx bx-add-to-queue'></i> Attach</label>
        </div>
   </div>
   <input hidden type="file" class="saveFile">
</template>
<style scoped>
.attach{
    padding: 5px 10px;
}
.upload{
    background-color: rgba(255, 255, 255, 0.852);
    min-height: 200px;
    border-radius: 10px;
    max-width: 600px;
    margin: 10px auto;
    padding: 10px;
}
.title{
    font-size: 1.3em;
    font-weight: 300;
}
.files{
    cursor: pointer;
}
textarea{
    width: 100%;
    border: none;
    border-radius: 5px;
    outline: none;
    padding: 5px 10px;
    font-size: 15px;
}
</style>