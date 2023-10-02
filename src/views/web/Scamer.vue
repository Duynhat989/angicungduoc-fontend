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
        <div class="scamer">
          <div class="row">
            <div class="col-3">
              <ul class="nav-bar">
                 <li class="nav-bar__item">
                    <a >Kiểm tra tố cáo</a>
                 </li>
                 <li class="nav-bar__item">
                    <a >Tố cáo</a>
                 </li>
                 <li class="nav-bar__item">
                    <a >Danh sách uy tín</a>
                 </li>
              </ul>
            </div>
            <div class="col-9">
                <div class="scamer-body__checker">
                    <div class="title"><h3>Kiểm tra thông tin</h3></div>
                    <p class="description">Nhập thông tin cần kiểm tra</p>
                    <div class="search">
                      <input type="text" class="search-box" placeholder="Số tài khoản, điện thoại, UID FACEBOOK,...">
                      <button class="search-btn"><i class='bx bx-search'></i></button>
                    </div>
                    <div class="result">
                      <div class="result-item">
                        <div class="scamer-top flex">
                            <div class="scamer-top__name">
                              <i class='bx bx-user'></i>.  <span class="name">NGUYỄN HUY HIỆU</span>
                            </div>
                            <div class="scamer-top__view">
                              <i class='bx bx-show-alt'></i> <span class="count">230</span> lượt xem
                            </div>
                        </div>
                        <div class="scamer-time">
                            Ngày tố cáo: 23/08/2023
                        </div>
                        <div class="scamer-content">
                            + Thông tin được cập nhật mới vào ngày 
                        </div>
                      </div>
                    </div>
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
.scamer-content{
  font-size: 0.85em;
}
.scamer-time{
  font-size: 0.7em;
}
.scamer-top{
  padding-left: 10px;
}
.scamer-top__view{
  font-size: 11px;
  margin-left: 10px;
  color: blue;
}
.flex{
  display: flex;
}
.result-item{
  padding: 5px 10px;
  margin-bottom: 5px;
  border-radius: 5px;
  box-shadow:3px 3px 3px 2px #6c727753;
  background-color: rgb(172, 221, 255);
  cursor: pointer;
  transition: all 0.5s;

}
.result-item:hover{
  background-color: rgba(172, 220, 255, 0.722);
}
.result{
  max-width: 800px;
  margin: auto;
  margin-top: 20px;
  padding: 10px;
  /* background-color: rgba(173, 244, 255, 0.397); */
}
.search .search-box{
  width: 100%;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 5px 10px;
  padding-right: 40px;
  font-size: 13px;
}
.search .search-btn{
  width: 40px;
  border: none;
  background: none;
  position: absolute;
  z-index: 9;
  top: 6px;
  right: 0;
  font-size: 18px;
  cursor: pointer;
}
.search{
  max-width: 600px;
  margin: auto;
  position: relative;
}
.description{
  text-align: center;
  padding: 0;
  margin: 0;
}
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
  background-color: rgb(254, 249, 242);
  box-shadow: 1px 1px 1px 1px #96cdfb;
  transition: all 0.5s;
  padding-left: 30px;
  color: rgb(142, 139, 139);
}
.nav-bar__item:hover{
  box-shadow:5px 4px 4px 2px #96cefb97;
  cursor: pointer;
  transform: scale(1.03);
  background-color: aliceblue;
}
a{
  text-decoration: none;
  color: rgb(142, 139, 139);
}
.scamer{
    min-height: 90vh;
    background-color: rgb(255, 255, 255);
    border-radius: 15px;
    padding-top: 20px;
}
</style>
