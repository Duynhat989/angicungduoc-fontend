<script setup>
import { onMounted, ref } from "vue"
import { RouterLink, useRouter } from "vue-router"
import { languagePack, setLanguage, LangList,localtionsLang } from "../../../languages/index"
import Notification from '../../layouts/web/Noti.vue'
const language = ref()
const isLogined = ref(false)

function setNewLang() {
  setLanguage(language.value);
  location.reload();
}
const layoutfooter = [
    {
        title:languagePack["[HOME]"],
        to:'/'
    },
    {
        title:languagePack["[COURSE]"],
        to:'/course'
    },
    // {
    //     title:languagePack["[MESSAGE]"],
    //     to:'/message'
    // },
    {
        title:languagePack["[PROJECT]"],
        to:'/project/me',
        sub:[
            {
                title:languagePack["[PROJECT_RESULT]"],
                to:'/project/me',
            },
            {
                title:languagePack["[JOB_RESULT]"],
                to:'/project/result',
            },
            {
                title:languagePack["[PV_DONE]"],
                to:'/project/pv_done',
            }
        ]
    },
    {
        title:languagePack["[PERSON]"],
        to:'/person',
        sub:[
            {
                title:languagePack["[MESSAGE]"],
                to:'/message',
            },
        ]
    },
    // {
    //     title:languagePack["[NOTE]"],
    //     to:'/note'
    // }
]
onMounted(() => {
    language.value = localtionsLang
});
</script>

<template>
  <!-- <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="content">
          <i class='bx bx-copyright'></i> Copyright by Kojy 2023
        </div>
      </div>
    </div>
  </footer> -->
</template>
<style scoped>
.footer{
  width: 100%;
  text-align: end;
  margin-top: 0.8em;
}
.content{
  font-size: 0.7em;
}
@media only screen and (max-width: 1200px) {
  
}
@media only screen and (max-width: 1000px) {
  
}
@media only screen and (max-width: 600px) {
  
}
</style>
