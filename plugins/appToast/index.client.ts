import { init, Toast, Toasts } from "./toast"
import './toast.css'

export default defineNuxtPlugin((nuxtApp) => {
    const Toster = init()
    console.log('Nuxt options:', nuxtApp);
    return {
        provide: {
            toast: async (msg:string) => await Toast(Toster, msg),
            toasts: async (messages:string[], wait?:number) => await Toasts(Toster, messages, wait)
        }
    }
})