import { RequiredCategory } from "~/interfaces/simulation"

const requireds:RequiredCategory[] = [
  {
    category_id: 3,
    item_ids: [28],
    category_ids: [5]
  },
  {
    category_id: 3,
    item_ids: [25, 26, 34],
    category_ids: [4, 5]
  },
  {
    category_id: 3,
    item_ids: [29, 30, 31, 33, 35],
    category_ids: [4, 5, 6]
  }
]

export default defineEventHandler((event) => {
  return requireds
})