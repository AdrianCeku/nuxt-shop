<template>
    <div class="container mx-auto grid place-items-center">
        <h1 class="text-4xl font-bold mt-4 mb-10">Welcome to <span class="text-yellow-400 font-extrabold">Brand Store</span> 😱🔥</h1>
        <p class="mb-10"> This is an example project</p>
        <div class="grid gap-4 grid-flow-col grid-rows-3 xl:grid-cols-3 xl:grid-rows-1 " >
            <div class="grid justify-items-center w-300">
                <img class="rounded-lg max-h-64 object-fill hover:scale-105 transition" src="https://media.istockphoto.com/id/1138429558/photo/rows-of-shelves.jpg?s=1024x1024&w=is&k=20&c=bMRYi_ay8T0EtezBRkK-JJ98LpgcC8o6ri2Ixo-1l4c=">
                <h2 class="font-bold text-xl text-center p-4">Local Business</h2>
                <p class="text-center mb-4 max-w-80">All of our warehouses and offices are located within germany</p>
            </div>
            <div class="grid justify-items-center w-300">
                <img class="rounded-lg max-h-64 object-fill hover:scale-105 transition" src="https://as2.ftcdn.net/v2/jpg/05/64/52/81/1000_F_564528141_tqM4rP1fCt4P0N9W2nN4ZT1lCbO9q8ty.jpg">
                <h2 class="font-bold text-xl text-center p-4">Satisfaction Guarantee</h2>
                <p class="text-center mb-4 max-w-80">If you are not 100% satisfied with your purchase we offer a 30day, no-questions-asked return policy!</p>
            </div>
            <div class="grid justify-items-center w-300">
                <img class="rounded-lg max-h-64 object-cover hover:scale-105 transition" src="https://i.pinimg.com/originals/3c/9c/42/3c9c42fc8204c4e7eadff8257fdb5497.jpg">
                <h2 class="font-bold text-xl text-center p-4">Ecofriendly</h2>
                <p class="text-center mb-4 max-w-80">We only use recycled materials for our packaging and have partnered with <a class ="text-green-800" href="https://onetreeplanted.org/">onetreeplanted.org</a> to plant 1 tree for every purchase!</p>
            </div>
        </div>
        <p class="m-10 text-3xl font-medium text-center bg-yellow-400 rounded-lg p-2 hover:scale-105 hover:bg-yellow-300 transition">
            <NuxtLink to="/products">Take a look at our Products</NuxtLink>
        </p>
    </div>
</template>

<script>
    definePageMeta({
        layout: "default",
    })

</script>

<style scoped>
    
</style>