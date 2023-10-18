
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

    return {
        getCategories,
        getCategoryItems,
        getCategoryControls,
    }
}