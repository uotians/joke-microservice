import { Category } from "src/categories/entities/category.entity"

export class CreateJokeDto {
    id?: number

    name: string
    text: string

    rating?: number
    unitPrice?: number

    created?: Date
    modified?: Date

    isActive: boolean
    category?: string
}