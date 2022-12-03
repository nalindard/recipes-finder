<script setup>
import { useRoute } from "vue-router";

const props = defineProps({
    feedData: Object
})

const route = useRoute()

</script>

<template>
    <div class="bg-slate-100">
        <h2 class="text-xl text-slate-900 uppercase">{{ feedData.title }}</h2>
        <div class="w-full h-44 bg-slate-200">
        </div>
    </div>
</template>