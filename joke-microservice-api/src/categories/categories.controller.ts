import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from './entities/category.entity';

@Controller('categories')
export class CategoriesController {

    constructor(private readonly categoriesService: CategoriesService) {}

    @Post()
    async createCategory(@Body()CreateCategoryDto: CreateCategoryDto): Promise<Category> {
        return await this.categoriesService.insertCategory(CreateCategoryDto)
    }

    @Get()
    async getCategories(): Promise<Category[]> {
        return await this.categoriesService.getCategories()
    }

    @Get(':id')
    async getCategoryById(@Param('id') id: string): Promise<Category> {
        return await this.categoriesService.getCategory(id)
    }

    @Delete(':id')
    async deleteCategoryById(@Param('id') id: string): Promise<Category> {
        return await this.categoriesService.deleteCategory(id)
    }
}
