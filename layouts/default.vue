<template>
    <div class="font-[Roboto]">
        <header class="shadow-md bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/"><h1 class="font-extrabold text-xl md:text-3xl mr-2"><span class="text-yellow-400">Brand Store</span> 😱🔥</h1></NuxtLink>
                <ul class="flex gap-4 max-h-40 text-xl md:text-2xl justify-center align-middle flex-wrap">
                    <NuxtLink class="hover:text-yellow-400 transition" to="/">Home</NuxtLink>
                    <NuxtLink class="hover:text-yellow-400 transition" to="/faq">FAQ</NuxtLink>
                    <NuxtLink class="hover:text-yellow-400 transition" to="/about">About</NuxtLink>
                    <NuxtLink class="max-h-[2.3rem] bg-yellow-400 rounded-lg px-2 py-1 hover:scale-105 hover:bg-yellow-300 transition" to="/products"><span class="text-black font-medium">Products</span></NuxtLink>
                </ul>
            </nav>
        </header>

        <div class="shadow-md mx-auto">
            <slot />
        </div>

        <footer class="container flex justify-start p-2">
            <ul class="flex gap-4">
                <NuxtLink to="/contact">Contact</NuxtLink>
                <NuxtLink to="/impress">Impress</NuxtLink>
            </ul>
        </footer>
    </div>
</template>

<style>
    body {
        margin: 0 !important;
    }
</style>

<style scoped>
    .router-link-exact-active {
        @apply text-yellow-400;
        font-weight: bold;
        transition: all 0.1s ease-in-out;
    }

</style>