import { Category, CategoryDocument } from './schemas/category.schema';
import { Model } from 'mongoose';
export declare class CategoryService {
    private CategoryModel;
    constructor(CategoryModel: Model<CategoryDocument>);
    private category;
    getAll(): Promise<Category[]>;
}
