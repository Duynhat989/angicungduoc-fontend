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
   <div class="upload">
        <h3 class="title">
            {{ languagePack["[TITLE_UPLOAD]"] }}
        </h3>
   </div>
</template>
<style scoped>
.upload{
    
}
</style>