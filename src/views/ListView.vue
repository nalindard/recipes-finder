<script setup>
import { markRaw, ref, watch } from "vue";
import { useRoute } from "vue-router";
import RecipeCard from "../components/RecipeCard.vue";

const route = useRoute()
const search = route.query.search

const data = ref([])


async function getData() {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    data.value = await res.json()
}
getData()

</script>

<template>
    <div class="bg-slate-50 min-h-full pt-12 px-12">
        <div >
            <h2 class="md:text-5xl sm:text-3xl text-xl px-4 uppercase text-slate-700 py-8 bg-slate-100 text-center rounded">Showing all the recipes for
                <span class="text-red-500 font-semibold">"{{ search }}"</span> !
            </h2>
        </div>
        <div class="flex flex-wrap w-full">
            <div v-for="meal in data.meals" :key="meal.idMeal" class="lg:w-3/12 md:w-4/12 sm:w-2/4 w-full">
                <RecipeCard :data="{
                    id: meal.idMeal,
                    name: meal.strMeal,
                    img: meal.strMealThumb
                }" />
            </div>
        </div>
    </div>
</template>


<!-- params  {{ route.params }} -->
<!-- query  {{ route.query }} -->