<style scoped>
.notify{
    padding-left: 10px;
}
.notify-content{
    border: 1px solid rgba(128, 128, 128, 0.24);
    padding: 10px;
    min-height: 200px;
    border-radius: 10px;
    box-shadow: rgba(114, 114, 114, 0.212) 1.95px 1.95px 2.6px;
}
</style>
<template>
    <div class="notify">
        <div class="notify-content">
            <div class="notify_title">
                <h6>Hoạt động gần đây</h6>
            </div>
            <div class="notify-body">
                <ul>
                    <li>
                        <div class="task flex">
                            <h6 class="task-user">
                                <i class='bx bxs-user-circle' ></i>
                                Nguyễn Tiến Hoàng
                            </h6>&ensp;
                            <div class="task-msg">
                                đã mua 3
                            </div>
                        </div>
                    </li>
                </ul>
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
const router = useRouter();
const carouselKey = ref(0);

</script>