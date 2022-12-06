<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
</script>

<template>
  <div class="flex flex-col">
    <NavBar class="fixed top-0 shadow-xl"/>
    <router-view class="mt-14"/>
  </div>
</template>