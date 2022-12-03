<script setup>
const props = defineProps({
    countrie: String
})
</script>

<template>
    <div class="bg-slate-400  h-10 m-2 p-7 flex justify-center items-center text-white text-xl font-bold">
        {{countrie}}
    </div>
</template>