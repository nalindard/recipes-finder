<script setup>
const props = defineProps({
    letter: String
})
</script>

<template>
    <div class="bg-slate-500 w-10 h-10 m-2 flex justify-center items-center text-white text-xl font-bold">
        {{letter}}
    </div>
</template>