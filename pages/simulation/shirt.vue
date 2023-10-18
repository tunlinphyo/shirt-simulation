<template>
    <LayoutSimulation>
        <template #media>
            <SimuDisplay />
        </template>
        <template #body>
            <SimuContainer
                @back="onBack"
                @save="saveSimulation"
            >
                <SimuCategoryList />
            </SimuContainer>
            <Transition name="slide">
                <SimuItemContainer v-if="categoryId" />
            </Transition>
        </template>
    </LayoutSimulation>
  </template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useSimulationStore } from '~/stores/simulation/index'

const router = useRouter()
const simulationStore = useSimulationStore()
const { categoryId } = storeToRefs(simulationStore)
const { saveSimulation, setCategories, setControls } = simulationStore
const { getCategories, getCategoryControls } = useDataApiStore()

const { data: categories, error: cateErr } = await getCategories()
if (cateErr.value) console.log('ERROR_OCCUR')
else setCategories(categories.value)

const { data: controls, error: contErr } = await getCategoryControls()
if (contErr.value) console.log('ERROR_OCCUR')
else setControls(controls.value)

function onBack() {
    router.back()
}
</script>