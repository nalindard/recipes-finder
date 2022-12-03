<script setup>
import { useRoute } from "vue-router";

const route = useRoute()

</script>

<template>
    <div class="bg-slate-200">
            <h2 class="text-5xl uppercase text-slate-700">List all the recipes for countrie
                <span class="text-red-500">{{ route.params.countrie }}</span> here!
            </h2>
        </div>
</template>