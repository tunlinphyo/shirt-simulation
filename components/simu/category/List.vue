<template>
    <ul>
        <li v-for="category in categories" :key="category.id">
            <SimuCategoryItem :item="category" :current="categoryId" @select="selectCategory" />
        </li>
    </ul>
</template>

<script lang="ts" setup>

import { storeToRefs } from 'pinia'
import { useSimulationStore } from '~/stores/simulation'

const simulationStore = useSimulationStore()
const { categories, categoryId } = storeToRefs(simulationStore)
const { selectCategory } = simulationStore
</script>

<style scoped>
ul {
    margin: 0;
    padding: 20px;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    gap: 4px;
}
</style>~/stores/simulation/simulation~/stores/simulation