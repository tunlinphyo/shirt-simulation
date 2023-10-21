import { createAlert, createConfirm, createLoading} from "./modal"
import { AlertConfig, ConfirmConfig } from "./modal.interface"
import "./modal.css"

export default defineNuxtPlugin(() => {
  return {
      provide: {
          alert: (msg: string, config?:AlertConfig) => createAlert(msg, config),
          confirm: (msg: string, config?:ConfirmConfig) => createConfirm(msg, config),
          loading: (msg?: string) => createLoading(msg)
      }
  }
})