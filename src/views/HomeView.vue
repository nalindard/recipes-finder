<script setup>
// import { markRaw } from 'vue';
// import { useRecipeStore } from '../stores/RecipeStore';

// const recipeStore = useRecipeStore()

// recipeStore.getCountries()
// const list = recipeStore.countrieList.meals
// console.log('HomeView -- ', list)
const name = '???'
// const feedList = ['Trending', 'Popular', 'Vegetarian', 'Meety', 'Also search for']
const feedList = ['Trending', 'Popular', 'Also search for',]

</script>

<template>
  <main>
    <div class="banner-img">
      <div class="banner flex flex-col justify-center items-center h-screen relative">
        <h2 class="text-slate-50 md:text-9xl text-5xl font-bold text-center">Welcome to {{ name }}!</h2>
        <div class="absolute bottom-28 text-center">
          <h4 class="text-slate-50 text-xl italic">Search for any of your favorite recipe using</h4>
          <h4 class="text-slate-50 text-xl italic">Name, Ingredients </h4>
          <h4 class="text-slate-50 text-xl italic">or even by Letters...!</h4>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="px-8 py-12 bg-slate-300 bg-opacity-90 min-h-screen">
      <div v-for="feed in feedList" :key="feed" class="mt-4">
        <RouterLink :to="{ name: 'feedList', }" />
        <RouterView :feedData="{ title: feed }" />
      </div>
    </div>
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Amita:wght@700&display=swap');

.banner-img {
  background: url('https://images.unsplash.com/photo-1542990253-a781e04c0082?ixlib=rb-4.0.3&dl=maddi-bazzocco-UhrHTmVBzzE-unsplash.jpg&q=80&fm=jpg&crop=entropy&cs=tinysrgb');
  background-position: center;
  background-size: cover;
}

.banner {
  background: linear-gradient(rgba(180, 195, 214, 0.27), rgba(71, 85, 105, 1));
}

.banner h2 {
  font-family: 'Amita', cursive;
  /* background: linear-gradient(rgb(255, 255, 255),rgb(0, 26, 255)); */
  /* -webkit-background-clip: text; */
  /* background-clip: text; */
  /* -webkit-text-fill-color: transparent; */
}
</style>