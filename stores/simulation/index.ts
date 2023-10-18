import { defineStore } from 'pinia'
import { _getValue, _applyControl, _seDefaultValues, _getActiveId } from './healper'
import {
    Category, CategoryWithValue,
    CategoryItem,
    SimuData,
    NullableId, SelectedItem, RemoveCategory
} from "~/interfaces/simulation"
import { COLOR_ID, DESIGN_ID, PATTERN_COLOR_ID, PATTERN_ID, PATTERN_SIZE_ID } from './const'

export const useSimulationStore = defineStore('simulation-store', () => {
    const { getCategoryItems } = useDataApiStore()

    const dataCategories = ref<Category[]>([])
    const dataCategoryItems = ref<CategoryItem[]>([])
    const removeCategories = ref<RemoveCategory[]>([])

    const loading = ref(false)
    const currentCategory = ref<NullableId>(null)
    const selectedItems = ref<SelectedItem>({})
    const tempItemId = ref<NullableId>(null)

    const currentCategories = computed<CategoryWithValue[]>(() => {
        return _applyControl(dataCategories.value, removeCategories.value, selectedItems.value)
            .map(cate => ({
                ...cate,
                value: _getValue(dataCategoryItems.value, cate.id, selectedItems.value)?.name || ''
            }))
    })
    const selectedCateogry = computed<Category | undefined>(() => {
      return dataCategories.value.find(item => item.id === currentCategory.value)
    })
    const currentItems = computed<CategoryItem[]>(() => {
        if (!currentCategory.value) return []
        return dataCategoryItems.value.filter(item => item.category_id == currentCategory.value)
    })
    const selectedItemId = computed<NullableId>(() => {
        if (!currentCategory.value) return null
        return tempItemId.value // || selectedItems.value[currentCategory.value]
    })

    const simulationData = computed<SimuData>(() => {
        const designId = _getActiveId(DESIGN_ID, currentCategory.value, tempItemId.value, selectedItems.value)
        const colorId = _getActiveId(COLOR_ID, currentCategory.value, tempItemId.value, selectedItems.value)
        const pattternId = _getActiveId(PATTERN_ID, currentCategory.value, tempItemId.value, selectedItems.value) // selected[PATTERN_ID]
        const pattternSizeId = _getActiveId(PATTERN_SIZE_ID, currentCategory.value, tempItemId.value, selectedItems.value) // selected[PATTERN_SIZE_ID]
        const pattternColorId = _getActiveId(PATTERN_COLOR_ID, currentCategory.value, tempItemId.value, selectedItems.value) // selected[PATTERN_COLOR_ID]

        const design = designId && dataCategoryItems.value.find(item => item.id === designId)
        const color = colorId && dataCategoryItems.value.find(item => item.id === colorId)
        const pattern = pattternId && dataCategoryItems.value.find(item => item.id === pattternId)
        const pattternSize = pattternSizeId && dataCategoryItems.value.find(item => item.id === pattternSizeId)
        const patternColor = pattternColorId && dataCategoryItems.value.find(item => item.id === pattternColorId)

        return {
            'design': design ? design.value as string : '/shirts/1.png',
            'color': color ? color.value : '#fff',
            'pattern': pattern ? pattern.value : '',
            'patternSize': pattternSize ? pattternSize.value : 10,
            'patternColor': patternColor ? patternColor.value : '#fff',
        }
    })


    function setCategories(list:Category[] | null) {
        if (!list) return
        dataCategories.value = list
    }
    function setControls(list:RemoveCategory[] | null) {
        if (!list) return
        removeCategories.value = list
    }

    async function selectCategory(id:NullableId) {
        tempItemId.value = id ? selectedItems.value[id] : null
        currentCategory.value = id
        if (!dataCategoryItems.value.length) {
            loading.value = true
            const { data, error } = await getCategoryItems()
            loading.value = false
            if (error.value) console.log('ERROR_OCCUR')
            if (data.value) dataCategoryItems.value = data.value
        }
    }
    function selectItem(id:NullableId) {
        tempItemId.value = tempItemId.value === id ? null : id
    }
    function saveItem(categoryId:NullableId) {
        const temp = { ...selectedItems.value }
        if (!categoryId) return
        temp[categoryId] = tempItemId.value
        selectedItems.value = _seDefaultValues(temp, categoryId)
        selectCategory(null)
    }
    function cancelItem() {
        selectCategory(null)
    }
    function saveSimulation() {
        console.log('SAVE_SIMULATION', selectedItems.value)
    }

    return {
        loading,
        categoryId: currentCategory,

        categories: currentCategories,
        category: selectedCateogry,
        items: currentItems,
        itemId: selectedItemId,
        simulation: simulationData,

        setCategories,
        setControls,

        selectCategory,
        selectItem,
        saveItem,
        cancelItem,
        saveSimulation,
    }
})