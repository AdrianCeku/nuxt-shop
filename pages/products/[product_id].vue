<template>
    <div>
        <h1>{{ product_id }}</h1>
    </div>
</template>

<script setup>
    const { product_id } = useRoute().params
</script>

<style scoped>

</style>