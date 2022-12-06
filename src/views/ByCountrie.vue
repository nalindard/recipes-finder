<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import RecipeCard from "../components/RecipeCard.vue";

const route = useRoute()
const data = ref([])

async function getData() {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${route.params.countrie}`)
    data.value = await res.json()
}
getData()

</script>

<template>
    <div class="bg-slate-50 min-h-full pt-12 px-12">
        <h2 class="md:text-5xl sm:text-3xl text-xl px-4 uppercase text-slate-700 py-8 bg-slate-200 text-center">Listing all the recipes for countrie
            <span class="text-red-500 font-semibold">"{{ route.params.countrie }}"</span> here!
        </h2>
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