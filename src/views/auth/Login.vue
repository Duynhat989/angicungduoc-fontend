<script setup>
import { languagePack, setLanguage, LangList,localtionsLang } from "../../languages/index";
import { onMounted } from 'vue';
const setup = () => {
    document.title = languagePack["[SIGN_IN]"]
    
}   
onMounted(()=>{
    setup()
})
</script>

<template>
    <div class="login-form">
        <div class="title">
            <h2>TPWorker.com</h2>
        </div>
        <div class="input-group">
            <input type="text" placeholder="Tên tài khoản">
        </div>
        <div class="input-group">
            <input type="text" placeholder="Tên tài khoản">
        </div>
        <div class="input-group">
            <input type="button" value="Đăng nhập">
        </div>
    </div>
</template>
<style scoped>
</style>
