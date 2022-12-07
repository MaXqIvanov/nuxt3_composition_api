import { CategoryService } from './category.service';
import { Controller, Get } from '@nestjs/common';
import { Category } from './schemas/category.schema';

@Controller('api/category')
export class CategoryController {

    constructor(private readonly categoryService: CategoryService){

    }

    @Get()
    getAll(): Promise<Category[]> {
        return this.categoryService.getAll()
    }

}
