import {
    Category, CategoryItem,
    RemoveCategory,
    NullableId, SelectedItem
} from "~/interfaces/simulation"
import { PATTERN_ID, PATTERN_SIZE_ID, PATTERN_COLOR_ID } from "./const"

export function _getValue(list: CategoryItem[], categoryId:NullableId, selected: SelectedItem): CategoryItem | undefined {
    if (!categoryId) return undefined
    const itemId = selected[categoryId]
    if (itemId) {
        const item = list.find(item => item.id === itemId)
        return item
    }
    return undefined
}

export function _applyControl(list:Category[], removes:RemoveCategory[], selected: SelectedItem): Category[] {
    const twoDimensionalArray = [...removes]
        .filter(item => {
            const itemId = selected[item.category_id]
            return itemId === item.item_id
        })
        .map(item => item.category_ids)

    const toRemoves = Array.from(new Set(twoDimensionalArray.flat()))

    return list.filter(cate => !toRemoves.includes(cate.id))
}

export function _seDefaultValues(selected:SelectedItem, categoryId:number) {
    if (categoryId == PATTERN_ID) {
        if (!selected[PATTERN_SIZE_ID]) selected[PATTERN_SIZE_ID] = 27
        if (!selected[PATTERN_COLOR_ID]) selected[PATTERN_COLOR_ID] = 41
    }
    return { ...selected }
}

export function _getActiveId(constId: number, categoryId:NullableId, tempId:NullableId, selected:SelectedItem) {
    if (!categoryId) return selected[constId]
    if (categoryId == constId) return tempId
    return selected[constId]
}