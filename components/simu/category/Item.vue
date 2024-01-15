
<template>
    <button @click="onClick(item.id)"
        :class="{'error': item.error}"
    >
        <div class="name">{{ item.name }}</div>
        <div class="value">{{ item.value }}</div>
        <div class="end"></div>
    </button>
</template>

<script lang="ts" setup>
import { CategoryWithValue } from '~/interfaces/simulation'

export interface Props {
    item: CategoryWithValue;
    current: number | null;
}

const props = defineProps<Props>()
const emit = defineEmits()

function onClick(id: number) {
    emit('select', id)
}
</script>

<style scoped>
button {
    width: 100%;
    height: 80px;
    display: grid;
    grid-template-columns: minmax(0, .6fr) minmax(0, 1fr) 24px;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding: 0 20px;
    border: none;
    outline: none;
    background-color: #fff;
    border: 1px solid #aaa;
    text-align: left;
    cursor: pointer;
    border-radius: 3px;
    font-size: .9rem;
    font-family: var(--font);
}

button:active,
button:hover,
button:focus {
    box-shadow: 0 0 0 2px #6c5ce7;
}

button.error {
    border-color: #e74c3c;
    box-shadow: 0 0 0 1px #e74c3c;
}

.name {
    color: #666;
}

.value {
    text-transform: uppercase;
    letter-spacing: 1px;
}

.end {
    position: relative;
}

.end::before,
.end::after {
    content: '';
    display: block;
    position: absolute;
    width: 15px;
    height: 0;
    border-top: 1px solid #ccc;
}

.end::before {
    transform: translate(0, -5px) rotate(45deg);
}

.end::after {
    transform: translate(0, 5px) rotate(-45deg);
}</style>