<script setup>
</script>

<template>
    <nav class="bg-slate-200 font-bold w-full p-2  flex justify-between items-center">
        <div class="text-2xl uppercase font-bold text-yellow-900">
            <router-link :to="{ name: 'home' }">Sweet-🍍</router-link>
        </div>
        <div class="px-4 py-2 text-xl text-yellow-900">
            <router-link :to="{ name: 'search' }" class="px-2 hover:text-yellow-700">Search</router-link>
            <router-link :to="{ name: 'about' }" class="hover:text-yellow-700">About</router-link>
        </div>
    </nav>
</template>

<style scoped>

</style>