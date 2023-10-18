<template>
    <ul>
        <li v-for="item in items" :key="item.id">
            <slot :item="item"></slot>
        </li>
    </ul>
</template>

<script lang="ts" setup>
import { CategoryItem } from '~/interfaces/simulation'

export interface Props {
  items: CategoryItem[];
}

const props = defineProps<Props>()
const emit = defineEmits()

function onSelect(id:number) {
  emit('select', id)
}
</script>

<style scoped>
section {
    position: absolute;
    top: 0; bottom: 0;
    left: 0; right: 0;
    background-color: #fff;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: 50px minmax(0, 1fr) 60px;
}
header {
    padding: 0 20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-bottom: 1px solid #ddd;
    font-size: 1.2rem;
}
footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;
    padding: 0 20px;
    border-top: 1px solid #ddd;
}
ul {
    margin: 0;
    padding: 20px;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 4px;
}
</style>