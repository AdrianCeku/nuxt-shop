<template>
    <div class="container mx-auto">
        <div class="flex">
            <NuxtLink :to="`/products/category/${category}`" v-for="category in Categories" class="m-3 bg-slate-100 p-2 rounded-md hover:scale-105 hover:bg-slate-200 transition"> {{ category }}</NuxtLink>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            <div v-for="product in products" class="m-5">
                <NuxtLink :to="`/products/${product.id}`">
                    <div class="grid h-full w-full grid-cols-1 items-center justify-items-center rounded-md border-4 border-slate-200  border-opacity-100 p-4 hover:scale-105 transition">
                        <img class="w-40 h-40 object-contain mb-2" :src="product.image" :alt="product.title">
                        <p class="text-center text-green-500 text-sm font-semibold m-1">In stock</p>
                        <p class="text-center font-semibold m-1">{{ product.title }}</p>
                        <p class="text-center m-1 font-bold">{{ product.price }}€</p>
                        <button class=" flex text-center bg-yellow-400 rounded-full mt-5 p-1 hover:scale-105 hover:bg-yellow-300 transition font-semibold px-5">
                            <i class="material-icons">visibility</i>
                            View More
                        </button>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
    const {data:Categories} = await useFetch("https://fakestoreapi.com/products/categories")
    const { category } = useRoute().params
    const { data:products } = await useFetch(`https://fakestoreapi.com/products/category/${category}`)
</script>

<style scoped>

</style>