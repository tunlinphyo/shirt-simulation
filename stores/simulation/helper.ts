import {
    Category, CategoryItem,
    RemoveCategory,
    NullableId, SelectedItem, CategoryWithValue, RequiredCategory
} from "~/interfaces/simulation"
import { PATTERN_ID, PATTERN_SIZE_ID, PATTERN_COLOR_ID, PATTERN_SPACING_ID } from "./const"

export function _getValue(list: CategoryItem[], categoryId:NullableId, selected:SelectedItem): CategoryItem | undefined {
    if (!categoryId) return undefined
    const itemId = selected[categoryId]
    if (itemId) {
        const item = list.find(item => item.id === itemId)
        return item
    }
    return undefined
}

export function _getRequired(list:RequiredCategory[], categoryId:number, selected:SelectedItem): boolean {
    const items = list
        .filter(item => (
            item.category_ids.includes(categoryId)
            && item.item_ids.includes(selected[item.category_id] as number)
        ))

    return !!items.length
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

export function _setDefaultValues(selected:SelectedItem, categoryId:number) {
    if (categoryId == PATTERN_ID) {
        if (!selected[PATTERN_SIZE_ID]) selected[PATTERN_SIZE_ID] = 27
        if (!selected[PATTERN_COLOR_ID]) selected[PATTERN_COLOR_ID] = 41
        if (!selected[PATTERN_SPACING_ID]) selected[PATTERN_SPACING_ID] = 51
    }
    return { ...selected }
}

export function _getActiveId(constId: number, categoryId:NullableId, tempId:NullableId, selected:SelectedItem) {
    if (!categoryId) return selected[constId]
    if (categoryId == constId) return tempId
    return selected[constId]
}

export function _getActiveData(categoryId:NullableId, tempId:NullableId, selected:SelectedItem, items:CategoryItem[]) {
    const designId = _getActiveId(DESIGN_ID, categoryId, tempId, selected)
    const colorId = _getActiveId(COLOR_ID, categoryId, tempId, selected)
    const pattternId = _getActiveId(PATTERN_ID, categoryId, tempId, selected) 
    const pattternSizeId = _getActiveId(PATTERN_SIZE_ID, categoryId, tempId, selected) 
    const patternSpacingId = _getActiveId(PATTERN_SPACING_ID, categoryId, tempId, selected)
    const patternColorId = _getActiveId(PATTERN_COLOR_ID, categoryId, tempId, selected)

    const design = designId && items.find(item => item.id === designId)
    const color = colorId && items.find(item => item.id === colorId)
    const pattern = pattternId && items.find(item => item.id === pattternId)
    const pattternSize = pattternSizeId && items.find(item => item.id === pattternSizeId)
    const patternSpacing = patternSpacingId && items.find(item => item.id === patternSpacingId)
    const patternColor = patternColorId && items.find(item => item.id === patternColorId)

    return {
        design,
        color,
        pattern,
        pattternSize,
        patternSpacing,
        patternColor
    }
}

export function _isErrors(list:CategoryWithValue[]) {
    const errors:string[] = []
    list.forEach((item:CategoryWithValue) => {
        if (item.error) errors.push(`${item.name} is required!`)
    })

    return errors
}

export function _waiting(time:number = 3000) {
    return new Promise(resolve => {
        const timeout = setTimeout(() => {
            clearTimeout(timeout)
            resolve(true)
        }, time)
    })
}