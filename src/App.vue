x<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footers from "./views/layouts/web/Footer.vue";
</script>
<template>
  <RouterView />
  <Footers />
  <notifications position="top right" />
</template>