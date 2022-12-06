<script setup>
import { ref } from 'vue';
const emit = defineEmits(['search'])

const input = ref('')
</script>

<template>
    <form>
        <div class="flex items-center bg-slate-200 md:w-64 w-full rounded-full py-2 pl-2">
            <input type="search" v-model="input" class="border-slate-800 w-full rounded-2xl px-4 py-2 text-sm"
                placeholder="Search here...">
            <button type="submit" @click.prevent="emit('search', { input: input })" class="text-2xl  px-2 ">
                <svg class="text-slate-50 font-extrabold" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                    stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <desc></desc>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <circle cx="10" cy="10" r="7"></circle>
                    <line x1="21" y1="21" x2="15" y2="15"></line>
                </svg>
            </button>
        </div>
    </form>
</template>