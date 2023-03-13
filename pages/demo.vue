<template>
    <div>{{ demo }}</div>
</template>

<script setup>
let demo = 'demo:' + Date.now()
console.log('demo', demo)
</script>