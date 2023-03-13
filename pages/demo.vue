<template>
    <div>{{ demo }}</div>
</template>

<script setup>
let demo = 'demo:' + Date.now()
console.log('demo', demo)
fetch('https://petstore.swagger.io/v2/pet/1', { headers: { accept: 'application/json' } })
</script>