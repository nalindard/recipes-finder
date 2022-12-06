<script setup>
import SearchBar from '../components/SearchBar.vue';
import Letter from '../components/Letter.vue'
import CountriesList from '../components/CountriesList.vue';
import IngredientCard from '../components/IngredientCard.vue'
import { useRouter } from 'vue-router';
import { useRecipeStore } from '../stores/RecipeStore';
import { ref, watch } from 'vue';

const recipeStore = useRecipeStore()
recipeStore.getCountries()
recipeStore.getIngredients()

const coun = ref([])
const ingre = ref([])

setTimeout(() => {
    coun.value = recipeStore.countrieList.meals.map(c => c.strArea)
    // console.log('Countri list', coun.value);

    ingre.value = recipeStore.ingreList_2.meals.map(i => i.strIngredient)
    // console.log('Ingre list', ingre.value);
}, 4000);



const router = useRouter()
const Letters = recipeStore.letterList
const Ingredients = recipeStore.ingreList
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
        <div class="flex bg-slate-200 mb-12 flex-wrap justify-around px-4 py-7 rounded">
            <div v-for="countrie in coun" :key="{ countrie }">
                <router-link :to="{ name: 'countries', params: { countrie: countrie } }">
                    <CountriesList :countrie="countrie" />
                </router-link>
            </div>
        </div>

        <!-- Ingredient List -->
        <h2 class="md:text-3xl text-2xl bg-slate-300 px-4 py-7 font-semibold text-white ">Search by ingredient...</h2>
        <div class="flex bg-slate-200 flex-wrap justify-around px-4 py-7 rounded">
            <div v-for="ingredient in ingre" :key="ingredient">
                <router-link :to="{ name: 'ingredients', params: { ingredient: ingredient } }">
                    <IngredientCard :ingredient="ingredient" />
                </router-link>
            </div>
        </div>

    </div>
</template>
