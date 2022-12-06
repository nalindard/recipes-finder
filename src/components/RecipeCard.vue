<script setup>
import { useRouter } from "vue-router"

const props = defineProps({
    data: Object
})

const router = useRouter()
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
    <div @click="search(data.id)" class="rounded-xl bg-slate-100 shadow-lg mx-2 my-3 overflow-hidden flex items-center cursor-pointer hover:scale-110 transition">
        <img :src="data.img" alt="recipe image" class="w-28 h-28">
        <h2 class="text-slate-600 lg:text-2xl  text-xl font-semibold pl-2"> {{ data.name }}</h2>
        <!-- <h4>{{ data.img }}</h4> -->
        <!-- <h5>ID: {{ data.id }}</h5> -->
    </div>
</template>