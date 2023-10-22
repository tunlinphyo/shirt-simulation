import { AlertConfig, ConfirmConfig } from "./modal.interface"

const init = () => {
    const node = document.createElement('section')
    node.classList.add('app-modal-group')

    document.firstElementChild?.insertBefore(node, document.body)
    return node
}

const removeModal = (Modaler:HTMLElement, modal: HTMLDialogElement) => {
    modal.classList.add('app-modal-closing')

    return new Promise(async (resolve, reject) => {
        await Promise.allSettled(
            modal.getAnimations().map(animation =>
                animation.finished
            )
        )
        modal.close()
        Modaler.removeChild(modal)
        resolve(true)
    })
}

const addModal = (Modaler:HTMLElement, modal: HTMLDialogElement) => {
    Modaler.appendChild(modal)
}

const createAlert = (Modaler:HTMLElement, text: string, config?: AlertConfig) => {
    const node = document.createElement('dialog')
    node.classList.add('app-module')
    node.classList.add('app-module-alert')

    const p = document.createElement('p') 
    p.textContent = text

    const form = document.createElement('form')
    form.setAttribute('method', 'alert')

    const button = document.createElement('button')
    button.textContent = config && config.buttonText || 'ok'

    form.appendChild(button)
    node.appendChild(p)
    node.appendChild(form)

    addModal(Modaler, node)
    node.showModal()

    return new Promise((resolve) => {
        button.addEventListener('click', (event) => {
            event.preventDefault()
            removeModal(Modaler, node)
            resolve(true)
        })
    })
}

const createConfirm = (Modaler:HTMLElement, text: string, config?: ConfirmConfig) => {
    const node = document.createElement('dialog')
    node.classList.add('app-module')
    node.classList.add('app-module-confirm')

    const p = document.createElement('p') 
    p.textContent = text

    const form = document.createElement('form')
    form.setAttribute('method', 'confirm')

    const cancelButton = document.createElement('button')
    cancelButton.textContent = config && config.cancelText || 'cancel'

    const confirmButton = document.createElement('button')
    confirmButton.textContent = config && config.confirmText || 'confirm'

    form.appendChild(cancelButton)
    form.appendChild(confirmButton)
    node.appendChild(p)
    node.appendChild(form)

    addModal(Modaler, node)
    node.showModal()

    return new Promise((resolve) => {
        cancelButton.addEventListener('click', (event) => {
            event.preventDefault()
            removeModal(Modaler, node)
            resolve(false)
        })
        confirmButton.addEventListener('click', (event) => {
            event.preventDefault()
            removeModal(Modaler, node)
            resolve(true)
        })
    })
}

const disableEscapeKey = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
        event.preventDefault();
    }
}

const createLoading = (Modaler:HTMLElement, text?: string) => {
    const node = document.createElement('dialog')
    node.classList.add('app-loading')

    if (text) {
        node.classList.add('app-loading-with-text')

        const p = document.createElement('p')
        p.textContent = text
        node.appendChild(p)
    }
    const loading = document.createElement('div')
    loading.classList.add('app-loading-icon')
    node.appendChild(loading)

    addModal(Modaler, node)
    node.showModal()

    document.addEventListener("keydown", disableEscapeKey)
    return () => {
        removeModal(Modaler, node)
        document.removeEventListener("keydown", disableEscapeKey)
    }
}

export { init, createAlert, createConfirm, createLoading }
