<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute()
const data = ref([])
const ingre = ref([])

onMounted(() => {
    getData()
})
async function getData() {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${route.params.id}`)
    const meal = await res.json()
    data.value = meal.meals[0]

    clearIngredients(meal.meals[0])
}

function clearIngredients(data) {
    const iANDm = new Map([
        [data.strIngredient1, data.strMeasure1],
        [data.strIngredient2, data.strMeasure2],
        [data.strIngredient3, data.strMeasure3],
        [data.strIngredient4, data.strMeasure4],
        [data.strIngredient5, data.strMeasure5],
        [data.strIngredient6, data.strMeasure6],
        [data.strIngredient7, data.strMeasure7],
        [data.strIngredient8, data.strMeasure8],
        [data.strIngredient9, data.strMeasure9],
        [data.strIngredient10, data.strMeasure10],
        [data.strIngredient11, data.strMeasure11],
        [data.strIngredient12, data.strMeasure12],
        [data.strIngredient13, data.strMeasure13],
        [data.strIngredient14, data.strMeasure14],
        [data.strIngredient15, data.strMeasure15],
        [data.strIngredient16, data.strMeasure16],
        [data.strIngredient17, data.strMeasure17],
        [data.strIngredient18, data.strMeasure18],
        [data.strIngredient19, data.strMeasure19],
        [data.strIngredient20, data.strMeasure20],
    ]);
    ingre.value = iANDm
}

</script>

<template>
    <div class="flex w-full flex-col py-8  md:px-10 px-4 min-h-screen bg-slate-100">
        <h2 class="text-slate-600 md:text-5xl text-2xl font-bold uppercase py-8 text-center bg-slate-300 mb-7">{{ data.strMeal }}</h2>
        <div class=" flex md:flex-row flex-col items-start">
            <!-- <h4>{{ data }}</h4> -->
            <div class="flex justify-start items-start md:w-6/12 w-full ">
                <!-- <div class="w-full"> -->
                <div class=" w-full flex justify-center flex-col ">
                    <div class="md:w-5/6 w-full text-justify bg-slate-200 px-4">
                        <!-- <h4 class="hidden">{{ data.idMeal }}</h4> -->
                        <h4 class="md:text-2xl text-lg text-slate-600 font-bold pt-2">Recipe From: {{ data.strArea }}</h4>
                        <h4 class="md:text-2xl text-lg text-slate-600 font-bold pt-2">Category: {{ data.strCategory }}</h4>
                        <!-- <h4 class="hidden">{{ data.strMeal }}</h4> -->
                        <!-- <h4>{{ data.strInstructions }}</h4> -->
                        <!-- <h4 class="hidden">{{ data.strMealThumb }}</h4> -->
                        <h4 class="md:text-2xl text-lg text-slate-600 font-bold uppercase py-2">Tags: {{ data.strTags }}</h4>
                        <iframe :href="data.strYoutube" class="w-full h-24 bg-red-400 hidden"></iframe>
                    </div>
                    <div class="md:w-5/6 w-full pt-7">
                        <img :src="data.strMealThumb" alt="img" class="w-fit rounded-md shadow-lg">
                    </div>
                    <div class="flex w-full py-12">
                        <table class="md:w-5/6 w-full bg-slate-50 border shadow-lg uppercase ">
                            <tr class="border-b border-slate-400 ">
                                <th
                                    class="text-lg border-b border-r  border-slate-400 font-medium text-slate-600 bg-slate-300 md:px-6 px-2 py-2 text-center">
                                    Ingredirnt</th>
                                <th class="text-lg font-medium text-slate-600 bg-slate-300 md:px-6 px-2 py-2 text-center">
                                    Measurement</th>
                            </tr>
                            <tr v-for="item in ingre" :key="item.key" class="border-b border-slate-400">
                                <td v-if="(item[0].length != 0)"
                                    class="text-base text-slate-600 bg-slate-100 border-r  border-slate-400 font-light md:px-6 px-2 py-2 whitespace-nowrap text-center">
                                    {{ item[0] }}</td>
                                <td v-if="(item[0].length != 0)"
                                    class="text-base text-slate-600 bg-slate-100  font-light md:px-6 px-2 py-2 whitespace-nowrap text-center">
                                    {{ item[1] }}</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <!-- </div> -->
            </div>

            <!--  -->
            <div class="flex flex-col  justify-start md:w-6/12 w-full shadow-xl pb-8 md:px-12 ">
                <div class="w-full ">
                    <h2 class="text-4xl font-semibold  text-slate-600 bg-slate-200 py-4 text-center">How to prepare ?
                    </h2>
                    <p class="text-lg text-slate-700 py-12 md:px-0 px-2 text-justify">{{ data.strInstructions }}</p>
                </div>
                <a :href="data.strYoutube"
                    class="text-lg text-slate-50 font-semibold px-4 py-2 bg-red-600 hover:bg-red-800 transition rounded-lg shadow-xl text-center mb-12">YouTube</a>
            </div>
        </div>
    </div>
</template>
