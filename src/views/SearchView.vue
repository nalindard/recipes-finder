<script setup>
import SearchBar from '../components/SearchBar.vue';
import Letter from '../components/Letter.vue'
import CountriesList from '../components/CountriesList.vue';
import IngredientCard from '../components/IngredientCard.vue'
import { useRouter } from 'vue-router';
import { useRecipeStore } from '../stores/RecipeStore';
import { reactive, ref, watch } from 'vue';

const recipeStore = useRecipeStore()
recipeStore.getCountries()
recipeStore.getIngredients()

const coun = ref([])
const ingre = ref([])
const Letters = recipeStore.letterList

let intervelID = setInterval(() => {
    let Cloading = recipeStore.cLoading ? true : false
    let Iloading = recipeStore.iLoading ? true : false

    console.log('Loading --> ');

    if (!Cloading) coun.value = recipeStore.countriNames.sort()
    if (!Iloading) ingre.value = recipeStore.ingreNames.sort()
    if (!Cloading && !Iloading) clearInterval(intervelID)

}, 100);

const router = useRouter()
function search({ input }) {
    router.push({
        name: 'list',
        query: {
            search: input
        }
    })
}
</script>

<template>
    <div class="bg-slate-100 md:p-12 p-4 flex flex-col min-h-full">
        <div class="md:flex justify-between items-center bg-slate-300 rounded pb-6 md:pb-0">
            <h2 class="md:text-3xl text-2xl  px-4 py-7 font-semibold text-white">Search name here...</h2>
            <SearchBar @search="search" class="mr-4 ml-4" />
        </div>

        <!-- Letter List -->
        <h2 class="md:text-3xl text-2xl bg-slate-300 px-4 py-7 font-semibold text-white  mt-7">Search by letter...</h2>
        <div class="flex bg-slate-200 justify-center flex-wrap  mb-12 px-4 py-7 rounded">
            <div v-for="letter in Letters" :key="{ letter }">
                <router-link :to="{ name: 'letters', params: { key: letter } }">
                    <Letter :letter="letter" />
                </router-link>
            </div>
        </div>

        <!-- Country List -->
        <h2 class="md:text-3xl text-2xl bg-slate-300 px-4 py-7 font-semibold text-white  mt-7">Search by country...</h2>
        <div class="flex bg-slate-200 mb-12 flex-wrap md:justify-around justify-evenly  px-4 py-7 rounded">
            <div v-for="countrie in coun" :key="{ countrie }" class="flex-grow w-2/5 md:w-4/12 lg:w-3/12">
                <router-link :to="{ name: 'countries', params: { countrie: countrie } }">
                    <CountriesList :countrie="countrie" />
                </router-link>
            </div>
        </div>

        <!-- Ingredient List -->
        <h2 class="md:text-3xl text-2xl bg-slate-300 px-4 py-7 font-semibold text-white ">Search by ingredient...</h2>
        <div class="flex bg-slate-200 flex-wrap justify-around px-4 py-7 rounded">
            <div v-for="ingredient in ingre" :key="ingredient" class="flex-grow">
                <router-link :to="{ name: 'ingredients', params: { ingredient: ingredient } }">
                    <IngredientCard :ingredient="ingredient" />
                </router-link>
            </div>
        </div>

    </div>
</template>
