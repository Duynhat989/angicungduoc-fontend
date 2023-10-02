<script setup>
import { onMounted, ref } from "vue";
import {
  languagePack,
  setLanguage,
  LangList,
  localtionsLang,
} from "../../languages/index";
import Headers from "../layouts/web/Header.vue";
import Post from "../layouts/web/job/post.vue";
import Upload from "../layouts/web/job/upload.vue";
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
        <div class="left item-center col-8">
          <Upload  v-if="isLogined"/>
          <!-- //danh sách tin tuyển dụng  -->
          <h5 class="title">
            {{ languagePack["[MY_JOB]"] }}
          </h5>
          <section class="posts">
            <Post />
            <Post />
            <Post />
            <Post />
          </section>
        </div>
        <div class="right col-4">
          <!-- d -->
          <div class="group-login" v-if="!isLogined">
            <h5 class="title-login">
              {{ languagePack["[COME_ON]"] }},<br />{{
                languagePack["[REGISTER_OPPORTUNITY]"]
              }}
            </h5>
            <button type="button" class="btn btn-login btn-info">
              {{ languagePack["[SIGN_IN]"] }}
            </button>
            <button type="button" class="btn btn-login btn-warning">
              {{ languagePack["[SIGN_UP]"] }}
            </button>
          </div>
          <div class="group-login" v-else>
            <h5 class="title-login">
              {{ languagePack["[NOTE_VIP]"] }}:<br />{{
                languagePack["[TITLE_VIP]"]
              }}
            </h5>
            <button type="button" class="btn btn-login btn-warning">
              {{ languagePack["[UPDATE_VIP]"] }}
            </button>
          </div>
          <div class="universal">Bộ lọc kĩ năng</div>
          <div class="universal">
            <h4>Lưu ý</h4>
            <p>Khi báo giá cần bổ sung thêm phần nội dung và các bước triển khai, tăng khả năng trúng thầu của chủ dự án. Bài đăng sẽ được đóng ngay khi chủ dự án chọn được người làm việc cho mình !</p>
          </div>
        </div>
      </div>
    </div>
  </main>
  <!-- Footer -->
</template>
<style scoped>
.title-login {
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
  background-color: white;
  min-height: 40px;
  border-radius: 5px;
  max-width: 600px;
  margin: auto;
  margin-bottom: 10px;
}
.title{
  background-color: white;
  border-radius: 5px;
  max-width: 600px;
  font-size: 16px;
  padding: 5px 10px;
  margin: auto;
}
.btn-login {
  margin: 0 5px;
  min-width: 150px;
  color: white;
}
.posts {
  max-height: 80vh;
  overflow: auto;
}

.posts::-webkit-scrollbar {
  width: 1px; /* Độ rộng của scrollbar */
  height: 0;
}

.posts::-webkit-scrollbar-thumb {
  background-color: #0bff28; /* Màu nền của thanh cuộn */
  border-radius: 4px; /* Độ cong của các góc của thanh cuộn */
}

.posts::-webkit-scrollbar-thumb:hover {
  background-color: #676767; /* Màu nền của thanh cuộn khi di chuột qua */
}

.posts::-webkit-scrollbar-track {
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
