<template>
    <section>
        <header>{{ category ? category.name : '' }}</header>
        <ContainerScroll>
            <AppLoadingInline v-if="loading" />
            <SimuItemList v-else :items="items">
                <template v-slot="{ item }">
                    <SimuItem :item="item" :current="itemId" @select="selectItem" />
                </template>
            </SimuItemList>
        </ContainerScroll>
        <footer>
            <AppButton @click="selectCategory(null)">Cancel</AppButton>
            <AppButton theme="primary" @click="saveItem(categoryId)">Select</AppButton>
        </footer>
    </section>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useSimulationStore } from '~/stores/simulation/index'


const simulationStore = useSimulationStore()
const { loading, category, categoryId, items, itemId } = storeToRefs(simulationStore)
const { selectItem, saveItem, selectCategory } = simulationStore
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
</style>