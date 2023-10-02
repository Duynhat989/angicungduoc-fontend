<script setup>
import { onMounted, ref } from "vue";
import {
  languagePack,
  setLanguage,
  LangList,
  localtionsLang,
} from "../../languages/index";
import Headers from "../layouts/web/Header.vue";
import Course from "../layouts/web/course/course.vue";
const isLogined = ref(false);

const setup = () => {
  document.title = languagePack["[HOME]"];
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
        <div class="content">
          <!-- //danh sách tin tuyển dụng  -->
          <h5 class="title">
            {{ languagePack["[MY_COURSE]"] }}
          </h5>
          <section class="courses flex">
            <Course 
              :title="'Cơ bản C#'" 
              :img="'https://d3hi6wehcrq5by.cloudfront.net/itnavi-blog/2020/07/C-l%C3%A0-g%C3%AC-1.jpg'" 
              :dsec="'Dành cho người mới bắt đầu'"
            />
            <Course 
              :title="'C# Nâng cao'" 
              :img="'https://tuandc.com/wp-content/uploads/2017/09/background_worker.jpg'"
              :dsec="'Dành cho người hoàn thành khóa cơ bản'"
            />
            <Course 
              :title="'Extension (JS)'" 
              :img="'https://www.toponseek.com/blogs/wp-content/uploads/2021/03/javascript.png'"
              :dsec="'Dành cho người làm chrome extension'"
            />
            <Course 
              :title="'Coming soon'" 
              :img="'https://static.vecteezy.com/system/resources/thumbnails/009/944/983/small/coming-soon-background-illustration-template-design-vector.jpg'"
              :dsec="'Sắp diễn ra'"
            />
          </section>
          
        </div>
      </div>
    </div>
  </main>
  <!-- Footer -->
</template>
<style scoped>
.flex{
    display: flex;
    flex-wrap: wrap;
}
.title-login {
    text-align: start;
  font-size: 14px;
  padding: 5px;
}
.btn-info {
  background-color: rgba(102, 214, 255, 0.495);
  color: rgb(95, 95, 95) !important;
  border: none;
}
.btn-warning {
  background-color: rgba(255, 176, 79, 0.43);
  color: rgb(91, 91, 91) !important;
  border: none;
}
.filter {
  min-height: 40px;
  border-radius: 5px;
  margin: auto;
  margin-bottom: 10px;
}
.title{
  background-color: #1d1233;
  border-radius: 5px;
  font-size: 16px;
  padding: 5px 10px;
  margin: auto;
  color: white;
  text-transform: uppercase;
}
.btn-login {
  margin: 0 5px;
  min-width: 150px;
  color: white;
}
.courses {
  max-height: 100vh;
  overflow: auto;
}

.courses::-webkit-scrollbar {
  width: 1px; /* Độ rộng của scrollbar */
  height: 0;
}

.courses::-webkit-scrollbar-thumb {
  background-color: #0bff28; /* Màu nền của thanh cuộn */
  border-radius: 4px; /* Độ cong của các góc của thanh cuộn */
}

.courses::-webkit-scrollbar-thumb:hover {
  background-color: #676767; /* Màu nền của thanh cuộn khi di chuột qua */
}

.courses::-webkit-scrollbar-track {
  background-color: #f1f1f1; /* Màu nền của vùng track của scrollbar */
}

/* css */
.group-login {
  background-color: rgba(255, 255, 255, 0.852);
  border-radius: 10px;
  text-align: center;
  padding: 20px 10px;
  margin-bottom: 10px;
  text-align: center;
}
.universal {
  background-color: rgba(255, 255, 255, 0.852);
  min-height: 200px;
  border-radius: 10px;
  text-align: center;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
