<script setup>
import { onMounted, reactive, ref } from "vue";
import {
  languagePack,
  setLanguage,
  LangList,
  localtionsLang,
} from "../../languages/index";
import Headers from "../layouts/web/Header.vue";
import ListItem from "../layouts/web/message/listItem.vue";
import Chat from "../layouts/web/message/Chat.vue";

const isLogined = ref(false);
const lstMessage = ref({})
const inputMessage = ref('')
const setup = () => {
  document.title = languagePack["[HOME]"];
};

const chooseFile = () => {
    document.querySelector('.attach').click()
};
const chooeseMessage = (item)=>{

}
const reloadMountMessage = ()=>{
    lstMessage.value = [
    { 
        userId:false,
        message:"Xin chào"
    },
    { 
        userId:true ,
        message:"Xin chào"
    },
    { 
        userId:true ,
        message:"Xin chào"
    },
    { 
        userId:false ,
        message:"Xin chào"
    },
    { 
        userId:true ,
        message:"Xin chào"
    },
    { 
        userId:false ,
        message:"Xin chào"
    },
    { 
        userId:true ,
        message:"Xin chào"
    },
    ]
  topDow()
}
const topDow = () => { 
    setTimeout(()=>{
        document.querySelector('.chats-message').scrollTop = document.querySelector('.chats-message').clientHeight + 1000
    },500)
}

const addMessage = () =>{ 
    inputMessage.value = ''
    setTimeout(()=>{
            lstMessage.value.push({
            userId:false,
            message:inputMessage.value
        },1000)
    })
    topDow()
}
const handleKeyDown = (event) =>{ 
    const keyPressed = event.key;
    switch (keyPressed) {
        case 'Enter':
          {
            lstMessage.value.push({
                userId:false,
                message:inputMessage.value
            })
            inputMessage.value = ''
          }
          break;
        default:
          console.log('Phím được nhấn:', keyPressed);
          break;
    }
  topDow()
}
onMounted(() => {
  setup()
  reloadMountMessage()
});
</script>

<template>
  <Headers />
  <!-- <Header /> -->
  <main class="main">
    <div class="container">
      <div class="row">
        <div class="col-1"></div>
        <div class="left col-4">
          <!-- //danh sách tin tuyển dụng  -->
          <div class="title">
            <h5 class="title_content">Danh sách tin nhắn</h5>
          </div>
          <ListItem @click="chooeseMessage()"/>
          <ListItem @click="chooeseMessage()"/>
          <ListItem @click="chooeseMessage()"/>
          <ListItem @click="chooeseMessage()"/>
          <ListItem @click="chooeseMessage()"/>
          <ListItem @click="chooeseMessage()"/>
          <ListItem @click="chooeseMessage()"/>
          <ListItem @click="chooeseMessage()"/>
          <ListItem @click="chooeseMessage()"/>
          <ListItem @click="chooeseMessage()"/>
          <ListItem @click="chooeseMessage()"/>
          <ListItem @click="chooeseMessage()"/>
          <ListItem @click="chooeseMessage()"/>
          <ListItem @click="chooeseMessage()"/>
          <ListItem @click="chooeseMessage()"/>
          <ListItem @click="chooeseMessage()"/>
          <ListItem @click="chooeseMessage()"/>
          <ListItem @click="chooeseMessage()"/>
          <ListItem @click="chooeseMessage()"/>
          <ListItem @click="chooeseMessage()"/>
          <ListItem @click="chooeseMessage()"/>
          <ListItem @click="chooeseMessage()"/>
          <ListItem @click="chooeseMessage()"/>
          <ListItem @click="chooeseMessage()"/>
          <ListItem @click="chooeseMessage()"/>
          <ListItem @click="chooeseMessage()"/>
          <ListItem @click="chooeseMessage()"/>
          <ListItem @click="chooeseMessage()"/>
          <ListItem @click="chooeseMessage()"/>
          <ListItem @click="chooeseMessage()"/>
          <ListItem @click="chooeseMessage()"/>
          <ListItem @click="chooeseMessage()"/>
        </div>
        <div class="right col-6">
          <!-- d -->
          <div class="message-box">
            <div class="message-box__title">
                <div class="name-user">
                    NGUYEN HOÀNG THÀNH
                </div>
            </div>
            <div class="message-box__data">
                <div class="chats">
                    <div class="chats-message">
                        <!-- message -->
                        <Chat v-for="(item,index) in lstMessage" :data="item"/>
                    </div>
                    <div class="chats-header">
                        <input class="chats-header__input" @keydown="handleKeyDown" v-model="inputMessage" type="text" placeholder="Nhập tin nhắn ...">
                        <button class="chats-header__send" @click="chooseFile"><i class='bx bx-link-alt' ></i></button>
                        <button class="chats-header__send" @click="addMessage()"><i class='bx bx-send'></i></button>
                        <input type="file" class="attach" hidden>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <div class="col-1"></div>
      </div>
    </div>
  </main>
  <!-- Footer -->
</template>
<style scoped>
.title{
    text-align: center;
    min-height: 40px;
    background-color: #264e86;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}
.title_content{
    color: white;
    margin: 0;
}
.left{
    background-color: white;
    border-radius: 10px;
    padding: 10px;
}
.right{
    border-radius: 10px;
}
.flex{
    display: flex;
}
.chat-right{
    width: 60%;
}
.message-box{
    width: 100%;
    min-height: 90vh;
    background-color: white;
    border-radius: 10px;
}
.message-box__title{
    text-align: center;
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #264e86;
    color: white;
    border-radius: 10px 10px 0px 0px;
}
.chats{
    position: relative;
    height: 100%;
}
.chats-message{
    height: calc(100% - 60px);
    padding: 10px;
    overflow: auto;
    background-color: #f1f1f1;
    border-radius: 10px;
    padding-bottom: 40px;
}
.chats-message::-webkit-scrollbar {
  width: 3px; /* Độ rộng của scrollbar */
  height: 0;
}
.chats-message::-webkit-scrollbar-thumb {
  background-color: #000000; /* Màu nền của thanh cuộn */
  border-radius: 4px; /* Độ cong của các góc của thanh cuộn */
}
.chats-message::-webkit-scrollbar-thumb:hover {
  background-color: #676767; /* Màu nền của thanh cuộn khi di chuột qua */
}
.chats-message::-webkit-scrollbar-track {
  background-color: #f1f1f1; /* Màu nền của vùng track của scrollbar */
}
.chats-header{
    position: absolute;
    bottom: 10px;
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    border-radius: 10px;
}
.message-box__data{
    padding: 15px;
    width: 100%;
    height: calc(90vh - 50px);
}
.chats-header__input{
    width: calc(100% - 50px);
    padding: 5px;
    padding-left: 7px;
    border-radius: 5px;
    outline: none;
    font-size: 13px;
    border: 1px solid rgba(190, 185, 185, 0.495);
}
.chats-header__send{
    width: 50px;
    border: none;
    background: none;
    font-size: large;
}
.left{
    max-height: 90vh;
    overflow: auto;
}
.left::-webkit-scrollbar {
  width: 3px; /* Độ rộng của scrollbar */
  height: 0;
}
.left::-webkit-scrollbar-thumb {
  background-color: #000000; /* Màu nền của thanh cuộn */
  border-radius: 4px; /* Độ cong của các góc của thanh cuộn */
}
.left::-webkit-scrollbar-thumb:hover {
  background-color: #676767; /* Màu nền của thanh cuộn khi di chuột qua */
}
.left::-webkit-scrollbar-track {
  background-color: #f1f1f1; /* Màu nền của vùng track của scrollbar */
}
.main .container{
  background:none;
}
</style>
