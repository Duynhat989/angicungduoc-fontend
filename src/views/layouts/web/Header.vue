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
    // {
    //     title:languagePack["[COURSE]"],
    //     to:'/course'
    // },
    {
        title:languagePack["[RESOURCES]"],
        to:'/resources',
        sub:[
            {
                title:languagePack["[INGREDIENT]"],
                to:'/resources',
            },
            {
                title:languagePack["[SEVICES]"],
                to:'/resources',
            }
        ]
    },
    {
        title:languagePack["[HISTORY]"],
        to:'/history'
    },
    {
        title:languagePack["[API]"],
        to:'/history'
    },
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
      <div class="row">
        <div class="left item-center col-md-3 col-6">
          <a href="/" class="logo text-with-border">Tp Media</a>
        </div>
        <div class="right col-md-9 col-6">
          <div class="menu-reponsive">
              <button class="button menu-icon"><i class='bx bx-menu'></i></button>
          </div>
          <ul class="menu flex">
            <li class="menu-item" v-for="(item,index) in layoutHeader">
              <RouterLink :to="item.to">
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
            <RouterLink :to="'/me'" class="btn-groups flex" v-if="isLogined">
              <div class="icon">
                <i class='bx bx-user-circle'></i>
              </div>
              <div class="user-name">
                <h6>DINH VIET DUY</h6>
              </div>
            </RouterLink>
            <div class="btn-groups" v-else>
              <RouterLink :to="'/login'" class="btn btn-outline-primary btn-sm">{{ languagePack["[SIGN_IN]"] }}</RouterLink>&ensp;
              <RouterLink :to="{
                  path: '/login',
                  query: {
                    type: 'register'
                  }
                }" class="btn btn-outline-info btn-sm">{{ languagePack["[SIGN_UP]"] }}</RouterLink>
            </div>
            
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
<style scoped>
.btn-groups{
  align-items: center;
  justify-content: center;
  display: flex;
  cursor: pointer;
}
.btn-groups .icon{
  font-size: 1.5em;
  font-weight: 450;
}
.user-name{
  padding:0 5px;
  margin: 0;
  font-weight: 450;
}
.user-name h6{
  margin: 0;
}
.menu{
  align-items: center;
  width: 100%;
}
.menu-reponsive{
  display: none;
  font-size: 3em;
  width: 100%;
  text-align: end;
  margin-top: 0.8em;
}
.button{
  background: none;
  border: none;
}
ul{
  justify-content: end;
}
.menu-item{
    font-size: 0.75em;
}
select{
    border: none;
    background:transparent;
    padding:0 5px;
}
.text-with-border {
  font-size: 1.2em;
  text-decoration: none;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

/* Sub menu */
.sub-menu{
    visibility: hidden;
    opacity: 0;
    position: absolute;
    top: 160%;
    left: 10%;
    transition: all 0.5s;
    width: 200px;
    background-color: white;
}
.sub-menu__item{
    width: 70%;
    text-align: center;
}
.sub-menu__item:hover{
    width: 100%;
    color: #ff9428;
}

.header {
  height: 50px;
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 9999;
  box-shadow: 0px 4px 15px 1px #ffafe74d;
  background-color: white;
}
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style-type: none;
  text-align: center;
  padding: 10px 10px;
  width: calc(100% / 7);
  transition: all 0.5s;
  position: relative;
}
li:hover{
    cursor: pointer;
    transform: scale(1.1);
}
li:hover .sub-menu{
    visibility: visible;
    opacity: 1;
    top: 100%;
}
li a {
  text-decoration: none;
  text-transform: uppercase;
}
.logo {
  text-transform: uppercase;
}
.flex {
  display: flex;
  flex-wrap: wrap;
}
.item-center{
    display: flex;
    align-items: center;
}
a{
  color: rgb(75, 87, 255);
}
@media only screen and (max-width: 1200px) {
  .menu-reponsive{
    display: block;
  }
  .menu{
    visibility: hidden;
    opacity: 0;
  }
}
@media only screen and (max-width: 1000px) {
  .button{
    margin-top: 0.5em;
  }
}
@media only screen and (max-width: 600px) {
  .button{
    margin-top: 0.3em;
  }
}
</style>
