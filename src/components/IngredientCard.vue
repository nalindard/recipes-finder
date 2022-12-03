<script setup>
const props = defineProps({
    ingredient: String
})
</script>

<template>
    <div class="bg-gray-500 h-16 m-2 py-2 px-7 flex justify-center items-center text-white text-2xl font-bold uppercase">
        {{ ingredient }}
    </div>
</template>