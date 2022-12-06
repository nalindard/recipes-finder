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
    <div class="bg-slate-200">
        <h2 class="text-5xl uppercase text-slate-700">List all the recipes for countrie
            <span class="text-red-500">{{ route.params.countrie }}</span> here!
        </h2>
        <div class="flex flex-wrap w-full">
            <div v-for="meal in data.meals" :key="meal.idMeal" class="w-4/12">
                <RecipeCard :data="{
                    id: meal.idMeal,
                    name: meal.strMeal,
                    img: meal.strMealThumb
                }" />
            </div>
        </div>
    </div>
</template>