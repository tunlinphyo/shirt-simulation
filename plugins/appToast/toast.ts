const init = () => {
    const node = document.createElement('section')
    node.classList.add('app-toast-group')

    document.firstElementChild?.insertBefore(node, document.body)
    return node
}

const createToast = (text:string) => {
    const node = document.createElement('output')

    node.innerText = text
    node.classList.add('app-toast')
    node.setAttribute('role', 'status')
    node.setAttribute('aria-live', 'polite')

    return node
}

const addToast = (Toaster:HTMLElement, toast:HTMLOutputElement) => {
    const { matches: motionOK } = window.matchMedia(
        '(prefers-reduced-motion: no-preference)'
    )

    Toaster.children.length && motionOK
        ? flipToast(Toaster, toast)
        : Toaster.appendChild(toast)
}

// https://aerotwist.com/blog/flip-your-animations/
const flipToast = (Toaster:HTMLElement, toast:HTMLOutputElement) => {
    const first = Toaster.offsetHeight
    Toaster.appendChild(toast)
    const last = Toaster.offsetHeight
    const invert = last - first

    const animation = Toaster.animate([
        { transform: `translateY(${invert}px)` },
        { transform: 'translateY(0)' }
    ], {
        duration: 150,
        easing: 'ease-out',
    })

    animation.startTime = document.timeline.currentTime
}


const waiting = (time:number = 3000) => {
    return new Promise(resolve => {
        const timeout = setTimeout(() => {
            clearTimeout(timeout)
            resolve(true)
        }, time)
    })
}

const Toast = (Toaster:HTMLElement ,text:string) => {
    let toast = createToast(text)
    addToast(Toaster, toast)

    return new Promise(async (resolve, reject) => {
        await Promise.allSettled(
            toast.getAnimations().map(animation =>
                animation.finished
            )
        )
        Toaster.removeChild(toast)
        resolve(text)
    })
}

const Toasts = async (Toaster:HTMLElement, texts:string[], wait:number = 300) => {
    for await (const text of texts) {
        Toast(Toaster, text)
        await waiting(wait)
    }
}

export { init, Toast, Toasts }