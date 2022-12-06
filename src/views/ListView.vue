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
    <div>
        <div class="bg-slate-200">
            <h2 class="text-5xl uppercase text-slate-700">Searched for <span class="text-red-500">
                    {{ search }}
                </span> !</h2>
        </div>
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


<!-- params  {{ route.params }} -->
<!-- query  {{ route.query }} -->