
export const useSimuMenu = () => {
    const toggle = ref(false)

    function toggleMenu() {
        toggle.value = !toggle.value
    }

    return {
        toggle,
        toggleMenu,
    }
}