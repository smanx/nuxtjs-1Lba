export default defineEventHandler((event) => {
    console.log('openai', Date.now())
    return {
        api: 'works'
    }
})
