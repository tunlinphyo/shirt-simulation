import { init, createAlert, createConfirm, createLoading} from "./modal"
import { AlertConfig, ConfirmConfig } from "./modal.interface"
import "./modal.css"

export default defineNuxtPlugin(() => {
  const Modaler = init()
  return {
      provide: {
          alert: (msg: string, config?:AlertConfig) => createAlert(Modaler, msg, config),
          confirm: (msg: string, config?:ConfirmConfig) => createConfirm(Modaler, msg, config),
          loading: (msg?: string) => createLoading(Modaler, msg)
      }
  }
})