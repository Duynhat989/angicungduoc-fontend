<script setup>
import {
  languagePack,
  setLanguage,
  LangList,
  localtionsLang,
} from "../../../../languages/index";
import { ref, onMounted,defineProps } from "vue";
const props = defineProps({
  data: Object
});
const left = ref(true)
onMounted(()=>{
    left.value = props.data.userId
})
</script>
<template>
  <div class="chat flex" v-if="left">
    <div class="chat-left">
      <div class="chat-left__avata">
        <img width="30" class="chat-logo" src="../../../../assets/avata.jpeg" alt="" srcset="" />
      </div>
    </div>
    <div class="chat-right">
        {{ props.data.message }}
    </div>
  </div>
  <div class="chat right flex" v-else>
    <div class="chat-right">
      {{ props.data.message }}
    </div>
    <div class="chat-left">
      <div class="chat-left__avata">
        <img width="30" class="chat-logo" src="../../../../assets/avata.jpeg" alt="" srcset="" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.chat{
    width: 100%;
}
.right{
    justify-content: end;
}
.chat-right{
    margin-left: auto;
}
.chat-logo{
    border-radius: 50%;
}
.chat-left{
    display: flex;
    justify-content: end;
    align-items: end;
}
.flex{
    display: flex;
}
.chat-right{
    max-width:60%;
    margin: 2px;
    padding: 5px;
    border-radius: 5px;
    background-color: antiquewhite;
    font-size: 13px;
}
</style>
