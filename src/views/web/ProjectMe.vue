<script setup>
import { onMounted, ref } from "vue";
import {
  languagePack,
  setLanguage,
  LangList,
  localtionsLang,
} from "../../languages/index";
import Header from "../layouts/web/Header.vue";
import ListItem from "../layouts/web/message/listItem.vue";
const isLogined = ref(false);

const setup = () => {
  document.title = languagePack["[HOME]"];
};

onMounted(() => {
  setup();
});
</script>

<template>
  <Header />
  <!-- <Header /> -->
  <main class="main">
    <div class="container">
      <div class="row">
        <div class="project">
          <div class="row">
            <div class="col-3">
              <ul class="nav-bar">
                  <h5>Danh sách dự án</h5>
                  <li class="nav-bar__item">
                      <a >Dự án chiếc cầu</a>
                  </li>
                  <li class="nav-bar__item">
                      <a >Dự án con thỏ</a>
                  </li>
                  <li class="nav-bar__item">
                      <a >Dự án</a>
                  </li>
              </ul>
            </div>
            <div class="col-9">
                <div class="project-body__checker">
                    <div class="title"><h3>Thông tin dự án</h3></div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <!-- Footer -->
</template>
<style scoped>
.title{
  text-align: center;
  text-transform: uppercase;
  color: #000000;
}
.nav-bar{
  padding: 10px;
}
.nav-bar .nav-bar__item{
  padding: 10px;
  margin-bottom: 10px;
  list-style-type: none;
  border-radius: 8px;
  box-shadow: 1px 1px 1px 1px #96cdfb;
  transition: all 0.5s;
  padding-left: 30px;
  color: rgb(142, 139, 139);
}
.nav-bar__item:hover{
  box-shadow:5px 4px 4px 2px #96cefb97;
  cursor: pointer;
  transform: scale(1.03);
}
a{
  text-decoration: none;
  color: rgb(142, 139, 139);
}
.project{
    min-height: 90vh;
    border-radius: 15px;
    padding-top: 20px;
}
</style>
