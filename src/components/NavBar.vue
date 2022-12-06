<script setup>
</script>

<template>
    <nav class="bg-slate-300 font-bold w-full py-2 px-7  flex justify-between items-center bg-opacity-70 backdrop-blur-sm">
        <div class="md:text-2xl text-xl uppercase font-bold text-slate-600">
            <router-link :to="{ name: 'home' }">Recipes</router-link>
        </div>
        <div class="px-4 py-2 md:text-xl text-lg text-slate-600">
            <router-link :to="{ name: 'search' }" class="pr-4 hover:text-slate-900 uppercase">Search</router-link>
            <router-link :to="{ name: 'about' }" class="hover:text-slate-900 uppercase">About</router-link>
        </div>
    </nav>
</template>

<style scoped>
nav{
    z-index: 100;
}
</style>