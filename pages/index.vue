<script setup>
import { useCounterStore } from '~/stores/myStore'

definePageMeta({
    middleware: 'greeting'
})
const { sayHello } = useUtils();
sayHello();
const { $saySomething } = useNuxtApp()
$saySomething('Yolo')
const counter = useCounter()

// access the `store` variable anywhere in the component ✨
const store = useCounterStore()

// Server/API call

const response = await $fetch('/api/hello')
</script>


<template>
    <main>
        <h1 class="Main">Main Page</h1>
        <img src="/favicon.ico" />
        <IconsBell />
        <ContentDoc />
        <h2>useState:</h2>
        <div class="MainCounter">
            Counter: {{ counter }}
            <button @click="counter++">
                +
            </button>
            <button @click="counter--">
                -
            </button>
        </div>
        <Counter />
        <h2>Pinia:</h2>
        <div>{{ store.name }}: {{ store.count }} <button @click="store.increment">
                +
            </button> or double: {{ store.doubleCount }}</div>
        <h2>API:</h2>
        <div>{{ response }}</div>
    </main>
</template>