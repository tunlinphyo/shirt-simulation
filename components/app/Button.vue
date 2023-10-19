<template>
    <button :class="theme || 'default'">
        <slot />
    </button>
</template>

<script lang="ts" setup>

export interface Props {
    theme?: string;
}

const props = defineProps<Props>()
const emit = defineEmits()

function onClick() {
    emit('click')
}
</script>

<style scoped>
button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    min-width: 140px;
    height: 40px;
    background-color: transparent;
    border: 1px solid #434343;
    border-radius: 2px;
    padding: 0 30px;
    text-transform: uppercase;
    font-size: .8rem;
    letter-spacing: 2px;
    cursor: pointer;
}

button.primary {
    background-color: #434343;
    color: #fff;
}

button:active,
button:hover,
button:focus {
    box-shadow: 0 0 0 2px #6c5ce7;
}
</style>
