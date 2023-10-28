import { init, createAlert, createConfirm, createLoading, createPrompt} from "./modal"
import { AlertConfig, ConfirmConfig, PromptConfig } from "./modal.interface"
import "./modal.css"

export default defineNuxtPlugin(() => {
  const Modaler = init()
  return {
      provide: {
          alert: (msg:string, config?:AlertConfig) => createAlert(Modaler, msg, config),
          confirm: (msg:string, config?:ConfirmConfig) => createConfirm(Modaler, msg, config),
          prompt: (question:string, config?:PromptConfig) => createPrompt(Modaler, question, config),
          loading: (msg?:string) => createLoading(Modaler, msg)
      }
  }
})