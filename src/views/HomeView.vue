<script setup>
const feedList = ['Trending', 'Popular', 'Vegetarian', 'Meety', 'Also search for']
</script>

<template>
  <main>
    <h2>Home</h2>
    <div v-for="feed in feedList" :key="feed" class="mt-4">
      <RouterLink :to="{ name: 'feedList', }" />
      <RouterView :feedData="{ title: feed }" />
    </div>
  </main>
</template>
