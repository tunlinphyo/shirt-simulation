
export const useDataApiStore = () => {
    function getCategories() {
        return useFetch('/api/categories')
    }

    function getCategoryItems() {
        return useFetch('/api/categories/items')
    }

    function getCategoryControls() {
        return useFetch('/api/categories/controls')
    }

    function getRequiredCategory() {
        return useFetch('/api/categories/requireds')
    }

    return {
        getCategories,
        getCategoryItems,
        getCategoryControls,
        getRequiredCategory,
    }
}