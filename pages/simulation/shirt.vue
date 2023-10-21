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
import { useSimulationStore } from '~/stores/simulation'

const router = useRouter()
const { $toast } = useNuxtApp()
const simulationStore = useSimulationStore()
const { categoryId } = storeToRefs(simulationStore)
const { saveSimulation, setCategories, setControls, setRequireds } = simulationStore
const { getCategories, getCategoryControls, getRequiredCategory } = useDataApiStore()

const { data: categories, error: cateErr } = await getCategories()
if (cateErr.value) $toast('Can not get Categories!')
else setCategories(categories.value)

const { data: controls, error: contErr } = await getCategoryControls()
if (contErr.value) $toast('Can not get Categoru Controls!')
else setControls(controls.value)

const { data: requireds, error: reqErr } = await getRequiredCategory()
if (reqErr.value) $toast('Can not get Category Requireds!')
else setRequireds(requireds.value)

function onBack() {
    console.log("GO_BACK")
    router.replace('/')
}
</script>