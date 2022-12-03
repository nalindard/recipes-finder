<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute()
const viewBy = ref('')
const searchFor = ref('')

onMounted(() => {
    if (route.params.ingredient) viewBy.value = 'byIngredient'
    if (route.params.key) viewBy.value = 'byKey'
    if (route.query.search) viewBy.value = 'bySearch'
})
</script>

<template>
    <div>
        <div class="bg-slate-200" v-if="viewBy === 'byKey'">
            <h2 class="text-5xl uppercase text-slate-700">List all the recipes for letter
                <span class="text-red-500">{{ route.params.key }}</span> here!
            </h2>
        </div>
        <!-- --------------------- -->
        <div class="bg-slate-200" v-if="viewBy === 'byIngredient'">
            <h2 class="text-5xl uppercase text-slate-700">List all the recipes for ingredient
                <span class="text-red-500"> {{ route.params.ingredient }} </span> here!
            </h2>
        </div>
        <!-- --------------------- -->
        <div class="bg-slate-200" v-if="viewBy === 'bySearch'">
            <h2 class="text-5xl uppercase text-slate-700">Searched for <span class="text-red-500">
                    {{ route.query.search }}
                </span> !</h2>
        </div>
    </div>
</template>


<!-- params  {{ route.params }} -->
<!-- query  {{ route.query }} -->