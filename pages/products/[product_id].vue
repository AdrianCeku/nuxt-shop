<template>
    <div>
        <div class="grid grid-cols-2 transition shadow-md place-items-center py-10">
            <div class="grid">
                <img class="min-w-40 min-h-40 max-w-80 max-h-80 object-contain mb-2 hover:scale-110 transition" :src="product.image" :alt="product.title">
                <p class="text-center text-green-500 font-semibold m-3">In stock</p>
            </div>
            <div class="grid items-center justify-items-center">
                <p class="text-center font-semibold m-1 text-3xl max-w-80">{{ product.title }}</p>
                <p class="text-center m-2 font-bold text-xl">{{ product.price }}€</p>
                <button class="text-center bg-yellow-400 rounded-full mt-5 p-1 hover:scale-105 hover:bg-yellow-300 transition font-semibold px-5">Add to cart</button>
            </div>
        </div>

        <div class="mt-5 text-2xl p-4">Similar Products

            <div v-for="product in similar_products" class="grid grid-cols-2 transition shadow-md place-items-center">
                <NuxtLink :to="`/products/${product.id}`">
                    <img class="w-40 h-40 object-contain mb-2" :src="product.image" :alt="product.title">
                    <p class="text-center font-semibold m-1">{{ product.title }}</p>
                    <p class="text-center text-green-500 text-sm font-semibold m-1">In stock</p>
                    <p class="text-center m-1 font-bold">{{ product.price }}€</p>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
    const { product_id } = useRoute().params
    const { data:product } = await useFetch(`https://fakestoreapi.com/products/${product_id}`, {key: product_id})
    const { data:similar_products } = await useFetch(`https://fakestoreapi.com/products/category/${product.category}`)
</script>

<style scoped>

</style>