import { createElem } from "./modal.utils"
import { AlertConfig, ConfirmConfig } from "./modal.interface"

const init = () => {
    const node = document.createElement('section')
    node.classList.add('app-modal-group')

    document.firstElementChild?.insertBefore(node, document.body)
    return node
}

const closeModal = (modal: HTMLDialogElement) => {
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

const addModal = (modal: HTMLDialogElement) => {
    Modaler.appendChild(modal)
}

const Modaler = init()

export const createAlert = (text: string, config?: AlertConfig) => {
    const node = createElem('dialog', { class: 'app-module' }) as HTMLDialogElement
    node.classList.add('app-module-alert')
    const p = createElem('p', { text })
    const form = createElem('form', { attr: ['method', 'alert'] })
    const button = createElem('button', { text: config && config.buttonText || 'OK' })

    form.appendChild(button)
    node.appendChild(p)
    node.appendChild(form)

    addModal(node)
    node.showModal()

    return new Promise((resolve) => {
        button.addEventListener('click', (event) => {
            event.preventDefault()
            closeModal(node)
            resolve(true)
        })
    })
}

export const createConfirm = (text: string, config?: ConfirmConfig) => {
    const node = createElem('dialog', { class: 'app-module' }) as HTMLDialogElement
    node.classList.add('app-module-confirm')
    const p = createElem('p', { text })
    const form = createElem('form', { attr: ['method', 'confirm'] })
    const cancelButton = createElem('button', { text: config && config.cancelText || 'cancel' })
    const confirmButton = createElem('button', { text: config && config.confirmText || 'confirm' })

    form.appendChild(cancelButton)
    form.appendChild(confirmButton)
    node.appendChild(p)
    node.appendChild(form)

    addModal(node)
    node.showModal()

    return new Promise((resolve) => {
        cancelButton.addEventListener('click', (event) => {
            event.preventDefault()
            closeModal(node)
            resolve(false)
        })
        confirmButton.addEventListener('click', (event) => {
            event.preventDefault()
            closeModal(node)
            resolve(true)
        })
    })
}

export const createLoading = (text?: string) => {
    const node = createElem('dialog', { class: 'app-loading' }) as HTMLDialogElement

    if (text) {
        node.classList.add('app-loading-with-text')
        const p = createElem('p', { text })
        node.appendChild(p)
    }
    const loading = createElem('div', { class: 'app-loading-icon' })
    node.appendChild(loading)

    addModal(node)
    node.showModal()

    document.addEventListener("keydown", disableEscapeKey)
    return () => {
        closeModal(node)
        document.removeEventListener("keydown", disableEscapeKey)
    }
}

function disableEscapeKey(event: KeyboardEvent) {
    if (event.key === "Escape") {
        event.preventDefault();
    }
}
