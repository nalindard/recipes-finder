<script setup>
import { ref } from 'vue';
const emit = defineEmits(['search'])

const input = ref('')
</script>

<template>
    <div class="flex items-center bg-slate-300 w-64 rounded-full py-2 pl-2">
        <input type="search" v-model="input" class="border-slate-800 rounded-2xl px-4 py-2 text-sm"
            placeholder="Search here...">
        <button @click="emit('search', {input: input})" class="text-2xl  px-2">🔍</button>
    </div>
</template>