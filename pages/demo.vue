<template>
    <div>{{ demo }}</div>
</template>

<script setup>
let demo = 'demo:' + Date.now()
console.log('demo', demo)

setTimeout(() => {
    console.log('setTimeout', demo, Date.now())
}, 100)

if (process.client) {
    // 客户端执行的代码
    let test = await fetch('https://petstore.swagger.io/v2/store/inventory', { headers: { accept: 'application/json' } })
    test = await test.json()
    console.log('test', test)
}
</script>