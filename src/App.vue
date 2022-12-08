<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
</script>

<template>
  <div class="flex flex-col">
    <NavBar class="fixed top-0 shadow-xl"/>
    <!-- <router-view class="mt-14"/> -->

    <router-view v-slot="{ Component }" class="mt-14">
      <transition name="route" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>

  </div>
</template>

<style>
/* route transitions */
.route-enter-from {
  opacity: 0;
  scale: 0.92;
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-to {
  opacity: 0;
  scale: 0.92;
}

.route-leave-active {
  transition: all 0.2s linear;
}
</style>