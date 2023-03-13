export default defineEventHandler((event) => {
    console.log('hello', Date.now())
    return {
        api: 'works'
    }
})
