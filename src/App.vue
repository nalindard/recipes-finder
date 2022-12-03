<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
</script>

<template>
  <div class="flex flex-col">
    <NavBar />
    <br>
    <router-view />
  </div>
</template>