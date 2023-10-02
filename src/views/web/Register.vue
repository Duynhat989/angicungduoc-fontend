<script setup>
import { onMounted, ref  } from "vue"
import { useRouter } from 'vue-router'
import {
  languagePack,
  setLanguage,
  LangList,
  localtionsLang,
} from "../../languages/index";
import Headers from "../layouts/web/Header.vue";
import Post from "../layouts/web/home/post.vue";
import Upload from "../layouts/web/home/upload.vue";
import HomeItem from '../layouts/web/home/item.vue'
import HomeLogin from '../layouts/web/auth/login.vue'
const router = useRouter() 
const isLogined = ref(false);

const setup = () => {
  
};

onMounted(() => {
  setup();
});
</script>

<template>
  <Headers :url="'home'" />
  <!-- <Header /> -->
  <main class="site">
    <section class="list-show">
      <div class="container">
        <div class="row">
          <HomeLogin />
        </div>
      </div>
    </section>
  </main>
  <!-- Footer -->
</template>
<style scoped>
/* Phần site */
</style>
