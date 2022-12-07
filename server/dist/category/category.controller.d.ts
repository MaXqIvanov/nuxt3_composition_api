import { CategoryService } from './category.service';
import { Category } from './schemas/category.schema';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    getAll(): Promise<Category[]>;
}
