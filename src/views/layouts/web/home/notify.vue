<style scoped>
.notify{

}
.notify-content{
    padding: 10px;
    min-height: 200px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.137) 1.95px 1.95px 2.6px;
    border: 1px solid rgba(156, 155, 155, 0.24);
}
</style>
<template>
    <div class="notify">
        <div class="notify-content">
            <div class="notify_title">
                <h6>Thông báo Admin</h6>
            </div>
            <div class="notify-body">
                <Post />
                <Post />
            </div>
        </div>
    </div>
</template>
<script setup>
import {
    languagePack,
    setLanguage,
    LangList,
    localtionsLang,
} from "../../../../languages/index";
import { ref, onMounted,watch } from "vue";
import { useRouter } from 'vue-router';
import Post from '../../web/home/post.vue'
const router = useRouter();
const carouselKey = ref(0);

</script>