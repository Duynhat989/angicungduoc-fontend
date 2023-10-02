<script setup>
import { ref, onMounted } from "vue";
import {
  languagePack,
  setLanguage,
  LangList,
  localtionsLang,
} from "../../../../languages/index";
const logComment = ref(false);
const like = ref(false);
const showPrice = ref(false);
const btnLike = async () => {
    like.value = !like.value
};
const btnShow = async () => {
    showPrice.value = !showPrice.value
};
const addFile = async () => {
    document.querySelector('.file-cv').click()
};
onMounted(() => {});
</script>
<template>
  <div class="post">
    <div class="post-header flex">
      <div class="post-header__left">
        <div class="user flex">
          <div class="user-avata">
            <img
              width="100"
              height="100"
              src="../../../../assets/avata.jpeg"
              alt=""
            />
          </div>
          <div class="user-body">
            <h4 class="user-body__name">NGUYEN HOANG VIET</h4>
            <div class="user-body__time">
              {{ languagePack["[TIME]"] }}:
              <span class="user-body__time__span">10:23:00 27/10/2023</span>
            </div>
          </div>
        </div>
      </div>
      <div class="post-header__right">
        ...
        <ul class="sub-right">
          <!-- <li class="sub-right__item"><a>Sửa bài đăng</a></li> -->
          <li class="sub-right__item"><a>Xoá bài đăng</a></li>
          <li class="sub-right__item"><a>Báo cáo</a></li>
        </ul>
      </div>
    </div>
    <div class="post-body">
      <!-- Văn bản -->
      <div class="document">
        <!-- Phần hiển thị giá và nội dung bài đăng -->
        <!-- Bao gồm nội dung công việc -->
        <!-- Mức dự chi của dự án -->
        <!-- Thời gian mong muốn hoàn thành -->
        <!-- //, Extension, Mobile, Website  -->
        <div class="type">Kiểu: TUYỂN DỤNG</div>
        <div class="type">Chi tiết: <span class="detail">
              Là phần mềm điều khiển trình duyệt thực hiện các bước như tạo tài khoản, sau đó có các điền nội dung random vào
          </span> 
        </div>
        <div class="end-cv">Thời gian kết thúc: 12/02/2023 (Bạn sẽ không thể ứng tuyển sau khi kết thúc thời gian này)</div>
      </div>
      <!-- Media -->
      <div class="media flex">
        <div class="media-img">
          <img
            class="media-img__data"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzpAYqaGWbM5KO5sC2VNch6Pjs79JZVgNe9Hz1GYkGQw&s"
            alt=""
          />
        </div>
        <div class="media-img">
          <img
            class="media-img__data"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzpAYqaGWbM5KO5sC2VNch6Pjs79JZVgNe9Hz1GYkGQw&s"
            alt=""
          />
        </div>
        <div class="media-img">
          <img
            class="media-img__data"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzpAYqaGWbM5KO5sC2VNch6Pjs79JZVgNe9Hz1GYkGQw&s"
            alt=""
          />
        </div>
        <div class="media-img">
          <img
            class="media-img__data"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzpAYqaGWbM5KO5sC2VNch6Pjs79JZVgNe9Hz1GYkGQw&s"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="post-bottom flex">
      <div class="post-bottom__left">
        <button class="btn" @click="btnLike()">
          <i class="bx bxs-like" style="color: #04dc1a" v-if="like"></i
          ><i class="bx bx-like" v-else></i>
        </button>
      </div>
      <div class="post-bottom__right">
        <button class="btn" @click="logComment = !logComment">
          <i class="bx bx-message-square-dots"></i>
        </button>
      </div>
      <div class="post-bottom__right">
        <button class="btn"><i class="bx bx-share-alt"></i></button>
      </div>
      <div class="post-bottom__right quote flex">
        <!-- <i class='bx bx-show-alt'></i> -->
        <div class="quote-content">Đã có 5 ứng tuyển</div>
        <button class="btn" @click="btnShow()">
            <i class="bx bx-low-vision" v-if="showPrice"></i>
            <i class="bx bx-show-alt" v-else></i>
        </button>
      </div>
    </div>
    <div class="post-upprice" v-if="logComment">
      <div class="post-price flex">
        <div class="post-price__title">{{ languagePack['[NAME_CV]'] }}:</div>
        <div class="post-price__content">

          <input
            type="text"
            class="price"
            name="price"
            id="price"
            :placeholder="languagePack['[NAME_CV]']"
          />
        </div>
      </div>
      <div class="post-price flex">
        <div class="post-price__title">{{ languagePack['[CV_DETAIL]'] }}:</div>
        <div class="post-price__content">
          <label @click="addFile" class="add_cv"> <i class='bx bx-add-to-queue'></i> Add CV</label>
          <input
          hidden
            type="file"
            class="price file-cv"
            name="price"
            id="price"
            :placeholder="languagePack['[PLACEHOLDER_DAY]']"
          />
        </div>
      </div>
      <div class="post-comment flex">
        <div class="post-comment__left">
          <input
            type="text"
            class="comment"
            name="comment"
            id="comment"
            :placeholder="languagePack['[CV_MORE]']"
          />
        </div>
        <div class="post-comment__right">
          <button class="btn btn-send">
            <i style="line-height: 30px" class="bx bx-send"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.end-cv{
  font-size: 13px;
  color: red;
}
.quote {
  font-size: 13px;
  margin-left: auto;
  align-items: center;
}
.quote i {
    line-height: 26px;
}
.quote-content {
  font-size: 13px;
}
.post-bottom {
  align-items: center;
}
.post-price__title {
  width: 40%;
}
.post-price__content {
  width: 60%;
}
.post-price__content input {
  padding: 5px 10px;
  border: 1px solid rgba(128, 128, 128, 0.202);
  border-radius: 5px;
  font-size: 13px;
  outline: none;
  width: calc(100% - 50px);
}
.post-price {
  margin-bottom: 5px;
  padding: 0 15px;
}
.post-comment {
  width: calc(100% - 5px);
  align-items: center;
  padding: 0 15px;
}
.post-comment__left {
  width: calc(100%);
}
.post-comment__left input {
  width: calc(100%);
  padding: 5px 10px;
  font-weight: 100;
  outline: none;
  border: 1px solid rgba(128, 128, 128, 0.202);
  font-size: 13px;
}
.btn-send {
  width: 45px;
  font-size: 16px;
}
.btn-send:hover {
  /* background-color: aqua; */
  font-weight: 300;
}
.comment {
  width: calc(100% - 50px);
  height: 30px;
  font-size: 16px;
  border: 1px solid rgba(128, 128, 128, 0.342);
  border-radius: 5px;
}
.post-body {
  padding: 5px 10px;
}
.media {
  flex-wrap: wrap;
  width: 100%;
}
.media-img {
  width: 50%;
}
.media-img__data {
  padding: 3px;
  width: 100%;
  max-height: 300px;
}
.post {
  background-color: rgba(255, 255, 255, 0.852);
  min-height: 200px;
  border-radius: 10px;
  max-width: 600px;
  margin: 10px auto;
  padding: 10px;
}
.flex {
  display: flex;
}
.user {
  height: 50px;
  display: flex;
  align-items: center;
}
.user-avata img {
  border-radius: 50%;
  height: 40px;
  width: 40px;
  margin: 0 10px;
  border: 1px solid gray;
}
.user-body__name {
  font-size: 1em;
  margin: 0;
}
.user-body__time {
  font-size: 0.6em;
}
.user-body__time__span {
  color: blue;
}
.post-header__right {
  margin-left: auto;
  margin-right: 15px;
  cursor: pointer;
  position: relative;
}
.sub-right {
  position: absolute;
  top: 100%;
  left: -20px;
  width: 150px;
  background-color: rgba(157, 229, 255, 0.747);
  /* border: 1px solid rgba(128, 128, 128, 0.215); */
  border-radius: 10px;
  margin: 0;
  padding: 5px;
  z-index: 9999;
  font-size: 0.9em;
  visibility: hidden;
  opacity: 0;
  transition: all 1s;
}
.sub-right__item {
  list-style-type: none;
  padding-left: 10px;
  border-radius: 5px;
}
.sub-right__item:hover {
  background-color: antiquewhite;
  transform: scale(1.1);
}
.post-header__right:hover .sub-right {
  visibility: visible;
  opacity: 1;
  top: 50%;
}
</style>
