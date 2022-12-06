<script setup>
const props = defineProps({
    countrie: String
})
</script>

<template>
    <div class="bg-slate-300 border-r border-b shadow-lg border-slate-50 rounded-xl h-10 m-2 p-7 flex justify-center items-center text-white text-xl font-bold hover:scale-125 hover:bg-slate-400 transition">
        {{countrie}}
    </div>
</template>