<script setup>
</script>

<template>
    <div>
        <progress class="progress progress-info w-56" value="0" max="100"></progress>
        <progress class="progress progress-info w-56" value="10" max="100"></progress>
        <progress class="progress progress-info w-56" value="40" max="100"></progress>
        <progress class="progress progress-info w-56" value="70" max="100"></progress>
        <progress class="progress progress-info w-56" value="100" max="100"></progress>
    </div>
</template>

<style scoped>
div{
    display: flex;
    flex-direction: column;
    gap: 2rem;
}
</style>