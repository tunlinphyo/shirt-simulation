import { Category } from "~/interfaces/simulation"

const categories: Category[] = [
    {
        id: 1,
        name: 'Designs',
        parent: null,
    },
    {
        id: 2,
        name: 'Colors',
        parent: null,
    },
    {
        id: 3,
        name: 'Patterns',
        parent: null,
    },
    {
        id: 4,
        name: 'Sizes',
        parent: 3,
    },
    {
        id: 5,
        name: 'Base Color',
        parent: 3,
    }
]
export default defineEventHandler((event) => {
    return categories
})