<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import RecipeCard from "../components/RecipeCard.vue";

const route = useRoute()
const data = ref([])
const loaded = ref(false)

async function getData() {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${route.params.countrie}`)
    data.value = await res.json()
    loaded.value = true
}
getData()

</script>

<template>
    <div v-if="loaded" class="bg-slate-50 min-h-full pt-12 px-12">
        <h2 class="md:text-5xl sm:text-3xl text-xl px-4 uppercase text-slate-700 py-8 bg-slate-200 text-center">Listing
            all the recipes for countrie
            <span class="text-red-500 font-semibold">"{{ route.params.countrie }}"</span> here!
        </h2>
        <transition appear mode="out-in" name="fade">
            <div class="flex flex-wrap w-full">
                <div v-for="meal in data.meals" :key="meal.idMeal"
                    class="lg:w-3/12 md:w-4/12 sm:w-2/4 w-full flex-grow flex-shrink">
                    <RecipeCard :data="{
                        id: meal.idMeal,
                        name: meal.strMeal,
                        img: meal.strMealThumb
                    }" />
                </div>
            </div>
        </transition>
    </div>
    <transition appear mode="out-in" name="fade" v-else>
        <span class="w-full min-h-screen flex justify-center items-center">
            <h2 class="md:text-7xl text-4xl text-slate-600 font-bold uppercase">Loading...</h2>
        </span>
    </transition>
</template>


<style>
.fade-enter-from {
    opacity: 0;
}

.fade-enter-active {
    transition: opacity 3s ease;
}

.fade-leave-to {
    opacity: 0;
}

.fade-leave-active {
    transition: opacity 3s ease;
}
</style>