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
import BuyProduct from "../layouts/web/resources/Buy.vue";
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
            <Item />
            <BuyProduct />
        </div>
      </div>
  </main>
  <!-- Footer -->
</template>
<style scoped>
.list-show{
  margin-top: 20px;
}

/* Phần site */

</style>
