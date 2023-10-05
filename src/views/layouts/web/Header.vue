<script setup>
import { onMounted, ref,computed } from "vue"
import { RouterLink, useRouter } from "vue-router"

import store from "../../../stores/index";

import { languagePack, setLanguage, LangList,localtionsLang } from "../../../languages/index"
const language = ref()
const isLogined = computed(() => store.getters.usersss) 
const router = useRouter() 

function setNewLang() {
  setLanguage(language.value);
  location.reload();
}
const layoutHeader = [
    {
        title:languagePack["[HOME]"],
        to:'/'
    },
    {
        title:languagePack["[FOOD]"],
        to:'/food'
    },
    // {
    //     title:languagePack["[COURSE]"],
    //     to:'/course'
    // },
    // {
    //     title:languagePack["[RESOURCES]"],
    //     to:'/resources',
    //     sub:[
    //         {
    //             title:languagePack["[INGREDIENT]"],
    //             to:'/resources',
    //         },
    //         {
    //             title:languagePack["[SEVICES]"],
    //             to:'/resources',
    //         }
    //     ]
    // },
    // {
    //     title:languagePack["[HISTORY]"],
    //     to:'/history'
    // },
    // {
    //     title:languagePack["[API]"],
    //     to:'/history'
    // },
    // {
    //     title:languagePack["[PERSON]"],
    //     to:'/person',
    //     sub:[
    //         {
    //             title:languagePack["[MESSAGE]"],
    //             to:'/message',
    //         },
    //     ]
    // },
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
  <header class="header">
    <div class="container">
      <div class="header-box flex-center w-100">
        <div class="header-left">
          <a href="/" class="logo text-with-border">
            <img src="../../../assets/logo.jpg" alt="Mô tả hình ảnh">
          </a>
        </div>
        <div class="header-right">
          <div class="menu-mobile">
              <button class="button menu-icon"><i class='bx bx-menu'></i></button>
          </div>
          <ul class="menu flex-center-end">
            <li class="menu-item" v-for="(item,index) in layoutHeader">
              <RouterLink :to="item.to" class="fs-16">
                {{ item.title }}
              </RouterLink>
              <ul class="sub-menu">
                 <li class="sub-menu__item" v-for="(temp,key) in item.sub">
                    <RouterLink :to="temp.to">
                        {{ temp.title }}
                    </RouterLink>
                 </li>
              </ul>
            </li>
            <li class="menu-item">
              <RouterLink :to="'/me'" class="btn-groups flex-center" v-if="isLogined">
                <div class="icon">
                  <i class='bx bx-user-circle'></i>
                </div> &nbsp;
                <div class="user-name">
                  <h5 class="fs-16">Đinh Viết Duy</h5>
                </div>
              </RouterLink>
              <div class="btn-groups" v-else>
                <RouterLink :to="'/login'" class="button snall">{{ languagePack["[SIGN_IN]"] }}</RouterLink>&ensp;
                <RouterLink :to="{
                    path: '/login',
                    query: {
                      type: 'register'
                    }
                  }" class="button snall">{{ languagePack["[SIGN_UP]"] }}</RouterLink>
              </div>
            </li>
            <li class="menu-item">
              <select v-model="language" @change="setNewLang(item)"> 
                    <option v-for="(item, index) in LangList" selected>{{ item }}</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- <Notification /> -->
  </header>
</template>