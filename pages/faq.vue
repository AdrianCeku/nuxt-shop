<template>
    <div class="select-none pb-4">
		<details class="">
            <summary class="cursor-pointer transition ease-in-out rounded-2xl bg-slate-100 m-5 p-4 shadow-sm text-xl hover:bg-slate-300"> 
                <p class="font-medium cursor-pointer">Where do you ship?</p>
            </summary>
            <div class="mx-10 p-4 rounded-xl bg-slate-100">
                <p> We ship everywhere wihtin the EU and America.</p>
            </div>
		</details>
		<details class="">
            <summary class="cursor-pointer transition ease-in-out rounded-2xl bg-slate-100 m-5 p-4 shadow-sm text-xl hover:bg-slate-300"> 
                <p class="font-medium cursor-pointer">How much does shipping cost?</p>
            </summary>
            <div class="mx-10 p-4 rounded-xl bg-slate-100">
                <p> Shipping costs within Germany are <span class="font-semibold">5€</span></p>
                <p> <br>Shipping costs outside of Germany, but within the EU are <span class="font-semibold">10€</span>.</p>
                <p> <br>Due to international shipping fees, shipping to America amounts to <span class="font-semibold">15€ + any amount customs may charge you</span>.</p>
            </div>
		</details>
		<details class="">
            <summary class="cursor-pointer transition ease-in-out rounded-2xl bg-slate-100 m-5 p-4 shadow-sm text-xl  hover:bg-slate-300 "> 
                <p class="font-medium ">How long does Shipping take?</p>
            </summary>
            <div class="mx-10 mb-5 p-4 rounded-xl bg-slate-100">
                <p> Orders to Germany usually get delivered within <span class="font-semibold"> 2-3 business days</span>. </p>
                <p> <br>Orders to the EU usually get delivered within <span class="font-semibold"> 4-5 business days</span>. </p>
                <p> <br>Orders to America usually get delivered within <span class="font-semibold"> 14-21 business days</span>. </p>
            </div>
		</details>
    </div>
</template>

<script setup>

</script>

<style scoped>
</style>