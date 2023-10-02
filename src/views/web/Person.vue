<script setup>
import { onMounted, ref } from "vue";

import { RouterLink, useRouter } from "vue-router"
import {
  languagePack,
  setLanguage,
  LangList,
  localtionsLang,
} from "../../languages/index";
import Headers from "../layouts/web/Header.vue";
import ListItem from "../layouts/web/message/listItem.vue";
import store from "../../stores/index";

const isLogined = ref(false);
const router = useRouter() 

const setup = () => {
  document.title = languagePack["[HOME]"];
};
const logout = () => {
  store.dispatch('logout')
  router.push('/login')
};
const message = () => {
  router.push('/message')
};
onMounted(() => {
  setup();
});
</script>

<template>
  <Headers />
  <!-- <Header /> -->
  <main class="main">
    <div class="container">
      <div class="row">
        <div class="person">
          <div class="person-cover">
            <img src="https://thuthuatnhanh.com/wp-content/uploads/2021/11/hinh-anh-chill-dep.jpg" alt="ảnh bìa">
          </div>
          <div class="person-avata">
            <img width="200" height="200" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx2FoIwPQLKH-qv3ET9erIGz22Tan1D0uorw&usqp=CAU" alt="avata">
          </div>
          <div class="person-info">
            <h2 class="person-info__title">Nguyễn Viết Tiến (DEV) <i class='bx bx-shield-x'></i>
              <!-- <i class='bx bxs-check-shield' ></i>  -->
            <!-- <i class='bx bx-shield' ></i> -->
            </h2>
            <div class="groups">
              <button class="group-btn message" @click="message()"><i class='bx bxl-messenger' ></i> Nhắn tin</button>
              <button @click="logout()" class="group-btn block"><i class='bx bx-exit'></i> Đăng xuất</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <!-- Footer -->
</template>
<style scoped>
.group-btn{
  min-width: 150px;
  margin-right: 5px;
  border-radius: 5px;
  border: none;
  padding: 5px 10px;
  color: white;
  transition: all 1s;
}
.message{
  background-color: #0dcaf0b0;
}
.block{
  background-color: #fe5887b0;
}
.group-btn:hover {
  background-color: antiquewhite;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.548);
}
.person-info__title{
  font-size: 1.5em;
}
.person-info{
  padding: 10px;
  color: #264e86;
  padding-top: 15px;
  /* max-width: 1000px; */
  margin: auto;
  margin-top: 10px;
  border-radius: 10px;
  min-height: 55%;
}
.person-avata img{
  border-radius: 50%;
  box-shadow: 0px 0px 4px 4px rgb(255, 243, 135);
}
.person-avata{
  object-fit: cover;
  margin: auto;
  margin-top: -150px;
  text-align: center;
}
.person-cover img{
  height: 300px;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
}
.person-cover{
  padding-top: 10px;
  width: 100%;
}
.person{
    min-height: 90vh;
    border-radius: 15px;
    text-align: center;
}
</style>
