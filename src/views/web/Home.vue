<script setup>
import { onMounted, ref } from "vue";
import {
  languagePack,
  setLanguage,
  LangList,
  localtionsLang,
} from "../../languages/index";
import Headers from "../layouts/web/Header.vue";
import Banner from "../layouts/web/home/banner.vue";
import Item from "../layouts/web/home/items.vue";
import Notify from "../layouts/web/home/notify.vue";
import History from "../layouts/web/home/history.vue";
import DoubleItem from "../layouts/web/home/doubleItems.vue";
import Upload from "../layouts/web/home/upload.vue";
import HomeLogin from '../layouts/web/auth/login.vue'
const isLogined = ref(false);

const setup = () => {
  document.title = "TP Worker"
};

onMounted(() => {
  setup();
});
</script>

<template>
  <Headers :url="'home'" />
  <main class="main">
    <div class="container">
        <div class="row">
            <Banner />
            <DoubleItem />
            <div class="row orther">
              <div class="left col-md-8 col-12">
                <Notify />
              </div>
              <div class="right col-md-4 col-12">
                <History />
              </div>
            </div>
        </div>
      </div>
  </main>
  <!-- Footer -->
</template>
<style scoped>
.list-show{
  margin-top: 20px;
}
.row{
  padding: 0;
  margin: 0;
}
/* Phần site */
.right{
  padding: 0;
  text-align: center;
}
.left{
  padding: 0;
  text-align: center;
}
.orther{
  padding: 10px;
  cursor: pointer;
}
</style>
