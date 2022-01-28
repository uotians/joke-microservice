import { Category } from "src/categories/entities/category.entity"

export class Joke {
    id: number
    name: string
    text: string
    rating: number
    unitPrice: number
    created: Date
    modified: Date
    isActive: boolean
    category: Category
}