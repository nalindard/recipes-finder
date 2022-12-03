<script setup>
import SearchBar from '../components/SearchBar.vue';
import Letter from '../components/Letter.vue'
import IngredientCard from '../components/IngredientCard.vue'
import { useRouter } from 'vue-router';
const router = useRouter()
const Letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',]
const Ingredients = ['suger', 'cocoa-butter', 'milk', 'chocolate', 'soy', 'salt', 'egg', 'paper']
function search({ input }) {
    router.push({
        name: 'list',
        // params: {
        //     view: input
        // },
        query: {
            search: input
        }
    })
}
</script>

<template>
    <div class="bg-gray-400 p-4 flex flex-col">
        <SearchBar @search="search" class="float-"/>

        <h2 class="text-xl font-semibold text-slate-800 mb-4 mt-7">Search by letter...</h2>
        <div class="flex bg-slate-200 justify-center  mb-12">
            <div v-for="letter in Letters" :key="{ letter }">
                <router-link :to="{ name: 'letters', params: { key: letter } }">
                    <Letter :letter="letter" />
                </router-link>
            </div>
        </div>

        <h2 class="text-xl font-semibold text-slate-800 mb-4">Search by ingredient...</h2>
        <div class="flex bg-slate-700">
            <div v-for="ingredient in Ingredients" :key="ingredient">
                <router-link :to="{ name: 'ingredients', params: { ingredient: ingredient } }">
                    <IngredientCard :ingredient="ingredient"/>
                </router-link>
            </div>
        </div>

    </div>
</template>