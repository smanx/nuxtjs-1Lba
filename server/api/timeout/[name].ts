export default defineEventHandler(async (event: any) => {
    let sleepTime = event.context.params.name
    console.log('sleepTime', sleepTime)
    await new Promise((resolve) => setTimeout(resolve, sleepTime))
    return `Hello, ${event.context.params.name}ms!`
})
