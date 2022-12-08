<script setup>
const props = defineProps({
    letter: String
})
</script>

<template>
    <div
        class="bg-slate-300 text-white transition shadow-lg border-r border-b border-slate-50 rounded w-10 h-10 m-2 flex justify-center items-center text-xl font-bold hover:scale-125 hover:bg-slate-400">
        {{ letter }}
    </div>
</template>