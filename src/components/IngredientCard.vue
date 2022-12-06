<script setup>
const props = defineProps({
    ingredient: String
})
</script>

<template>
    <div class="bg-slate-300 rounded-xl border-r border-b shadow-lg border-slate-50 h-16 m-2 py-2 px-7 flex justify-center items-center text-white text-2xl font-bold uppercase hover:scale-125 hover:bg-slate-400 transition">
        {{ ingredient }}
    </div>
</template>