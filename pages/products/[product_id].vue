<template>
    <div>
        <div class="grid grid-cols-2 transition place-items-center py-10">
            <div class="grid">
                <img class=" md:max-w-80 md:max-h-80 object-contain mb-2 hover:scale-110 transition" :src="product.image" :alt="product.title">
            </div>
            <div class="grid items-center justify-items-center">
                <p class="text-center font-semibold md:text-3xl text-xl max-w-80">{{ product.title }}</p>
                <p class="text-center text-green-500 font-semibold mt-1">In stock</p>
                <p class="text-center mt-1 font-bold text-xl">{{ product.price }}€</p>
                <button class=" flex text-center bg-yellow-400 rounded-full mt-5 p-1 hover:scale-105 hover:bg-yellow-300 transition font-semibold px-5">
                    <i class="material-icons">add_shopping_cart</i>
                    Add to cart
                </button>
            </div>
        </div>

        <div class="mt-5 text-2xl p-4 shadow-md">
            <p class="font-medium">Description</p>
            <p class="my-2 text-xl max-w-6xl">{{ product.description }}</p>
        </div>
        <div class="mt-5 text-2xl p-4">
            <p class="font-bold text-xl p-1">Similar Products</p>
            <div class="flex flex-row flex-wrap mt-5">
                <div v-for="product in similar_products" class="grid grid-cols-1 transition shadow-md items-center justify-items-center w-80 mx-auto mb-5">
                    <NuxtLink :to="`/products/${product.id}?category=${category}`">
                        <img class="w-40 h-40 object-contain mb-2 mx-auto" :src="product.image" :alt="product.title">
                        <p class="text-center font-semibold m-1">{{ product.title }}</p>
                        <p class="text-center text-green-500 text-sm font-semibold m-1">In stock</p>
                        <p class="text-center m-1 font-bold">{{ product.price }}€</p>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const route = useRoute()
    const category = route.query.category
    const { product_id } = useRoute().params
    const { data:product } = await useFetch(`https://fakestoreapi.com/products/${product_id}`, {key: product_id})
    const { data:similar_products } = await useFetch(`https://fakestoreapi.com/products/category/${category}`)
</script>

<style scoped>

</style>