import { RemoveCategory } from "~/interfaces/simulation"

export const controls: RemoveCategory[] = [
    {
        category_id: 3,
        item_id: 28,
        category_ids: [4]
    }
]

export default defineEventHandler((event) => {
    return controls
})