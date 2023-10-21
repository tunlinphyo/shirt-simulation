import Toast from "./toast"
import './toast.css'

export default defineNuxtPlugin(() => {
    return {
        provide: {
            toast: async (msg: string) => await Toast(msg)
        }
    }
})