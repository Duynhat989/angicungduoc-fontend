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
  <footer class="footer">
      <div class="container">
          <div class="footer-content text-center">
            <i class='bx bx-copyright'></i> Copyright by Kojy 2023
          </div>
      </div>
  </footer>
</template>

