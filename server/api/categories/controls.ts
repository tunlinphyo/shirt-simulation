import { RemoveCategory } from "~/interfaces/simulation"

export const controls: RemoveCategory[] = [
    {
        category_id: 3,
        item_id: 28,
        category_ids: [4, 6]
    },
    {
        category_id: 3,
        item_id: 25,
        category_ids: [6]
    },
    {
        category_id: 3,
        item_id: 26,
        category_ids: [6]
    },
    {
        category_id: 3,
        item_id: 34,
        category_ids: [6]
    }
]

export default defineEventHandler((event) => {
    return controls
})