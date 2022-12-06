<script setup>
// import { markRaw } from 'vue';
// import { useRecipeStore } from '../stores/RecipeStore';

// const recipeStore = useRecipeStore()

// recipeStore.getCountries()
// const list = recipeStore.countrieList.meals
// console.log('HomeView -- ', list)

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
