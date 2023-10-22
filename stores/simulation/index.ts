import { defineStore } from 'pinia'
import { _getValue, _applyControl, _setDefaultValues, _getActiveData, _waiting, _isErrors, _getRequired } from './helper'
import {
    Category, CategoryWithValue,
    CategoryItem,
    SimuData,
    NullableId, SelectedItem, RemoveCategory, RequiredCategory
} from "~/interfaces/simulation"

export const useSimulationStore = defineStore('simulation-store', () => {
    const router = useRouter()
    const { getCategoryItems } = useDataApiStore()
    const { $toast, $toasts, $confirm, $loading } = useNuxtApp()

    const dataCategories = ref<Category[]>([])
    const dataCategoryItems = ref<CategoryItem[]>([])
    const removeCategories = ref<RemoveCategory[]>([])
    const requiredCategories = ref<RequiredCategory[]>([])

    const loading = ref(false)
    const submitted = ref(false)
    const currentCategory = ref<NullableId>(null)
    const selectedItems = ref<SelectedItem>({})
    const tempItemId = ref<NullableId>(null)

    const currentCategories = computed<CategoryWithValue[]>(() => {
        return _applyControl(dataCategories.value, removeCategories.value, selectedItems.value)
            .map(cate => {
                const value = _getValue(dataCategoryItems.value, cate.id, selectedItems.value)?.name || ''
                const required = _getRequired(requiredCategories.value, cate.id, selectedItems.value)
                return {
                    ...cate,
                    value,
                    error: submitted.value && (cate.required || required) && !value
                }
            })
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
        const {
            design,
            color,
            pattern,
            pattternSize,
            patternSpacing,
            patternColor
        } = _getActiveData(currentCategory.value, tempItemId.value, selectedItems.value, dataCategoryItems.value)

        return {
            'design': design ? design.value as string : '/shirts/1.png',
            'color': color ? color.value : '#fff',
            'pattern': pattern ? pattern.value : '',
            'patternSize': pattternSize ? pattternSize.value : 10,
            'patternSpacing': patternSpacing ? patternSpacing.value : 10,
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
    function setRequireds(list:RequiredCategory[] | null) {
        if (!list) return
        requiredCategories.value = list
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
        selectedItems.value = _setDefaultValues(temp, categoryId)
        selectCategory(null)
    }
    function cancelItem() {
        selectCategory(null)
    }
    async function saveSimulation() {
        submitted.value = true
        const errors = _isErrors(currentCategories.value)
        if (errors.length) {
            $toasts(errors)
            return
        }
        const result = await $confirm('Are you sure to checkout?')
        if (!result) return

        const close = $loading('Saving..')
        await _waiting(4000)
        close()

        $toast('This is a confirm toast.')
        console.log('SELECTED_DATA', { ...selectedItems.value })
        router.replace('/document/toasts')
        // _resetStore()
    }

    async function goHome() {
        router.replace('/')
    }

    function _resetStore() {
        loading.value = false
        submitted.value = false
        currentCategory.value = null
        selectedItems.value = {}
        tempItemId.value = null
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
        setRequireds,

        selectCategory,
        selectItem,
        saveItem,
        cancelItem,
        saveSimulation,
        goHome,
    }
})