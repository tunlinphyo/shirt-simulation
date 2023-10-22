export const wait = (delay:number = 300) => {
    return new Promise((resolve) => {
        const timeout = setTimeout(() => resolve(true), delay)
    })
}