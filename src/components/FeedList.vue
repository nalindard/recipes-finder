<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { setToLocalStorage, checkLocalStorage, getLocalStorage } from '../stores/LocalStorage'


const props = defineProps({
    feedData: Object
})

const router = useRouter()
const res = ref([])

let resh = []

if (checkLocalStorage(props.feedData.title)) {
    resh = getLocalStorage(props.feedData.title)
    res.value = resh
} else {
    async function get() {
        for (let i = 0; i <= 3; i++) {
            const res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
            const data = await res.json()
            resh.push(data.meals[0])
        }
        res.value = resh
        setToLocalStorage(props.feedData.title, resh)
    }
    get()
}


function search(id) {
    router.push({
        name: 'details',
        params: {
            id: id
        },
    })
}

</script>

<template>
    <div class="bg-slate-100 w-full rounded px-4 pt-7">
        <h2 class="text-3xl text-slate-600 font-bold py-4 px-4 bg-slate-200 uppercase">{{ feedData.title }}</h2>
        <div class="flex flex-wrap justify-evenly items-center py-7">
            <div @click="search(r.idMeal)"
                class="lg:w-1/5 md:w-1/3 w-full bg-slate-200 relative m-2 shadow-2xl overflow-hidden rounded-lg hover:scale-110 transition cursor-pointer"
                v-for="r in res" :key="r.dMeal">
                <img :src="r.strMealThumb + '/preview'" class="w-full rounded-lg">
                <span class="overlayer"></span>
                <h2 class="absolute bottom-2 text-white text-lg font-bold w-full text-center name">{{ r.strMeal }}</h2>
            </div>
        </div>
    </div>
</template>

<style scoped>
.overlayer {
    background: linear-gradient(rgba(180, 195, 214, 0.27), rgba(71, 85, 105, 1));
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 10;
}

.name {
    z-index: 20;
}
</style>